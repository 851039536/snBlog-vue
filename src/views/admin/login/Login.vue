<script setup lang="ts">
import { uiSettings } from '@store/modules/uiSettings'
const ui = uiSettings()

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
