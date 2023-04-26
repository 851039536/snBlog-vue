<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { searchVisible } from '@/utils/common/IdentityData'
import { rArticle, rSearchName } from '../../data'
async function search() {
  rArticle.value = await (await ArticleApi.getContains(0, 'null', rSearchName.value, false)).data
}
async function onSearch() {
  if (rSearchName.value === '') {
    searchVisible.value = false
    return
  }
  searchVisible.value = true //显示元素内容
  await search()
}
</script>
<template>
  <c-sidebar-container>
    <div class="side-input">
      <a-input-search
        v-model:value="rSearchName"
        placeholder="内容搜索"
        style="width: 100%"
        @search="onSearch()"
        @change="onSearch()" />
    </div>
  </c-sidebar-container>
</template>

<style lang="scss" scoped>
.side-input {
  @apply p-2;
}
</style>
