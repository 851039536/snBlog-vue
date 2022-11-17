<script lang="ts" setup>
import { hSearch, hSearchValue } from '@/hooks/data'

const proxy: any = getCurrentInstance()
const cliFun = (e: any) => {
  if (!proxy.ctx.$refs.iscity.contains(e.target) && e.target.id !== 'iscity') {
    if (hSearchValue.value.contains(e.target) && e.target.id !== 'ipu') return //如果存在元素不隐藏
    hSearch.value = false //隐藏
  }
}
onMounted(() => {
  document.addEventListener('click', cliFun) //点击事件
})
onUnmounted(() => {
  document.removeEventListener('click', cliFun) //删除事件
})
</script>
<template>
  <div v-if="hSearch" ref="iscity" shadow-md z-1 w-600px class="bg-white rounded" fixed m-auto left-0 right-0>
    <div class="my-2">
      <div class="m-1"><input class="h-9 w-full" placeholder="内容搜索..." /></div>
      <div class="bg-gray-50 px-2 m-1 rounded">
        <div class="text-base flex">
          <div i-fxemoji-emptynote h-5 w-7 mt-1px></div>
          标题标题标题标题标题
        </div>
        <div class="text-cool-gray-500">描述描述描述描述描述描述描述描述描述</div>
      </div>
      <div class="bg-gray-50 px-2 m-1 rounded">
        <div class="text-base flex">
          <div i-fxemoji-emptynote h-5 w-7 mt-1px></div>
          标题标题标题标题标题
        </div>
        <div class="text-cool-gray-500">描述描述描述描述描述描述描述描述描述</div>
      </div>
      <div class="bg-gray-50 px-2 m-1 rounded">
        <div class="text-base flex">
          <div i-fxemoji-emptynote h-5 w-7 mt-1px></div>
          标题标题标题标题标题
        </div>
        <div class="text-cool-gray-500">描述描述描述描述描述描述描述描述描述</div>
      </div>
      <div class="bg-gray-50 px-2 m-1 rounded">
        <div class="text-base flex">
          <div i-fxemoji-emptynote h-5 w-7 mt-1px></div>
          标题标题标题标题标题
        </div>
        <div class="text-cool-gray-500">描述描述描述描述描述描述描述描述描述</div>
      </div>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
