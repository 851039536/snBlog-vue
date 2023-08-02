<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
import { useArticleApi, useSnippetApi } from '@hooksHttp/index'
import { useUserInfo } from '@hooks/useUserInfo'
import { ident } from './data'
import { message } from 'ant-design-vue'
import { useEventKey } from '@hooks/useEventKey'
const { addKeyup, removeKeyup } = useEventKey()
const { getArticleSum } = useArticleApi()
const { getSnippetSum } = useSnippetApi()
const { isUserLogin } = useUserInfo()
const ui = useUiSetStore()
const setVisible = (idents: number) => {
  if (!isUserLogin()) return message.warning('未登录')
  ident.value = idents
  ui.rightSidebarFastSend = true
  addKeyup(removeEscape)
}

const removeEscape = (e: any) => {
  if (e.key === 'Escape') {
    removeKeyup(removeEscape)
    ui.rightSidebarFastSend = false
  }
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
  <div>
    <c-right-sidebar-container>
      <div class="h-30px cursor-pointer text-cool-gray-600">
        <div class="float-right">快捷操作</div>
      </div>
      <div class="mb-1 flex cursor-pointer items-center justify-center">
        <div class="mx-3 hover:text-blue-400" @click="setVisible(1)">
          <div i-bytesize-book m-auto h-7 w-26px></div>
          <span>发动态</span>
        </div>
        <div class="mx-3 hover:text-blue-400" @click="setVisible(2)">
          <div i-bytesize-compose m-auto h-7 w-26px></div>
          <span>发文章</span>
        </div>
        <div class="mx-3 hover:text-blue-400" @click="setVisible(3)">
          <div i-bytesize-fire m-auto h-7 w-26px></div>
          <span>发日记</span>
        </div>
        <div class="mx-3 hover:text-blue-400" @click="setVisible(4)">
          <div i-bytesize-bookmark m-auto h-7 w-25px></div>
          <span>发片段</span>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-center pb-1 text-sm">
        <div class="mx-3px">文章{{ articleSum }}</div>
        <div class="mx-3px">代码{{ snippetSum }}</div>
        <div class="mx-3px">书单0</div>
        <div class="mx-3px">导航1232</div>
      </div>
    </c-right-sidebar-container>
    <right-sidebar-fast-send></right-sidebar-fast-send>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
