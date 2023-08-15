<script setup lang="ts">
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()

onMounted(() => {
  ui.loginUi = true
  ui.header = false
  ui.leftSidebar = false
  ui.rightSidebar = false
})
</script>
<template>
  <div></div>
</template>

<!-- <style lang="scss" scoped></style> -->
