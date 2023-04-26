<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { throttle } from '@/utils/dethrottle'
import { rArticle } from '../data'

const search = (name: string) => {
  throttle(async () => {
    if (name === '') return
    rArticle.value = await (await ArticleApi.getContains(0, 'null', name)).data
  }, 300)()
}
</script>
<template>
  <div class="search">
    <a-select
      show-search
      placeholder="标题搜索"
      style="width: 100%; height: 100%"
      :default-active-first-option="false"
      :show-arrow="false"
      :filter-option="false"
      :not-found-content="null"
      @search="search"></a-select>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply p-1 shadow rounded;
}
</style>
