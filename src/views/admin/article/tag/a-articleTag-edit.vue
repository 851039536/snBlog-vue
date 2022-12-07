<script lang="ts" setup>
import { articleTagApi } from '@/api'
import { articleTagForm } from '@/api/data/model/articleTagModel'
import { message } from 'ant-design-vue'
import { aData } from '../../data'
import { editVisible } from './data'
const reload: any = inject('reload')
const update = async () => {
  await articleTagApi.Update(articleTagForm).then(r => {
    if (r.data) {
      reload()
      editVisible.value = false
      message.success(aData.SUCCESS)
    }
  })
}
</script>
<template>
  <div class="w-280px h-120px relative">
    <div>
      <a-input v-model:value="articleTagForm.name" type="text" prefix="标题:" />
    </div>
    <div class="mt-2">
      <a-input v-model:value="articleTagForm.description" type="text" prefix="描述:" />
    </div>
    <div class="mt-2 absolute bottom-0 right-0">
      <a-button @click="update">更新</a-button>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
