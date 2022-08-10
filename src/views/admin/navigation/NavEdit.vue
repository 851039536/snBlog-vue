<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { navigation, TOKEN } from '@/api'
import { formState, resType } from './data/data'
import { routers, go, winUrl } from '@/hooks/routers'
import { navName } from '../utils/data'

const route = useRoute()
const Rid = reactive({
  id: route.query.id
})
const onSubmit = async () => {
  await navigation.UpdateAsync(formState).then(() => {
    message.info('更新完成')
    routers('/Admin-index/NavTable')
  })
}
async function GetApi() {
  await TOKEN()
  navName.name = '内容分享'
  navName.name2 = '编辑内容'
  navigation.GetSnNavigationTypeSAllAsync(false).then((res) => {
    resType.value = res.data
  })

  navigation.GetByIdAsync(Rid.id, false).then((res) => {
    formState.id = res.data.id
    formState.title = res.data.title
    formState.describe = res.data.describe
    formState.img = res.data.img
    formState.typeId = res.data.typeId
    formState.userId = res.data.userId
    formState.url = res.data.url
  })
}

onMounted(async () => {
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
          <a-select-option v-for="item in resType" :key="item.id" :label="item.id" :value="item.id">{{
            item.title
          }}</a-select-option>
        </a-select>
      </div>
      <div class="ml-2">
        <a-input v-model:value="formState.img" prefix="图片链接:" />
      </div>
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a-input v-model:value="formState.url" prefix="地址:" />
    </div>
    <div class="rounded bg-gray-50 shadow mt-2 p-2">
      <a @click="winUrl(formState.url)">{{ formState.url }}</a>
    </div>

    <div class="bg-gray-100 shadow p-2">
      <a-button type="primary" @click="onSubmit">更新</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;
}
</style>
