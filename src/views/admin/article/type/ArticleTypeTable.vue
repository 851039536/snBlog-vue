<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { addVisible, columns, editVisible } from './data'
import { aData, aCancel } from '../../data'
import { navName } from '../../utils/data'
import { articleTypeForm, clearArticleType } from '@/api/data/model/ArticleTypeModel'
import { useApi } from '@/api/useApi'

const { ArticleTypeApi } = useApi()
const reload: any = inject('reload')
const rArticleType = ref()

const del = async (id: number) => {
  await ArticleTypeApi.del(id).then(r => {
    if (r.data) {
      reload()
      message.success(aData.SUCCESS)
    }
  })
}
const edit = async (id: number) => {
  await ArticleTypeApi.getById(id).then(r => {
    articleTypeForm.id = r.data.id
    articleTypeForm.name = r.data.name
    articleTypeForm.description = r.data.description
  })
  editVisible.value = true
}
const add = () => {
  clearArticleType()
  addVisible.value = true
}

onMounted(async () => {
  rArticleType.value = (await ArticleTypeApi.getAll()).data.data
  navName.name = '文章分类'
  navName.name2 = '分类列表'
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

  <c-modal-dialog :visible="editVisible" title="更新分类" @close-model="editVisible = false">
    <a-articleType-edit></a-articleType-edit>
  </c-modal-dialog>
  <c-modal-dialog :visible="addVisible" title="新增分类" @close-model="addVisible = false">
    <a-articleType-add></a-articleType-add>
  </c-modal-dialog>
</template>
