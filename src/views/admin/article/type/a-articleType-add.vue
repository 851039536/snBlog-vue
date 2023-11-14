<script lang="ts" setup>
import { articleType } from '@api/model/ArticleType'
import { message } from 'ant-design-vue'
import { aData } from '../../data'
import { addVisible } from './data'
import { useApi } from '@/api/useApi'

const { ArticleTypeApi } = useApi()
const reload: any = inject('reload')
const update = async () => {
  await ArticleTypeApi.add(articleType).then(r => {
    if (r.data) {
      reload()
      addVisible.value = false
      message.success(aData.SUCCESS)
    }
  })
}
</script>
<template>
  <div class="relative h-120px w-280px">
    <div>
      <a-input v-model:value="articleType.name" type="text" prefix="标题:" />
    </div>
    <div class="mt-2">
      <a-input v-model:value="articleType.description" type="text" prefix="描述:" />
    </div>
    <div class="absolute bottom-0 right-0 mt-2">
      <a-button @click="update">新增</a-button>
    </div>
  </div>
</template>
@/api/model/ArticleType
