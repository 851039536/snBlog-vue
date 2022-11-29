<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { labelsApi, articleApi, sort } from '@/api'
import { rLabel, rSort } from './data'
import { routers, go, reloads } from '@/hooks/routers'
import { navName } from '../utils/data'
import { tool } from '@/utils/common/tool'
import { storage } from '@/utils/storage/storage'
import { articleForm, clearArticle } from '@/api/data/model/artileModel'
import { hUser } from '@/hooks/commonly'
import { rRouter } from '@/router/data'
import { aData } from '../data'

const onSubmit = async () => {
  articleForm.userId = storage.get(hUser.ID)
  articleForm.img = `blog/${tool.Random(1, 14, 2)}.jpg`
  await articleApi.Add(articleForm).then(() => {
    message.info(aData.SUCCESS)
    routers(rRouter.articleTable)
  })
}
async function GetApi() {
  clearArticle()
  axios.all([await sort.GetAll(true), await labelsApi.GetAll(true)]).then(
    axios.spread((aSort: any, aLabel: any) => {
      rSort.value = aSort
      rLabel.value = aLabel
    })
  )
}
onMounted(async () => {
  await GetApi()
  navName.name = '文章展示'
  navName.name2 = '新增文章'
})
</script>

<template>
  <div class="form">
    <div class="bg-gray-100 p-2">
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reloads">刷新</a-button>
    </div>
    <div class="rounded bg-gray-50 mt-2 p-2">
      <a-input v-model:value="articleForm.name" prefix="标题:" />
    </div>
    <div class="rounded bg-gray-50 mt-2 p-2">
      <a-textarea v-model:value="articleForm.sketch" />
    </div>

    <div class="rounded flex m-auto bg-gray-50 p-2">
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
    <div class="rounded bg-gray-50 mt-2 p-2">
      <v-md-editor v-model="articleForm.text" height="390px"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
