<script setup lang="ts">
import { useUiSetStore } from '@store/modules/uiSettings'
import { useUserInfo } from '@hooks/useUserInfo'
const { isToken } = useUserInfo()
const ui = useUiSetStore()

onMounted(async () => {
  ui.loginVisible = true
  ui.uiHeadVisible = false
  ui.uiLeftVisible = false
  ui.uiRightVisible = false
  await isToken()
})
</script>
<template>
  <div></div>
</template>

<!-- <style lang="scss" scoped></style> -->
