<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, rTag } from './data'
import { navName } from '../utils/data'
import { aData, aCancel } from '../data'
import { rRouter } from '@/router/routerInfo'
import { useRouter } from '@hooks/useRouter'
import { useUserInfo } from '@hooks/useUserInfo'
import { useApi } from '@/api/useApi'

const { ArticleApi, ArticleTagApi } = useApi()
const { getUserName } = useUserInfo()
const { routerById, routers } = useRouter()

const reload: any = inject('reload')
const rArticle = ref()
const userName = ref('')
const tagSrt = ref('ALL')
const order = ref(false)
const del = async (data: any) => {
  await ArticleApi.delete(data.id).then(r => {
    if (r.data) {
      reload()
      message.success(aData.SUCCESS)
    }
  })
}
const QPaging = async (identity: number, name: string, order = true) => {
  rArticle.value = await (await ArticleApi.getPaging(identity, name, 1, 9000, 'id', order, false)).data.data
}
async function QContains(name: string) {
  if (name === '' && tagSrt.value === 'ALL') return QPaging(3, userName.value)
  if (tagSrt.value === 'ALL') {
    rArticle.value = await (await ArticleApi.getContains(0, '0', name)).data.data
    return
  }
  rArticle.value = await (await ArticleApi.getContains(2, tagSrt.value, name)).data.data
}
async function STag() {
  if (tagSrt.value === 'ALL') {
    await QPaging(3, userName.value)
    return
  }

  await QPaging(4, `${tagSrt.value},${userName.value}`)
}
async function ordering() {
  if (order.value) {
    await QPaging(3, userName.value, order.value)
    order.value = false
    return
  }
  await QPaging(3, userName.value, order.value)
  order.value = true
}

onMounted(async () => {
  userName.value = getUserName()
  await axios.all([await ArticleTagApi.getPaging(1, 100), await QPaging(3, userName.value)]).then(
    axios.spread((tag: any) => {
      rTag.value = tag.data.data
    })
  )
  navName.name = '文章展示'
  navName.name2 = '文章列表'
})
</script>
<template>
  <div>
    <div class="mb-2">
      <a-space>
        <a-button @click="routers(rRouter.articleAdd)">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <a-select v-model:value="tagSrt" style="width: 140px" @change="STag">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option v-for="r in rTag" :key="r.id" :value="r.name">
            {{ r.name }}
          </a-select-option>
        </a-select>
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 150px"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="QContains"></a-select>
      </a-space>
      <a-button style="margin-left: 10px" @click="ordering()">排序</a-button>
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        row-key="id"
        :data-source="rArticle"
        :pagination="{ pageSize: 15 }"
        :scroll="{ x: 1280, y: 520 }">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'user'">
            <span>{{ record.user.nickname }}</span>
          </template>
          <template v-if="column.dataIndex === 'type'">
            <span>{{ record.type.name }}</span>
          </template>
          <template v-if="column.dataIndex === 'tag'">
            <span>{{ record.tag.name }}</span>
          </template>
          <template v-if="column.dataIndex === 'edit'">
            <a type="primary" ghost @click="routerById(rRouter.articleEdit, record.id)">编辑</a>
          </template>
          <template v-if="column.dataIndex === 'del'">
            <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="del(record)" @cancel="aCancel">
              <a>删除</a>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
