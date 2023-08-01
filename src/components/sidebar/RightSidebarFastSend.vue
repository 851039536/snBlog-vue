<script setup lang="ts">
import { useUiSetStore } from '@store/modules/uiSettings'
import { ident } from './data'
const ui = useUiSetStore()
const sendTitle = ref('')

//组件更新之前执行的函数。
onBeforeUpdate(() => {
  switch (ident.value) {
    case 1:
      sendTitle.value = '发公告'
      break
    case 2:
      sendTitle.value = '发文章'
      break
    case 3:
      sendTitle.value = '发动态'
      break
    case 4:
      sendTitle.value = '发片段'
      break
    default:
      break
  }
})
</script>

<template>
  <c-modal-dialog :visible="ui.rightSidebarFastSend" :title="sendTitle" @close-model="ui.rightSidebarFastSend = false">
    <RightSidebarFastSendAnnunciate></RightSidebarFastSendAnnunciate>
    <RightSidebarFastSendSnippet></RightSidebarFastSendSnippet>
  </c-modal-dialog>
</template>

<!-- <style lang="scss" scoped></style> -->
