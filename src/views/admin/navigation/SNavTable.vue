<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns } from './data/data'
import { navigationApi, TOKEN } from '@/api'
import { routers, routerId, winUrl } from '@h/routers'
import { aData, aCancel } from '../data'
import { rRouter } from '@/router/data'
import { navName } from '../utils/data'
import { tool } from '@/utils/common/tool'

const reload: any = inject('reload')
const confirm = async (data: any) => {
  await navigationApi.DeleteAsync(data.id).then(() => {
    message.success(aData.SUCCESS)
    reload()
  })
}

const rNav: any = ref([])
const rnavType: any = ref([])
const navStr = ref('ALL')
async function GetFy() {
  if (navStr.value === aData.ALL) {
    await navigationApi.GetFyAsync(0, navStr.value, 1, 1000, 'id', true, false).then(async res => {
      await tool.MomentTimeList(res)
      rNav.value = res.data
    })
    return
  }
  await navigationApi.GetFyAsync(1, navStr.value, 1, 1000, 'id', true, false).then(async res => {
    await tool.MomentTimeList(res)
    rNav.value = res.data
  })
}

async function SelectNav() {
  if (navStr.value === aData.ALL) {
    await navigationApi.GetFyAsync(0, navStr.value, 1, 1000, 'id', true, false).then(async res => {
      await tool.MomentTimeList(res)
      rNav.value = res.data
    })
    return
  }
  await navigationApi.GetFyAsync(1, navStr.value, 1, 1000, 'id', true, false).then(async res => {
    await tool.MomentTimeList(res)
    rNav.value = res.data
  })
}

async function Search(name: any) {
  if (name === '') {
    return
  }
  if (navStr.value === aData.ALL) {
    await navigationApi.GetContains(0, aData.NULL, name, false).then(async res => {
      await tool.MomentTimeList(res)
      rNav.value = res.data
    })
    return
  }
  await navigationApi.GetContains(1, navStr.value, name, false).then(async res => {
    await tool.MomentTimeList(res)
    rNav.value = res.data
  })
}

async function GetApi() {
  await TOKEN()
  await GetFy()
  rnavType.value = await (await navigationApi.GetNavTypeAll(false)).data
  navName.name = '内容分享'
  navName.name2 = '导航列表'
}

onMounted(async () => {
  await GetApi()
})
</script>
<template>
  <div class="tables">
    <a-space>
      <a-button @click="routers(rRouter.navAdd)">添加</a-button>
      <a-button @click="reload()">刷新</a-button>
      <a-select v-model:value="navStr" style="width: 120px" @change="SelectNav()">
        <a-select-option value="ALL">ALL</a-select-option>
        <a-select-option v-for="item in rnavType" :key="item.id" :value="item.title">
          {{ item.title }}
        </a-select-option>
      </a-select>
      <a-select
        show-search
        placeholder="标题搜索"
        style="width: 200px"
        :default-active-first-option="false"
        :show-arrow="false"
        :not-found-content="null"
        @search="Search"></a-select>
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
        <p>{{ record.user.nickname }}</p>
      </template>
      <template v-if="column.dataIndex === 'url'">
        <a @click="winUrl(record.url)">前往</a>
      </template>
      <template v-if="column.dataIndex === 'type'">
        <p>{{ record.type.title }}</p>
      </template>
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

<style lang="scss" scoped>
.tables {
  @apply mb-2;
}
</style>
