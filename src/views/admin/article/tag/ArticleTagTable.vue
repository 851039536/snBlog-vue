<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { addVisible, columns, editVisible } from './data'
import { ArticleTagApi } from '@/api'
import { aData, aCancel } from '../../data'
import { navName } from '../../utils/data'
import { articleTagForm, clearArticleTag } from '@/api/data/model/ArticleTagModel'

const reload: any = inject('reload')
const rArticleType = ref()

const del = async (id: number) => {
  await ArticleTagApi.del(id).then(r => {
    if (r.data) {
      reload()
      message.success(aData.SUCCESS)
    }
  })
}
const edit = async (id: number) => {
  await ArticleTagApi.getById(id).then(r => {
    articleTagForm.id = r.data.data.id
    articleTagForm.name = r.data.data.name
    articleTagForm.description = r.data.data.description
  })
  editVisible.value = true
}
const add = () => {
  clearArticleTag()
  addVisible.value = true
}

onMounted(async () => {
  rArticleType.value = (await ArticleTagApi.getPaging(1, 100)).data.data
  navName.name = '文章标签'
  navName.name2 = '标签列表'
})
</script>
<template>
  <div>
    <div class="mb-2">
      <a-space>
        <a-button @click="add()">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
      </a-space>
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        row-key="id"
        :data-source="rArticleType"
        :pagination="{ pageSize: 15 }"
        :scroll="{ x: 1280, y: 520 }">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'edit'">
            <a type="primary" ghost @click="edit(record.id)">编辑</a>
          </template>
          <template v-if="column.dataIndex === 'del'">
            <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="del(record.id)" @cancel="aCancel">
              <a>删除</a>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </div>
  </div>

  <c-modal-dialog :visible="editVisible" title="更新标签" @close-model="editVisible = false">
    <a-articleTag-edit></a-articleTag-edit>
  </c-modal-dialog>
  <c-modal-dialog :visible="addVisible" title="新增标签" @close-model="addVisible = false">
    <a-articleTag-add></a-articleTag-add>
  </c-modal-dialog>
</template>
