<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { ArticleApi, ArticleTagApi, ArticleTypeApi } from '@/api'
import { rTag, rType } from './data'
import { routers, go } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'
import { articleForm, clearArticle } from '@/api/data/model/ArtileModel'
import { hUser } from '@/hooks/Commonly'
import { rRouter } from '@/router/data'
import { aData } from '../data'
import useRandom from '@/hooks/useRandom'
const { random } = useRandom()
const reload: any = inject('reload')
const tagName = ref('选择')
const add = async () => {
  articleForm.userId = storage.get(hUser.ID)
  articleForm.img = `blog/${random(1, 20, 2)}.jpg`
  await ArticleApi.add(articleForm).then(r => {
    if (r.data) {
      message.success(aData.SUCCESS)
      routers(rRouter.articleTable)
    }
  })
}
const test = (data: any) => {
  console.log('%c [ data ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', data)
  //
}

onMounted(async () => {
  clearArticle()
  axios.all([await ArticleTypeApi.getAll(), await ArticleTagApi.getAll()]).then(
    axios.spread((sort: any, label: any) => {
      rType.value = sort
      rTag.value = label
    })
  )
  navName.name = '文章展示'
  navName.name2 = '新增文章'
})
</script>

<template>
  <div class="form">
    <div class="px-2">
      <a-button type="primary" @click="add">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reload">刷新</a-button>
    </div>
    <div class="mt-2 px-2">
      <a-input v-model:value="articleForm.name" prefix="标题:" />
    </div>
    <div class="mt-1 p-2">
      <a-textarea v-model:value="articleForm.sketch" />
    </div>

    <div class="flex m-auto px-2 mb-2">
      <div class="ml-2">
        标签
        <a-select v-model:value="articleForm.tagId" style="width: 120px" placeholder="请选择">
          <a-select-option v-for="r in rTag.data" :key="r.id" :label="r.id" :value="r.id">
            {{ r.name }}
          </a-select-option>
        </a-select>
        <a-select v-model:value="tagName" show-search placeholder="Select a person" style="width: 120px" @change="test">
          <a-select-option v-for="r in rTag.data" :key="r.id" :label="r.name" :value="r.name">
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
    <div class="px-2">
      <v-md-editor v-model="articleForm.text" height="440px"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
