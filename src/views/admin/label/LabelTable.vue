<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state } from './data'
import { article, TOKEN, labels } from '@/api'
import { routers, routerId } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'

const reload: any = inject('reload')

const confirm = async (data: any) => {
  await article.Del(data.id).then(() => {
    message.success('删除成功')
    reload()
  })
}
const cancel = () => {
  message.info('已取消')
}

async function GetContains(name: string) {
  if (name === '' && state.labelStr === 'ALL') {
    state.resData = await article.GetFy(3, storage.get('user'), 1, 1000, 'id', true, false)
  } else if (state.labelStr === 'ALL') {
    state.resData = await article.GetContains(0, '0', name, true)
  } else {
    state.resData = await article.GetContains(2, state.labelStr, name, true)
  }
}
async function GetTag() {
  message.info(state.labelStr)
  state.resData =
    state.labelStr === 'ALL'
      ? await article.GetFy(3, storage.get('user'), 1, 1000, 'id', true, false)
      : await article.GetFy(4, `${state.labelStr},${storage.get('user')}`, 1, 1000, 'id', true, false)
}
async function Ordering() {
  if (state.order) {
    state.resData = await article.GetFy(3, storage.get('user'), 1, 1000, 'id', state.order, false)
    state.order = false
  } else {
    state.resData = await article.GetFy(3, storage.get('user'), 1, 1000, 'id', state.order, false)
    state.order = true
  }
}

onMounted(async () => {
  await TOKEN()
  state.resData = await article.GetFy(3, storage.get('user'), 1, 1000, 'id', true, false)
  state.resLabel = await labels.GetAll(false)
  navName.name = '文章'
  navName.name2 = '标签列表'
})
</script>
<template>
  <div>
    <div class="table-operations">
      <a-space>
        <a-button @click="routers('/Admin-index/ArticleAdd')">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <a-select v-model:value="state.labelStr" style="width: 100px" @change="GetTag">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option v-for="res in state.resLabel.data" :key="res.id" :value="res.name">
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
      <!-- end 搜索 -->
      <a-button style="margin-left: 10px" @click="Ordering()">排序</a-button>
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        row-key="id"
        :data-source="state.resData.data"
        :pagination="{ pageSize: 15 }"
        :scroll="{ x: 1280, y: 420 }">
        <template #ed="{ record }">
          <a type="primary" ghost @click="routerId('/Admin-index/ArticleEdit', record.id)">Edit</a>
        </template>
        <template #de="{ record }">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm(record)" @cancel="cancel">
            <a href="#">Delete</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-operations {
  @apply mb-2;
}
</style>
