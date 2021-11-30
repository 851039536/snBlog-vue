<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { navigation, TOKEN } from '@/api'
import { formState, stateArray } from './data'
import { Routers, go, reloads } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'

const res: any = reactive({
  id: storage.get('userId')
})

const onSubmit = async () => {
  formState.userId = res.id
  await navigation.AddAsync(formState).then(() => {
    message.info('添加成功')
    Routers('/Admin-index/NavTable')
  })
}
async function GetAll() {
  await navigation.GetSnNavigationTypeSAllAsync(false).then((ress) => {
    stateArray.navResult = ress.data
  })
}

onMounted(async () => {
  await GetAll()
  await TOKEN()
  navName.name = '内容分享'
  navName.name2 = '新增内容'
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
            <a-input v-model:value="formState.describe" />
          </a-form-item>

          <a-form-item label="图片链接" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.img" />
          </a-form-item>

          <a-form-item label="类别" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select v-model:value="formState.typeId" placeholder="please select your zone">
              <a-select-option v-for="item in stateArray.navResult" :key="item.id" :label="item.id" :value="item.id">{{
                item.title
              }}</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="前往地址" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.url" />
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
