<script lang="ts" setup>
import { blog } from './data'
const xxxRef = ref()
const onScroll = (type: string) => {
  nextTick(() => {
    const distance = type === 'top' ? 0 : xxxRef.value.scrollHeight
    xxxRef.value.scrollTop = distance
  })
}
const onScroll2 = (type: number) => {
  nextTick(() => {
    xxxRef.value.scrollTop += type
  })
}
const onScroll3 = (type: number) => {
  nextTick(() => {
    xxxRef.value.scrollTop -= type
  })
}
</script>
<template>
  <div class="cont">
    <Article2ContentSide @refresh="onScroll('top')"></Article2ContentSide>
    <div ref="xxxRef" class="cont-txt">
      <v-md-preview :text="blog" model="preview" />
    </div>
  </div>
  <div fixed class="right-80 bottom-5 cursor-pointer z-1">
    <button p-1 @click="onScroll('top')">顶部</button>
    <button p-1 @click="onScroll('bottom')">底部</button>
    <button p-1 @click="onScroll2(200)">下滑</button>
    <button p-1 @click="onScroll3(200)">上划</button>
  </div>
</template>

<style lang="scss" scoped>
.cont {
  @apply flex flex-nowrap;
  @apply rounded h-840px shadow mt-1;

  // 内容
  .cont-txt {
    @apply mt-1 w-[75%] overflow-auto;

    scroll-behavior: smooth;
  }
}
</style>
