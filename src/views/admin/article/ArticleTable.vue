<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, rLabel } from './data'
import { articleApi, TOKEN, labelsApi } from '@/api'
import { routers, routerId } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'
import { aData, aCancel } from '../data'
import { rRouter } from '@/router/data'
import { hUser } from '@/hooks/commonly'

const reload: any = inject('reload')
const rArticle = ref()
const userName = ref('')
const labelStr = ref('')
const order = ref(false)
const del = async (data: any) => {
  await articleApi.Del(data.id).then(() => {
    message.success(aData.SUCCESS)
    reload()
  })
}
async function GetContains(name: string) {
  if (name === '' && labelStr.value === 'ALL')
    return (rArticle.value = await (await articleApi.GetFy(3, userName.value, 1, 1000, 'id', true, false)).data)
  if (labelStr.value === 'ALL') return (rArticle.value = await (await articleApi.GetContains(0, '0', name, true)).data)
  rArticle.value = await (await articleApi.GetContains(2, labelStr.value, name, true)).data
}
async function SelectTag() {
  rArticle.value =
    labelStr.value === 'ALL'
      ? await (
          await articleApi.GetFy(3, userName.value, 1, 1000, 'id', true, false)
        ).data
      : await (
          await articleApi.GetFy(4, `${labelStr.value},${userName.value}`, 1, 1000, 'id', true, false)
        ).data
}
async function Ordering() {
  if (order.value) {
    rArticle.value = await (await articleApi.GetFy(3, userName.value, 1, 1000, 'id', order.value, false)).data
    order.value = false
    return
  }
  rArticle.value = await (await articleApi.GetFy(3, userName.value, 1, 1000, 'id', order.value, false)).data
  order.value = true
}

onMounted(async () => {
  await TOKEN()
  userName.value = storage.get(hUser.NAME)
  rArticle.value = await (await articleApi.GetFy(3, userName.value, 1, 1000, 'id', true, false)).data
  rLabel.value = await (await labelsApi.GetAll(false)).data
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
        <a-select v-model:value="labelStr" style="width: 140px" @change="SelectTag">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option v-for="res in rLabel" :key="res.id" :value="res.name">
            {{ res.name }}
          </a-select-option>
        </a-select>
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 150px"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="GetContains"></a-select>
      </a-space>
      <a-button style="margin-left: 10px" @click="Ordering()">排序</a-button>
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
            <p>{{ record.user.nickname }}</p>
          </template>
          <template v-if="column.dataIndex === 'sort'">
            <p>{{ record.sort.name }}</p>
          </template>
          <template v-if="column.dataIndex === 'label'">
            <p>{{ record.label.name }}</p>
          </template>
          <template v-if="column.dataIndex === 'edit'">
            <a type="primary" ghost @click="routerId(rRouter.articleEdit, record.id)">编辑</a>
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
