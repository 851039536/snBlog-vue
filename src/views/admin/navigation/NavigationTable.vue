<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns } from './data'
import { NavigationApi } from '@/api'
import { aData, aCancel } from '../data'
import { rRouter } from '@/router/routerInfo'
import { navName } from '../utils/data'
import { Tool } from '@/utils/common/common-tool'
import { useRouter } from '@hooks/useRouter'
const { routers, routerById, winUrl } = useRouter()

const reload: any = inject('reload')
const del = async (data: any) => {
  await NavigationApi.del(data.id).then(() => {
    message.success(aData.SUCCESS)
    reload()
  })
}

const rNav: any = ref([])
const rnavType: any = ref([])
const navStr = ref('ALL')

const QPaging = async (identity = 0, name = '') => {
  await NavigationApi.getPaging(identity, name, 1, 1000, 'id', true, false).then(async res => {
    await Tool.momentTimeList(res)
    rNav.value = res.data
  })
}

async function SNav() {
  if (navStr.value === aData.ALL) {
    await QPaging()
    return
  }
  await QPaging(1, navStr.value)
}

async function search(name: any) {
  if (name === '') {
    return
  }
  if (navStr.value === aData.ALL) {
    await NavigationApi.getContains(0, aData.NULL, name).then(async res => {
      await Tool.momentTimeList(res)
      rNav.value = res.data
    })
    return
  }
  await NavigationApi.getContains(1, navStr.value, name).then(async res => {
    await Tool.momentTimeList(res)
    rNav.value = res.data
  })
}

onMounted(async () => {
  await QPaging()
  rnavType.value = await (await NavigationApi.getNavTypeAll()).data
  navName.name = '内容分享'
  navName.name2 = '导航列表'
})
</script>
<template>
  <div class="table">
    <a-space>
      <a-button @click="routers(rRouter.navAdd)">添加</a-button>
      <a-button @click="reload()">刷新</a-button>
      <a-select v-model:value="navStr" style="width: 120px" @change="SNav()">
        <a-select-option value="ALL">ALL</a-select-option>
        <a-select-option v-for="r in rnavType" :key="r.id" :value="r.title">
          {{ r.title }}
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
      <template v-if="column.dataIndex === 'url'">
        <a @click="winUrl(record.url)">前往</a>
      </template>
      <template v-if="column.dataIndex === 'type'">
        <span>{{ record.type.title }}</span>
      </template>
      <template v-if="column.dataIndex === 'edit'">
        <a @click="routerById('/Admin-index/NavEdit', record.id)">修改</a>
      </template>
      <template v-if="column.dataIndex === 'del'">
        <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="del(record)" @cancel="aCancel()">
          <a>删除</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>

<style lang="scss" scoped>
.table {
  @apply mb-2;
}
</style>
@/router/routerInfo
