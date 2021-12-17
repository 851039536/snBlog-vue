<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, resData } from './data/data'
import { navigation } from '@/api'
import { Routers, RouterId } from '@/hooks/routers'
import { method } from './data/navTable'

const reload: any = inject('reload')
const confirm = async (data: any) => {
  await navigation.DeleteAsync(data.id).then(() => {
    message.success('删除成功')
    reload()
  })
}

onMounted(async () => {
  await method.GetApi()
})
</script>
<template>
  <div>
    <div class="table-operations">
      <a-space>
        <a-button @click="Routers('/Admin-index/NavAdd')">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <a-select style="width: 100px" v-model:value="resData.navStr" @change="method.SelectNav()">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="item.title" v-for="item in resData.navTypeData" :key="item.id">{{
            item.title
          }}</a-select-option>
        </a-select>

        <!-- 搜索  -->
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 150px"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="method.SearchTitle"
        >
        </a-select>
      </a-space>
      <!-- end 搜索 -->
    </div>
    <a-table
      size="small"
      :bordered="true"
      :columns="columns"
      rowKey="id"
      :data-source="resData.resultData"
      :pagination="{ pageSize: 15 }"
      :scroll="{ x: 1500, y: 360 }"
    >
      <template #ed="{ record }">
        <a @click="RouterId('/Admin-index/NavEdit', record.id)">Edit</a>
      </template>
      <template #de="{ record }">
        <a-popconfirm
          title="确认删除?"
          ok-text="是"
          cancel-text="否"
          @confirm="confirm(record)"
          @cancel="method.cancel()"
        >
          <a href="#">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
.table-operations {
  @apply mb-2;
}
</style>
