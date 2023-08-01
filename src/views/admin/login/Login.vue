<script setup lang="ts">
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()

onMounted(() => {
  ui.loginVisible = true
  ui.uiHeadVisible = false
  ui.uiLeftVisible = false
  ui.uiRightVisible = false
})
</script>
<template>
  <div></div>
</template>

<!-- <style lang="scss" scoped></style> -->
