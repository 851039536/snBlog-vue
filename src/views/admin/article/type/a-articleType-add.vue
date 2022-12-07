<script lang="ts" setup>
import { articleTypeApi } from '@/api'
import { articleTypeForm } from '@/api/data/model/articleTypeModel'
import { message } from 'ant-design-vue'
import { aData } from '../../data'
import { addVisible } from './data'
const reload: any = inject('reload')
const update = async () => {
  await articleTypeApi.Add(articleTypeForm).then(r => {
    if (r.data) {
      reload()
      addVisible.value = false
      message.success(aData.SUCCESS)
    }
  })
}
</script>
<template>
  <div class="w-280px h-120px relative">
    <div>
      <a-input v-model:value="articleTypeForm.name" type="text" prefix="标题:" />
    </div>
    <div class="mt-2">
      <a-input v-model:value="articleTypeForm.description" type="text" prefix="描述:" />
    </div>
    <div class="mt-2 absolute bottom-0 right-0">
      <a-button @click="update">新增</a-button>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
