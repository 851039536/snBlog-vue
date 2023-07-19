<script lang="ts" setup>
import { MdEditor } from 'md-editor-v3'
import { message } from 'ant-design-vue'
import { ArticleApi, ArticleTagApi, ArticleTypeApi } from '@/api'
import { rTag, rType } from './data'
import { routers, go } from '@/utils/route'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'
import { articleForm, clearArticle } from '@/api/data/model/ArtileModel'
import { userInfo } from '@/utils/user/user-info'
import { rRouter } from '@/router/route-Info'
import { aData } from '../data'
import useRandom from '@/hooks/useRandom'
const { random } = useRandom()
const reload: any = inject('reload')
const add = async () => {
  articleForm.userId = storage.get(userInfo.ID)
  articleForm.img = `${random(1, 20, 2)}.jpg`
  await ArticleApi.add(articleForm).then(r => {
    if (r.data.statusCode === 200) {
      message.success(aData.SUCCESS)
      routers(rRouter.articleTable)
    } else {
      message.warning(aData.FAIL)
    }
  })
}

onMounted(async () => {
  clearArticle()
  axios.all([await ArticleTypeApi.getAll(), await ArticleTagApi.getPaging(1, 900)]).then(
    axios.spread((sort: any, label: any) => {
      rType.value = sort.data
      rTag.value = label.data
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

    <div class="m-auto mb-2 flex px-2">
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
    <div class="px-2">
      <MdEditor v-model="articleForm.text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
