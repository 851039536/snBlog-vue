<script lang="ts" setup>
import { articleApi } from '@/api'
import { rArticle } from './data'

async function Search(name: string) {
  if (name === '') return
  rArticle.value = await (await articleApi.GetContains(0, 'null', name, true)).data
}
</script>
<template>
  <div class="index">
    <div class="search">
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
.index {
  @apply h-[92%] mt-[4.6%] ml-[22%] w-[49.5%] relative;
  @apply bg-white;

  .search {
    @apply p-1 shadow rounded;
  }
}
</style>
