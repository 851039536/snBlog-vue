<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { MdEditor } from 'md-editor-v3'
import { ArticleApi, ArticleTypeApi, ArticleTagApi } from '@/api'
import { rTag, rType } from './data'
import { routers, go } from '@/utils/route'
import { navName } from '../utils/data'
import { aData } from '../data'
import { rRouter } from '@/router/route-Info'
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
  await axios.all([ArticleTagApi.getPaging(1, 100), ArticleTypeApi.getAll(), ArticleApi.getById(rid.value)]).then(
    axios.spread((tag: any, type: any, article) => {
      rTag.value = tag.data
      rType.value = type.data
      articleForm.id = article.data.data.id
      articleForm.commentId = article.data.data.commentId
      articleForm.give = article.data.data.give
      articleForm.tagId = article.data.data.tagId
      articleForm.read = article.data.data.read
      articleForm.typeId = article.data.data.typeId
      articleForm.text = article.data.data.text
      articleForm.name = article.data.data.name
      articleForm.sketch = article.data.data.sketch
      articleForm.img = article.data.data.img
      articleForm.userId = article.data.data.userId
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
      <MdEditor v-model="articleForm.text" />
    </div>
  </div>
</template>
