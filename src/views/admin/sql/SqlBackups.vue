<script lang="ts" setup>
import { navName } from '../utils/data'

const reload: any = inject('reload')
onMounted(() => {
  navName.name = '设置'
  navName.name2 = 'SQL管理'
})
</script>
<template>
  <div mb-2>
    <a-space>
      <a-button @click="reload()">刷新</a-button>
    </a-space>
  </div>
</template>
