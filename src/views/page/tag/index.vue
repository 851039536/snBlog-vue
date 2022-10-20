<script lang="ts" setup>
import { articleApi } from '@/api'
import { rData } from './data/data'

async function Search(names: string) {
  if (names === '') return
  rData.articleData = await (await articleApi.GetContains(0, 'null', names, true)).data
}
</script>
<template>
  <div class="tindex">
    <l-sidebar></l-sidebar>
    <s-header></s-header>
    <div class="tag-search">
      <a-select
        show-search
        placeholder="标题搜索"
        style="width: 100%; height: 100%"
        :default-active-first-option="false"
        :show-arrow="false"
        :filter-option="false"
        :not-found-content="null"
        @search="Search"></a-select>
    </div>
    <TagContent></TagContent>
    <TagSide></TagSide>
  </div>
</template>

<style lang="scss" scoped>
.tindex {
  @apply h-[92%] mt-[4.7%] ml-[22%] w-[49.5%] relative;
  @apply bg-white;

  .tag-search {
    @apply p-1 shadow;
  }
}
</style>
