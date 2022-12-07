<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { articleApi, articleTagApi, articleTypeApi } from '@/api'
import { rTag, rType } from './data'
import { routers, go, reloads } from '@/hooks/routers'
import { navName } from '../utils/data'
import { tool } from '@/utils/common/tool'
import { storage } from '@/utils/storage/storage'
import { articleForm, clearArticle } from '@/api/data/model/artileModel'
import { hUser } from '@/hooks/commonly'
import { rRouter } from '@/router/data'
import { aData } from '../data'

const add = async () => {
  articleForm.userId = storage.get(hUser.ID)
  articleForm.img = `blog/${tool.Random(1, 14, 2)}.jpg`
  await articleApi.Add(articleForm).then(r => {
    if (r.data) {
      message.success(aData.SUCCESS)
      routers(rRouter.articleTable)
    }
  })
}

onMounted(async () => {
  clearArticle()
  axios.all([await articleTypeApi.GetAll(), await articleTagApi.GetAll()]).then(
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
    <div class="p-2">
      <a-button type="primary" @click="add">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reloads">刷新</a-button>
    </div>
    <div class="mt-2 p-2">
      <a-input v-model:value="articleForm.name" prefix="标题:" />
    </div>
    <div class="mt-2 p-2">
      <a-textarea v-model:value="articleForm.sketch" />
    </div>

    <div class="flex m-auto p-2">
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
    <div class="mt-2 p-2">
      <v-md-editor v-model="articleForm.text" height="390px"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
