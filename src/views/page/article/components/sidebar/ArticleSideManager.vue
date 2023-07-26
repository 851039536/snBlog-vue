<script lang="ts" setup>
import { ArticleApi } from '@api/index'
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
const setVisible = () => {
  ui.articleFastVisible = true
}

const articleSum = ref('')
onMounted(async () => {
  // 注册全局的键盘事件监听器
  const [articleSums] = await axios.all([await ArticleApi.getSum()])

  articleSum.value = String(articleSums.data.data) // 文章总数
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
      <div class="mx-1">文章 {{ articleSum }}</div>
      <div class="mx-1">代码 323</div>
      <div class="mx-1">书单 20</div>
      <div class="mx-1">导航 123</div>
    </div>
  </c-right-sidebar-container>
</template>

<!-- <style lang="scss" scoped></style> -->
