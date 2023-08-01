<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
import { useArticleApi, useSnippetApi } from '@hooksHttp/index'
const { getArticleSum } = useArticleApi()
const { getSnippetSum } = useSnippetApi()
const ui = useUiSetStore()
const setVisible = () => {
  ui.articleFastVisible = true
}

const articleSum = ref('')
const snippetSum = ref('')
onMounted(async () => {
  const [articleSums, snippetSums] = await axios.all([await getArticleSum(), await getSnippetSum(0, '0', false)])
  articleSum.value = articleSums.data.data as string
  snippetSum.value = snippetSums.data
})
</script>
<template>
  <c-right-sidebar-container>
    <div class="h-30px cursor-pointer text-base text-cool-gray-500">
      <div class="float-right hover:text-blue-500">管理</div>
    </div>
    <div class="mb-1 flex cursor-pointer items-center justify-center">
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-book m-auto h-7 w-26px></div>
        <span @click="setVisible()">快捷发文</span>
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-compose m-auto h-7 w-26px></div>
        <span @click="setVisible()">写文章</span>
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-fire m-auto h-7 w-26px></div>
        <span @click="setVisible()">发动态</span>
      </div>
      <div class="mx-3 hover:text-blue-400">
        <div i-bytesize-bookmark m-auto h-7 w-25px></div>
        <span @click="setVisible()">发片段</span>
      </div>
    </div>
    <div class="mt-3 flex items-center justify-center pb-1 text-sm">
      <div class="mx-3px">文章{{ articleSum }}</div>
      <div class="mx-3px">代码{{ snippetSum }}</div>
      <div class="mx-3px">书单0</div>
      <div class="mx-3px">导航1232</div>
    </div>
  </c-right-sidebar-container>
</template>

<!-- <style lang="scss" scoped></style> -->
