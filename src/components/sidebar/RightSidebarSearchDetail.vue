<script lang="ts" setup>
import { searchName } from './index'
import { useRouter } from '@hooks/useRouter'
import { Article } from '@api/model/Article'
import { useDirective } from '@hooks/useDirective'
import { uiSettings } from '@/store/modules/uiSettings'
import { useApi } from '@api/useApi'

const { ArticleApi } = useApi()
const { debounce } = useDirective()
const ui = uiSettings()
const { winUrl } = useRouter()
const article = ref([] as Article[])
//自定义函数，父组件可以触发
const search = debounce(async () => {
  if (searchName.value === '') {
    article.value = []
    return
  }
  const ret = await ArticleApi.getContains(0, 'null', searchName.value)
  article.value = ret.data.data
}, 500)
</script>
<template>
  <div>
    <div id="search"></div>
    <c-modal-search @close-model="ui.searchArticle = false">
      <div>
        <div class="m-1">
          <input
            v-model="searchName"
            v-focus
            class="h-10 w-full border-0 rounded bg-gray-200 text-xl outline-none"
            @input="search()" />
        </div>
        <ul class="h-full cursor-pointer list-none p-0 pb-130">
          <li
            v-for="ret in article"
            :key="ret.id"
            class="rounded bg-slate-50 p-2 shadow-sm m-1 hover:bg-blue-500 hover:text-white hover:shadow">
            <div class="flex items-center text-lg" @click="winUrl(`/myMarkdownContent?id=${ret.id}`)">
              <div i-typcn-bookmark h-5 w-5></div>
              <div class="font-medium">{{ ret.name }}</div>
            </div>
            <div class="px-2 text-cool-gray-600">{{ ret.sketch }}</div>
          </li>
        </ul>
      </div>
    </c-modal-search>
  </div>
</template>
