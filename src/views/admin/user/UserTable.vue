<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns } from './data'
import { navigationApi, TOKEN, userApi } from '@/api'
import { routers, routerId } from '@h/routers'
import { aData, aCancel } from '../data'
import { rRouter } from '@/router/data'
import { navName } from '../utils/data'

const reload: any = inject('reload')
const confirm = async (data: any) => {
  await navigationApi.DeleteAsync(data.id).then(() => {
    message.success(aData.SUCCESS)
    reload()
  })
}
const rUser: any = ref([])

async function search(name: string) {
  if (name === '') return
  await userApi.Contains(name).then(res => {
    rUser.value = res.data
  })
}

onMounted(async () => {
  await TOKEN()
  navName.name = '内容分享'
  navName.name2 = '导航列表'
  await userApi.GetPaging(1, 1000).then(res => {
    rUser.value = res.data.result
  })
})
</script>
<template>
  <div mb-2>
    <a-space>
      <a-button @click="routers(rRouter.navAdd)">添加</a-button>
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
  </div>
  <a-table
    size="small"
    :bordered="true"
    :columns="columns"
    row-key="id"
    :data-source="rUser"
    :pagination="{ pageSize: 15 }"
    :scroll="{ x: 1280, y: 500 }">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'edit'">
        <a @click="routerId('/Admin-index/NavEdit', record.id)">修改</a>
      </template>
      <template v-if="column.dataIndex === 'del'">
        <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm(record)" @cancel="aCancel()">
          <a>删除</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>
