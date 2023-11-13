<script setup lang="ts">
import { useEventKey } from '@hooks/useEventKey'
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
const { addKeyup, removeKeyup } = useEventKey()
const over = ref(false)
const leave = ref(true)
const escape = (e: any) => {
  if (e.key === 'Escape') {
    removeKeyup(escape)
  }
}

function handleMouseOver() {
  // 鼠标进入<div>元素时执行的代码
  over.value = true
  leave.value = false
  addKeyup(escape)
}
function handleMouseLeave() {
  // 鼠标离开<div>元素时执行的代码
  over.value = false
  leave.value = true
}
</script>

<template>
  <div
    v-if="leave"
    i-bytesize-chevron-left
    h-5
    w-5
    class="fixed bottom-[45%] right-0 rounded"
    @mouseover="handleMouseOver"
    @click="over = true"></div>
  <transition name="slidex-fade">
    <div v-if="over" class="fixed bottom-[40%] right-0 rounded" @mouseleave="handleMouseLeave">
      <div class="test-cont">
        <div>gitee</div>
        <div>github</div>
        <div @click="ui.fTools = true">工具</div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.test-cont {
  @apply w-16 bg-white rounded p-1 cursor-pointer;

  div {
    @apply text-center hover:text-blue-500;
  }
}
</style>
