<script lang="ts" setup>
import { articleTypeForm } from '@/api/data/model/ArticleTypeModel'
import { message } from 'ant-design-vue'
import { aData } from '../../data'
import { editVisible } from './data'
import { useApi } from '@/api/useApi'

const { ArticleTypeApi } = useApi()
const reload: any = inject('reload')
const update = async () => {
  await ArticleTypeApi.update(articleTypeForm).then(r => {
    if (r.data) {
      reload()
      editVisible.value = false
      message.success(aData.SUCCESS)
    }
  })
}
</script>
<template>
  <div class="relative h-120px w-280px">
    <div>
      <a-input v-model:value="articleTypeForm.name" type="text" prefix="标题:" />
    </div>
    <div class="mt-2">
      <a-input v-model:value="articleTypeForm.description" type="text" prefix="描述:" />
    </div>
    <div class="absolute bottom-0 right-0 mt-2">
      <a-button @click="update">更新</a-button>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
