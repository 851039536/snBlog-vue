<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { rArticle, searchName } from '../../data'
import { useRouter } from '@hooks/useRouter'
const { winUrl } = useRouter()

//自定义函数，父组件可以触发
async function search() {
  if (searchName.value === '') {
    // ui.uiSearchVisible = false;
    return
  }
  const data = await ArticleApi.getContains(0, 'null', searchName.value)
  rArticle.value = data.data.data
}
</script>
<template>
  <div class="m-1">
    <input
      v-model="searchName"
      v-focus
      class="h-10 w-full border-0 rounded bg-gray-200 text-xl outline-none"
      placeholder="搜索..."
      @input="search()" />
  </div>
  <div class="h-full overflow-auto">
    <div
      v-for="res in rArticle"
      :key="res.id"
      class="rounded bg-slate-50 p-2 shadow-sm m-1 hover:bg-blue-400 hover:text-white">
      <div class="flex items-center text-lg">
        <div i-fxemoji-lightbulb h-5 w-6></div>
        <div class="cursor-pointer font-medium" @click="winUrl(`/myMarkdownContent?id=${res.id}`)">{{ res.name }}</div>
      </div>
      <div class="text-cool-gray-500">{{ res.sketch }}</div>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
