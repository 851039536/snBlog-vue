<script lang="ts" setup></script>
<template>
  <c-right-sidebar-container>
    <div class="h-30px cursor-pointer text-base text-cool-gray-500">
      <!-- <div class="float-left">创作中心</div> -->
      <div class="float-right hover:text-blue-400">管理</div>
    </div>
    <div class="bor my-2 flex cursor-pointer items-center justify-center text-gray-700">
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-about m-auto h-7 w-7></div>
        快捷发文
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-file m-auto h-7 w-7></div>
        写文章
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-sports-mode m-auto h-7 w-7></div>
        发动态
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-wikipedia m-auto h-7 w-7></div>
        发代码
      </div>
    </div>
    <div class="my-1 flex items-center justify-center pb-2 text-sm">
      <div class="mx-1">发布 0</div>
      <div class="mx-1">草稿 0</div>
      <div class="mx-1">待审核 0</div>
      <div class="mx-1">收藏 0</div>
    </div>
  </c-right-sidebar-container>
</template>

<!-- <style lang="scss" scoped></style> -->
