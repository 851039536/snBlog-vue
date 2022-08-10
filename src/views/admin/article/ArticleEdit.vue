<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { labels, article, sort, TOKEN } from '@/api'
import { formState, state } from './data'
import { routers, go } from '@/hooks/routers'
import { navName } from '../utils/data'

const route = useRoute()
const rid: any = ref(route.query.id)

const onSubmit = async () => {
  await article.UpdateAsync(formState).then(() => {
    message.info('更新完成')
    routers('/Admin-index/ArticleTable')
  })
}

async function GetApi() {
  state.resLabel = await labels.GetAllAsync(true)
  state.resSort = await sort.GetAllAsync(true)

  article.GetByIdAsync(rid.value, false).then((res) => {
    formState.id = res.data[0].id
    formState.commentId = res.data[0].commentId
    formState.give = res.data[0].give
    formState.labelId = res.data[0].labelId
    formState.read = res.data[0].read
    formState.sortId = res.data[0].sortId
    formState.text = res.data[0].text
    formState.title = res.data[0].title
    formState.sketch = res.data[0].sketch
    formState.img = res.data[0].img
    formState.userId = res.data[0].userId
  })
}
onMounted(async () => {
  await GetApi()
  await TOKEN()
  navName.name = '文章展示'
  navName.name2 = '文章编辑'
})
</script>

<template>
  <div class="form">
    <div class="bg-gray-100 shadow p-2">
      <a-button type="primary" @click="onSubmit">更新</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
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
          <a-select-option v-for="item in state.resLabel.data" :key="item.id" :label="item.id" :value="item.id">{{
            item.name
          }}</a-select-option>
        </a-select>
      </div>
      <div class="ml-2">
        类别
        <a-select v-model:value="formState.sortId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="item in state.resSort.data" :key="item.id" :label="item.id" :value="item.id">{{
            item.name
          }}</a-select-option>
        </a-select>
      </div>
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <v-md-editor v-model="formState.text"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
