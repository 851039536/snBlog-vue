<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, snippetTypeSub, snippetTag, snippetType, tagName, addVisible, edVisible } from './data'
import { aData, aCancel } from '../data'
import { navName } from '../utils/data'
import { snippet, removeSnippet } from '@api/model/Snippet'
import { snippetVersion } from '@api/model/SnippetVersion'
import { useApi } from '@/api/useApi'
const { SnippetAPI, SnippetTagAPI, SnippetTypeAPI, SnippetTypeSubAPI } = useApi()

const reload: any = inject('reload')
const del = async (data: any) => {
  const res = await SnippetAPI.del(data.id)
  if (res.data) {
    reload()
    message.success(aData.SUCCESS)
    return
  }
  message.success(aData.FAIL)
}

const snippetData: any = ref([])
const tagStr = ref<string>('ALL')

const update = async (id: number) => {
  const r = await (await SnippetAPI.getById(id, false)).data
  snippet.id = r.data.id
  snippet.name = r.data.name
  snippet.text = r.data.text
  snippet.tagId = r.data.tag.id
  snippet.typeId = r.data.type.id
  snippet.userId = r.data.user.id
  snippet.typeSubId = r.data.typeSub.id
  const name = await SnippetTagAPI.getById(snippet.tagId)
  tagName.value = name.data.data.name

  //2.更新之前存入旧版内容
  snippetVersion.name = snippet.name
  snippetVersion.text = snippet.text
  snippetVersion.snippetId = snippet.id
  edVisible.value = true
}

const add = () => {
  removeSnippet()
  addVisible.value = true
}

/**
 * @description: 分页查询
 * @param {number} identity 所有:0|分类:1|标签:2|用户:3|子标签:4
 * @param {number} name 查询参数(多条件以','分割)
 */
const QPaging = async (identity: number, name: string) => {
  const ret = await SnippetAPI.getPaging(identity, name, 1, 9000, 'id', true, false)
  snippetData.value = ret.data.data
}
const QSearch = async (name: string, identity: number) => {
  if (name === aData.ALL) {
    await QPaging(0, aData.NULL)
    return
  }
  await QPaging(identity, name)
}
async function search(name: any) {
  if (name === '') {
    // await QPaging(0, aData.NULL)
    return
  }
  const ret = await SnippetAPI.contains(5, aData.NULL, name, false, 1, 20)
  snippetData.value = ret.data.data
}

onMounted(async () => {
  await QPaging(0, tagStr.value)
  const [tag, type, typeSubs] = await axios.all([
    await SnippetTagAPI.getAll(false),
    await SnippetTypeAPI.getAll(false),
    await SnippetTypeSubAPI.getAll(false)
  ])
  snippetTag.value = tag.data.data
  snippetType.value = type.data.data
  snippetTypeSub.value = typeSubs.data.data
  navName.name = '代码片段'
  navName.name2 = '片段列表'
})
</script>

<template>
  <div class="table">
    <a-space>
      <a-button @click="add">添加</a-button>
      <a-button @click="reload()">刷新</a-button>

      <a-select
        show-search
        placeholder="标题搜索"
        style="width: 200px"
        :default-active-first-option="false"
        :show-arrow="false"
        :not-found-content="null"
        @search="search"></a-select>
    </a-space>

    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-4px font-semibold">分类:</div>
      <div v-for="ret in snippetType" :key="ret.id" class="cursor-pointer p-1 pl-1 hover:text-blue-500">
        <span @click="QSearch(ret.name, 1)">{{ ret.name }}</span>
      </div>
    </div>

    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">子分类:</div>
      <div v-for="ret in snippetTypeSub" :key="ret.id" class="cursor-pointer p-1 pl-2px hover:text-blue-500">
        <span @click="QSearch(ret.name, 4)">{{ ret.name }}</span>
      </div>
    </div>
  </div>

  <a-table
    size="small"
    :bordered="true"
    :columns="columns"
    row-key="id"
    :data-source="snippetData"
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
      <template v-if="column.dataIndex === 'typeSub'">
        <span>{{ record.typeSub.name }}</span>
      </template>
      <template v-if="column.dataIndex === 'edit'">
        <a @click="update(record.id)">修改</a>
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
