<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { MdEditor } from 'md-editor-v3'
import { rTag, rType } from './data'
import { navName } from '../utils/data'
import { aData } from '../data'
import { rRouter } from '@/router/routerInfo'
import { article } from '@api/model/Article'
import { useRouter } from '@hooks/useRouter'
import { useApi } from '@/api/useApi'

const { ArticleTagApi, ArticleTypeApi, ArticleApi } = useApi()
const { routers, go } = useRouter()
const route = useRoute()
const rid: any = ref(route.query.id)

const update = async () => {
  await ArticleApi.update(article).then(ret => {
    if (ret.data) {
      message.success(aData.SUCCESS)
      routers(rRouter.articleTable)
    }
  })
}

onMounted(async () => {
  navName.name = '文章展示'
  navName.name2 = '文章编辑'
  await axios.all([ArticleTagApi.getPaging(1, 100), ArticleTypeApi.getAll(), ArticleApi.getById(rid.value)]).then(
    axios.spread((tag: any, type: any, articles) => {
      rTag.value = tag.data
      rType.value = type.data
      article.id = articles.data.data.id
      article.commentId = articles.data.data.commentId
      article.give = articles.data.data.give
      article.tagId = articles.data.data.tagId
      article.read = articles.data.data.read
      article.typeId = articles.data.data.typeId
      article.text = articles.data.data.text
      article.name = articles.data.data.name
      article.sketch = articles.data.data.sketch
      article.img = articles.data.data.img
      article.userId = articles.data.data.userId
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
      <a-input v-model:value="article.name" prefix="标题:" />
    </div>
    <div class="mt-2 px-2">
      <a-textarea v-model:value="article.sketch" />
    </div>
    <div class="m-auto flex p-2">
      <div class="ml-2">
        标签
        <a-select v-model:value="article.tagId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="r in rTag.data" :key="r.id" :label="r.id" :value="r.id">
            {{ r.name }}
          </a-select-option>
        </a-select>
      </div>
      <div class="ml-2">
        类别
        <a-select v-model:value="article.typeId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="r in rType.data" :key="r.id" :label="r.id" :value="r.id">
            {{ r.name }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="mt-1 px-2">
      <MdEditor v-model="article.text" />
    </div>
  </div>
</template>
