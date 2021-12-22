<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { labels, article, sort, TOKEN } from '@/api'
import { formState, state } from './data'
import { Routers, go, reloads } from '@/hooks/routers'
import { navName } from '../utils/data'
import { tool } from '@/utils/common/tool'
import { storage } from '@/utils/storage/storage'

const onSubmit = async () => {
  const res: any = reactive({
    id: storage.get('userId')
  })
  formState.userId = res
  formState.img = `blog/${tool.Random(1, 5, 1)}.jpg`
  await article.AddAsync(formState).then(() => {
    message.info('添加成功')
    Routers('/Admin-index/ArticleTable')
  })
}

async function GetApi() {
  state.labelResult = await labels.GetAllAsync(true)
  state.sortResult = await sort.GetAllAsync(true)
}

onMounted(async () => {
  await TOKEN()
  await GetApi()
  navName.name = '文章展示'
  navName.name2 = '新增文章'
})
</script>

<template>
  <div class="form">
    <div class="form_content">
      <a-form :model="formState" :label-col="{ span: 2 }" :wrapper-col="{ span: 21 }">
        <div class="form_content_1">
          <a-form-item label="标题" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.title" />
          </a-form-item>
          <a-form-item label="内容简述">
            <a-textarea v-model:value="formState.sketch" />
          </a-form-item>

          <a-form-item label="标签" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select v-model:value="formState.labelId" placeholder="请选择">
              <a-select-option
                v-for="item in state.labelResult.data"
                :key="item.id"
                :label="item.id"
                :value="item.id"
                >{{ item.name }}</a-select-option
              >
            </a-select>
          </a-form-item>

          <a-form-item label="类别" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select v-model:value="formState.sortId" placeholder="请选择">
              <a-select-option v-for="item in state.sortResult.data" :key="item.id" :label="item.id" :value="item.id">{{
                item.name
              }}</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="内容">
            <v-md-editor v-model="formState.text"></v-md-editor>
          </a-form-item>
        </div>
      </a-form>
    </div>
    <div>
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reloads">刷新</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply w-full h-full;

  .form_content {
    height: 480px;

    @apply bg-white overflow-auto;

    .form_content_1 {
      @apply mt-3;
    }
  }
}
</style>
