<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { searchVisible } from '@/utils/common/IdentityData'
import { rArticle, searchName } from '../../data'
async function search() {
  rArticle.value = await (await ArticleApi.getContains(0, 'null', searchName.value, false)).data
}
async function onSearch() {
  if (searchName.value === '') {
    searchVisible.value = false
    return
  }
  searchVisible.value = true //显示元素内容
  await search()
}
</script>
<template>
  <c-right-sidebar-container>
    <div class="side-input">
      <a-input-search
        v-model:value="searchName"
        placeholder="内容搜索"
        style="width: 100%"
        @search="onSearch()"
        @change="onSearch()" />
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.side-input {
  @apply p-2;
}
</style>
