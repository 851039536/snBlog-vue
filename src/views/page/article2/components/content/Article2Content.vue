<script lang="ts" setup>
import { blog } from '../data'
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
    <Article2RightSidebar @refresh="onScroll('top')"></Article2RightSidebar>
    <div ref="xxxRef" class="cont-txt scrollbar-w-2 scrollbar">
      <v-md-preview :text="blog" model="preview" />
    </div>
  </div>
  <div fixed class="btn">
    <button @click="onScroll('top')">顶部</button>
    <button @click="onScroll('bottom')">底部</button>
    <button @click="onScroll2(200)">下滑</button>
    <button @click="onScroll3(200)">上划</button>
  </div>
</template>

<style lang="scss">
/* stylelint-disable-next-line string-quotes */
@import '../../../../../design/md_sm';

.cont {
  @apply flex flex-nowrap;
  @apply rounded h-840px shadow mt-1;

  // 内容
  .cont-txt {
    @apply mt-1 w-[75%] overflow-auto;

    // @apply scrollbar scrollbar-w-2;
  }
}

.btn {
  @apply right-75 bottom-1 cursor-pointer z-1;

  button {
    @apply bg-white border-none px-3 mr-1px py-1;
    @apply rounded shadow;
    @apply hover:text-red-500;
  }
}
</style>
