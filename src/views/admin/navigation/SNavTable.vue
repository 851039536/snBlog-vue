<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state } from './data/data'
import { navigation } from '@/api'
import { routers, routerId } from '@/hooks/routers'
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
    <div class="tables">
      <a-space>
        <a-button @click="routers('/Admin-index/NavAdd')">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <a-select v-model:value="state.navStr" style="width: 100px" @change="method.SelectNav()">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option v-for="item in state.resNavType" :key="item.id" :value="item.title">
            {{ item.title }}
          </a-select-option>
        </a-select>
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 150px"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="method.SearchTitle"></a-select>
      </a-space>
    </div>
    <a-table
      size="small"
      :bordered="true"
      :columns="columns"
      row-key="id"
      :data-source="state.resData"
      :pagination="{ pageSize: 15 }"
      :scroll="{ x: 1280, y: 500 }">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'user'">
          <p>{{ record.user.nickname }}</p>
        </template>
        <template v-if="column.dataIndex === 'url'">
          <a :href="record.url">链接</a>
        </template>
        <template v-if="column.dataIndex === 'type'">
          <p>{{ record.type.title }}</p>
        </template>
        <template v-if="column.dataIndex === 'edit'">
          <a @click="routerId('/Admin-index/NavEdit', record.id)">Edit</a>
        </template>
        <template v-if="column.dataIndex === 'del'">
          <a-popconfirm
            title="确认删除?"
            ok-text="是"
            cancel-text="否"
            @confirm="confirm(record)"
            @cancel="method.cancel()">
            <a>Delete</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
.tables {
  @apply mb-2;
}
</style>
