<script lang="ts" setup>
import { searchName } from './data'
import { useRouter } from '@hooks/useRouter'

import { Article } from '@/hooks/http/model/Article'
import { useArticleApi } from '@hooksHttp/index'
const { getContains } = useArticleApi()
const { winUrl } = useRouter()
const article = ref([] as Article[])
//自定义函数，父组件可以触发
async function search() {
  if (searchName.value === '') {
    return
  }
  const ret = await getContains(0, 'null', searchName.value)
  article.value = ret.data.data
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
  <ul class="h-full cursor-pointer list-none overflow-auto p-0 pb-130">
    <li
      v-for="ret in article"
      :key="ret.id"
      class="rounded bg-slate-50 p-2 shadow-sm m-1 hover:bg-blue-400 hover:text-white">
      <div class="flex items-center text-lg">
        <div i-typcn-bookmark h-5 w-6></div>
        <div class="font-medium" @click="winUrl(`/myMarkdownContent?id=${ret.id}`)">{{ ret.name }}</div>
      </div>
      <div class="px-2 text-cool-gray-600">{{ ret.sketch }}</div>
    </li>
  </ul>
</template>
