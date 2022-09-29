<script lang="ts" setup>
import { formState, resType } from './data/data'
import { go, reloads } from '@/hooks/routers'
import { GetApi, onSubmit } from './data/navAdd'
import { TOKEN } from '@/api'

onMounted(async () => {
  await TOKEN()
  await GetApi()
})
</script>

<template>
  <div class="form">
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-input v-model:value="formState.title" prefix="标题:" />
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-input v-model:value="formState.describe" prefix="描述:" />
    </div>

    <div class="rounded flex m-auto bg-gray-50 shadow p-2">
      <div>
        <a-select v-model:value="formState.typeId" style="width: 120px">
          <a-select-option v-for="item in resType" :key="item.id" :label="item.id" :value="item.id">
            {{ item.title }}
          </a-select-option>
        </a-select>
      </div>
      <div class="ml-2">
        <a-input v-model:value="formState.img" prefix="图片链接:" />
      </div>
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-input v-model:value="formState.url" prefix="地址:" />
    </div>
    <div class="bg-gray-100 shadow p-2">
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reloads">刷新</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
