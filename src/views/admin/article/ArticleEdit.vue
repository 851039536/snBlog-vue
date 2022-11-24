<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { labelsApi, articleApi, sort } from '@/api'
import { rLabel, rSort } from './data'
import { routers, go } from '@/hooks/routers'
import { navName } from '../utils/data'
import { aData } from '../data'
import { rRouter } from '@/router/data'
import { articleForm } from '@/api/data/model/artileModel'

const route = useRoute()
const rid: any = ref(route.query.id)

const onSubmit = async () => {
  await articleApi.Update(articleForm).then(() => {
    message.info(aData.SUCCESS)
    routers(rRouter.articleTable)
  })
}

async function GetApi() {
  rLabel.value = await labelsApi.GetAll(true)
  rSort.value = await sort.GetAll(true)
  await articleApi.GetById(rid.value, false).then((res: any) => {
    articleForm.id = res.data[0].id
    articleForm.commentId = res.data[0].commentId
    articleForm.give = res.data[0].give
    articleForm.labelId = res.data[0].labelId
    articleForm.read = res.data[0].read
    articleForm.sortId = res.data[0].sortId
    articleForm.text = res.data[0].text
    articleForm.title = res.data[0].title
    articleForm.sketch = res.data[0].sketch
    articleForm.img = res.data[0].img
    articleForm.userId = res.data[0].userId
  })
}
onMounted(async () => {
  await GetApi()
  navName.name = '文章展示'
  navName.name2 = '文章编辑'
})
</script>

<template>
  <div class="h-full w-full">
    <div class="bg-gray-100 shadow p-2">
      <a-button type="primary" @click="onSubmit">更新</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-input v-model:value="articleForm.title" prefix="标题:" />
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-textarea v-model:value="articleForm.sketch" />
    </div>
    <div class="rounded flex m-auto bg-gray-50 shadow p-2">
      <div class="ml-2">
        标签
        <a-select v-model:value="articleForm.labelId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="item in rLabel.data" :key="item.id" :label="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </div>
      <div class="ml-2">
        类别
        <a-select v-model:value="articleForm.sortId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="item in rSort.data" :key="item.id" :label="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <v-md-editor
        v-model="articleForm.text"
        left-toolbar="undo redo | emoji | clear | h | code"
        height="390px"></v-md-editor>
    </div>
  </div>
</template>
