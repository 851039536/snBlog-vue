<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { articleData, paging } from '.'

const clickType = async (name: string) => {
  paging.typeStr = name
  const data = await ArticleApi.getPaging(
    paging.identity,
    paging.typeStr,
    paging.current,
    paging.pagesize,
    paging.typeStr
  )
  articleData.value = data.data
}
</script>
<template>
  <div class="article-column-top">
    <div @click="clickType('read')">热门</div>
    <div @click="clickType('id')">最新</div>
  </div>
</template>

<style lang="scss" scoped>
.article-column-top {
  // @apply top-0px left-0 z-100 absolute ml-[24%] mt-[4.6%] w-[47%];
  @apply flex cursor-pointer rounded-md bg-white border-emerald-200;

  div {
    @apply p-1 hover:text-blue-400;
  }
}
</style>
