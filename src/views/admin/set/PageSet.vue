<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state, stateArray, stateStr } from './data'
import { articleApi, TOKEN, labels, interfaces } from '@/api'
import { routers, routerId } from '@/hooks/routers'
import { navName } from '../utils/data'

async function QueryFy() {
  await interfaces.GetFy(0, 'null', 1, 10).then((result: any) => {
    state.resData = result.data
  })
}

const reload: any = inject('reload')
const confirm = async (data: any) => {
  await articleApi.Del(data.articleId).then(() => {
    message.success('删除成功')
    reload()
  })
}
const cancel = () => {
  message.info('已取消')
}

/**
 * @description: 搜素框模糊查询
 * @param {*} name
 */
async function SearchTitle(name: string) {
  if (name === '') {
    return
  }
  if (stateStr.labelStr === 'ALL') {
    await articleApi.GetContains(0, 'null', name, false).then(res => {
      state.resData = res.data
    })
  } else {
    await articleApi.GetContains(1, stateStr.labelStr, name, false).then(res => {
      state.resData = res.data
    })
  }
}
function selectTag() {
  message.info(stateStr.labelStr)
}
onMounted(async () => {
  await TOKEN()
  await QueryFy()
  await labels.GetAll(false).then(res => {
    stateArray.labelResult = res.data
  })
  navName.name = '设置'
  navName.name2 = '参数列表'
})
</script>
<template>
  <div>
    <div class="tables">
      <a-space>
        <a-button @click="routers('/Admin-index/ArticleAdd')">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <a-select v-model:value="stateStr.labelStr" style="width: 120px" @change="selectTag">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option v-for="item in stateArray.labelResult" :key="item.labelId" :value="item.labelId">
            {{ item.labelName }}
          </a-select-option>
        </a-select>
        <!-- 搜索  -->
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 200px"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="SearchTitle"></a-select>
      </a-space>
      <!-- end 搜索 -->
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        row-key="id"
        :data-source="state.resData"
        :pagination="{ pageSize: 12 }"
        :scroll="{ x: 1280, y: 500 }">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'type'">
            <p>{{ record.type.name }}</p>
          </template>
          <template v-if="column.dataIndex === 'user'">
            <p>{{ record.user.name }}</p>
          </template>
          <template v-if="column.dataIndex === 'identity'">
            <p>{{ record.identity }}</p>
          </template>
          <template v-if="column.dataIndex === 'edit'">
            <a @click="routerId('/Admin-index/ArticleEdit', record.articleId)">编辑</a>
          </template>
          <template v-if="column.dataIndex === 'del'">
            <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm(record)" @cancel="cancel">
              <a>删除</a>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tables {
  @apply mb-2;
}
</style>
