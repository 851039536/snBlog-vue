<script lang="ts" setup></script>
<template>
  <c-right-sidebar-container>
    <div class="h-30px text-base text-cool-gray-500 cursor-pointer">
      <!-- <div class="float-left">创作中心</div> -->
      <div class="float-right hover:text-blue-400">管理</div>
    </div>
    <div class="bor flex justify-center items-center my-2 cursor-pointer text-gray-700">
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-about w-7 h-7 m-auto></div>
        快捷发文
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-file w-7 h-7 m-auto></div>
        写文章
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-sports-mode w-7 h-7 m-auto></div>
        发动态
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-flat-color-icons-wikipedia w-7 h-7 m-auto></div>
        发代码
      </div>
    </div>
    <div class="flex justify-center items-center my-1 pb-2 text-sm">
      <div class="mx-1">发布 0</div>
      <div class="mx-1">草稿 0</div>
      <div class="mx-1">待审核 0</div>
      <div class="mx-1">收藏 0</div>
    </div>
  </c-right-sidebar-container>
</template>

<!-- <style lang="scss" scoped></style> -->
