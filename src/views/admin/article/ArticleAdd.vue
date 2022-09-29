<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { labels, article, sort, TOKEN } from '@/api'
import { formState, state } from './data'
import { routers, go, reloads } from '@/hooks/routers'
import { navName } from '../utils/data'
import { tool } from '@/utils/common/tool'
import { userId } from '@/hooks/commonly'

const onSubmit = async () => {
  formState.userId = userId.value
  console.log('%c [ userId ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', userId)
  formState.img = `blog/${tool.Random(1, 5, 1)}.jpg`
  await article.AddAsync(formState).then(() => {
    message.info('添加成功')
    routers('/Admin-index/ArticleTable')
  })
}
const initialize = () => {
  formState.labelId = 1
  formState.sortId = 1
  formState.userId = 0
  formState.id = 0
  formState.title = ''
  formState.sketch = ''
  formState.text = ''
  formState.read = 0
  formState.img = 'img'
  formState.commentId = 0
  formState.give = 0
  formState.timeCreate = '2021-11-13T03:18:19.821Z'
  formState.timeModified = '2021-11-13T03:18:19.821Z'
}
async function GetApi() {
  initialize()
  await TOKEN()
  state.resLabel = await labels.GetAll(true)
  state.resSort = await sort.GetAll(true)
}
onMounted(async () => {
  await GetApi()
  navName.name = '文章展示'
  navName.name2 = '新增文章'
})
</script>

<template>
  <div class="form">
    <div class="bg-gray-100 shadow p-2">
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reloads">刷新</a-button>
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-input v-model:value="formState.title" prefix="标题:" />
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-textarea v-model:value="formState.sketch" prefix="描述" />
    </div>

    <div class="rounded flex m-auto bg-gray-50 shadow p-2">
      <div class="ml-2">
        标签
        <a-select v-model:value="formState.labelId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="item in state.resLabel.data" :key="item.id" :label="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </div>
      <div class="ml-2">
        类别
        <a-select v-model:value="formState.sortId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="item in state.resSort.data" :key="item.id" :label="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <v-md-editor v-model="formState.text" height="390px"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
