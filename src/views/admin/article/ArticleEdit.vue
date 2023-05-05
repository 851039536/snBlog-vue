<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { ArticleApi, ArticleTypeApi, ArticleTagApi } from '@/api'
import { rTag, rType } from './data'
import { routers, go } from '@/utils/route'
import { navName } from '../utils/data'
import { aData } from '../data'
import { rRouter } from '@/router/RouterInfo'
import { articleForm } from '@/api/data/model/ArtileModel'

const route = useRoute()
const rid: any = ref(route.query.id)

const update = async () => {
  await ArticleApi.update(articleForm).then(r => {
    if (r.data) {
      message.success(aData.SUCCESS)
      routers(rRouter.articleTable)
    }
  })
}

onMounted(async () => {
  navName.name = '文章展示'
  navName.name2 = '文章编辑'
  await axios.all([ArticleTagApi.getAll(), ArticleTypeApi.getAll(), ArticleApi.getById(rid.value)]).then(
    axios.spread((tag: any, type: any, article) => {
      rTag.value = tag
      rType.value = type
      articleForm.id = article.data.id
      articleForm.commentId = article.data.commentId
      articleForm.give = article.data.give
      articleForm.tagId = article.data.tagId
      articleForm.read = article.data.read
      articleForm.typeId = article.data.typeId
      articleForm.text = article.data.text
      articleForm.name = article.data.name
      articleForm.sketch = article.data.sketch
      articleForm.img = article.data.img
      articleForm.userId = article.data.userId
    })
  )
})
</script>

<template>
  <div class="h-full w-full">
    <div class="px-2">
      <a-button type="primary" @click="update">更新</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
    </div>
    <div class="mt-2 px-2">
      <a-input v-model:value="articleForm.name" prefix="标题:" />
    </div>
    <div class="mt-2 px-2">
      <a-textarea v-model:value="articleForm.sketch" />
    </div>
    <div class="m-auto flex p-2">
      <div class="ml-2">
        标签
        <a-select v-model:value="articleForm.tagId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="r in rTag.data" :key="r.id" :label="r.id" :value="r.id">
            {{ r.name }}
          </a-select-option>
        </a-select>
      </div>
      <div class="ml-2">
        类别
        <a-select v-model:value="articleForm.typeId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="r in rType.data" :key="r.id" :label="r.id" :value="r.id">
            {{ r.name }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="mt-1 px-2">
      <v-md-editor
        v-model="articleForm.text"
        left-toolbar="undo redo | emoji | clear | h | code"
        height="440px"></v-md-editor>
    </div>
  </div>
</template>
