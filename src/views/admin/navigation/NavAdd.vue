<script lang="ts" setup>
import { formState, resType } from './data/data'
import { go, reloads } from '@/hooks/routers'
import { GetApi, onSubmit } from './data/navAdd'
import { TOKEN } from '@/api'
function GetTypeId(id: number) {
  formState.typeId = id
}
onMounted(async () => {
  await TOKEN()
  await GetApi()
})
</script>

<template>
  <div class="navform m-auto">
    <div class="form-div">
      <a-input v-model:value="formState.title" prefix="标题:" />
    </div>
    <div class="form-div">
      <div>描述:</div>
      <a-textarea v-model:value="formState.describe" show-count :maxlength="100" />
    </div>

    <div class="flex p-2">
      <div>
        <a-select v-model:value="formState.typeId" style="width: 120px">
          <a-select-option v-for="item in resType" :key="item.id" :label="item.id" :value="item.id">
            {{ item.title }}
          </a-select-option>
        </a-select>
      </div>

      <div class="bg-yellow-50 w-600px flex flex-wrap ml-2 rounded cursor-pointer">
        <template v-for="item in resType" :key="item.id">
          <div class="m-1 hover:text-blue-400" @click="GetTypeId(item.id)">
            {{ item.title }}
          </div>
        </template>
      </div>
    </div>
    <div class="form-div">
      <a-input v-model:value="formState.img" prefix="图片链接:" />
    </div>
    <div class="form-div">
      <a-input v-model:value="formState.url" prefix="地址:" />
    </div>
    <div class="p-2">
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reloads">刷新</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navform {
  @apply pt-10 h-700px w-[70%];

  .form-div {
    @apply mt-2 p-2 w-full;
  }
}
</style>
