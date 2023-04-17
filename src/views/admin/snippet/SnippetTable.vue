<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, rSnippetLabel, rSnippetTag, rSnippetType } from './data'
import { snippetApi, snippetLabelApi, snippetTagApi, snippetTypeApi } from '@/api'
import { aData, aCancel } from '../data'
import { navName } from '../utils/data'
import { tool } from '@/utils/common/tool'
import { clearSnippet, snippetForm } from '@/api/data/model/snippetMode'

const reload: any = inject('reload')
const del = async (data: any) => {
  await snippetApi.Del(data.id).then(r => {
    if (r.data) {
      reload()
      message.success(aData.SUCCESS)
      return
    }
    message.success(aData.FAIL)
  })
}
const addVisible = ref(false)
const edVisible = ref(false)
const rNav: any = ref([])
const tagStr = ref<string>('ALL')
const typeStr = ref<string>('ALL')
const LabelStr = ref<string>('ALL')

const edit = async (id: number) => {
  await snippetApi.GetById(id, false).then(r => {
    snippetForm.id = r.data.id
    snippetForm.name = r.data.name
    snippetForm.text = r.data.text
    snippetForm.tagId = r.data.tag.id
    snippetForm.typeId = r.data.type.id
    snippetForm.userId = r.data.user.id
    snippetForm.labelId = r.data.label.id
  })
  edVisible.value = true
}

const add = () => {
  clearSnippet()
  addVisible.value = true
}

/**
 * @description: 分页查询
 * @param {number} identity 所有:0|分类:1|标签:2|用户:3|子标签:4
 * @param {number} name 查询参数(多条件以','分割)
 */
const QPaging = async (identity: number, name: string) => {
  await snippetApi.GetPaging(identity, name, 1, 9000, 'id', true, false).then(res => {
    rNav.value = res.data
  })
}

const QSearch = async (name: string, identity: number) => {
  if (name === aData.ALL) {
    await QPaging(0, aData.NULL)
  }
  await QPaging(identity, name)
}
async function search(name: any) {
  if (name === '') {
    return
  }
  await snippetApi.GetContains(0, aData.NULL, name, false, 1, 999).then(async res => {
    await tool.MomentTimeList(res)
    rNav.value = res.data
  })
}

async function GetApi() {
  await QPaging(0, tagStr.value)
  await axios
    .all([await snippetTagApi.GetAll(false), await snippetTypeApi.GetAll(false), await snippetLabelApi.GetAll(false)])
    .then(
      axios.spread((tag: any, type: any, label: any) => {
        rSnippetTag.value = tag.data
        rSnippetType.value = type.data
        rSnippetLabel.value = label.data
      })
    )
  navName.name = '代码片段'
  navName.name2 = '片段列表'
}

onMounted(async () => {
  await GetApi()
})
</script>
<template>
  <div class="table">
    <a-space>
      <a-button @click="add">添加</a-button>
      <a-button @click="reload()">刷新</a-button>
      <a-select v-model:value="tagStr" style="width: 120px" @change="QSearch(tagStr, 2)">
        <a-select-option value="ALL">ALL</a-select-option>
        <a-select-option v-for="r in rSnippetTag" :key="r.id" :value="r.name">
          {{ r.name }}
        </a-select-option>
      </a-select>
      <a-select v-model:value="typeStr" style="width: 120px" @change="QSearch(typeStr, 1)">
        <a-select-option value="ALL">ALL</a-select-option>
        <a-select-option v-for="r in rSnippetType" :key="r.id" :value="r.name">
          {{ r.name }}
        </a-select-option>
      </a-select>
      <a-select v-model:value="LabelStr" style="width: 120px" @change="QSearch(LabelStr, 4)">
        <a-select-option value="ALL">ALL</a-select-option>
        <a-select-option v-for="r in rSnippetLabel" :key="r.id" :value="r.name">
          {{ r.name }}
        </a-select-option>
      </a-select>
      <a-select
        show-search
        placeholder="标题搜索"
        style="width: 200px"
        :default-active-first-option="false"
        :show-arrow="false"
        :not-found-content="null"
        @search="search"></a-select>
    </a-space>
  </div>
  <a-table
    size="small"
    :bordered="true"
    :columns="columns"
    row-key="id"
    :data-source="rNav"
    :pagination="{ pageSize: 15 }"
    :scroll="{ x: 1280, y: 500 }">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'user'">
        <span>{{ record.user.nickname }}</span>
      </template>
      <template v-if="column.dataIndex === 'tag'">
        <span>{{ record.tag.name }}</span>
      </template>
      <template v-if="column.dataIndex === 'type'">
        <span>{{ record.type.name }}</span>
      </template>
      <template v-if="column.dataIndex === 'label'">
        <span>{{ record.label.name }}</span>
      </template>
      <template v-if="column.dataIndex === 'edit'">
        <a @click="edit(record.id)">修改</a>
      </template>
      <template v-if="column.dataIndex === 'del'">
        <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="del(record)" @cancel="aCancel()">
          <a>删除</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>

  <c-modal-dialog :visible="addVisible" title="添加片段" @close-model="addVisible = false">
    <a-snippet-add></a-snippet-add>
  </c-modal-dialog>

  <c-modal-dialog :visible="edVisible" title="更新片段" @close-model="edVisible = false">
    <a-snippet-edit></a-snippet-edit>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.table {
  @apply mb-2;
}
</style>