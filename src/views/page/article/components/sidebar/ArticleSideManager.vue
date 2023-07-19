<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
const setVisible = () => {
  ui.articleFastVisible = true
}
</script>
<template>
  <c-right-sidebar-container>
    <div class="h-30px cursor-pointer text-base text-cool-gray-500">
      <div class="float-right hover:text-blue-500">管理</div>
    </div>
    <div class="mb-1 flex cursor-pointer items-center justify-center">
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-book m-auto h-7 w-26px @click="setVisible()"></div>
        快捷发文
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-compose m-auto h-7 w-26px></div>
        写文章
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-fire m-auto h-7 w-26px></div>
        发动态
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-bookmark m-auto h-7 w-25px></div>
        发代码
      </div>
    </div>
    <div class="mt-3 flex items-center justify-center pb-1 text-sm">
      <div class="mx-1">发布 0</div>
      <div class="mx-1">草稿 0</div>
      <div class="mx-1">待审核 0</div>
      <div class="mx-1">收藏 0</div>
    </div>
  </c-right-sidebar-container>
</template>

<!-- <style lang="scss" scoped></style> -->
