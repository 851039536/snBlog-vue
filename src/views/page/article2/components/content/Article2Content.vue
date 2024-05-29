<script lang="ts" setup>
import { blog } from '../data'
import { MdPreview } from 'md-editor-v3'
import { useThemeSetting } from '@store/modules/themeSetting'

const theme = useThemeSetting()
const scrollRef = ref()
const id = 'preview-only2'
const onScroll = (type: string) => {
  nextTick(() => {
    scrollRef.value.scrollTop = type === 'top' ? 0 : scrollRef.value.scrollHeight
  })
}
const onScroll2 = (type: number) => {
  nextTick(() => {
    scrollRef.value.scrollTop += type
    scrollRef.value.querySelector('#段落').scrollIntoView(true)
  })
}

const scrollToTarget = (type: string) => {
  nextTick(() => {
    scrollRef.value.querySelector(`#${type}`).scrollIntoView(true)
  })
}
const onScroll3 = (type: number) => {
  nextTick(() => {
    scrollRef.value.scrollTop -= type
  })
}
const side = ref()
const onGetCatalog = (list: any) => {
  side.value = list
}
</script>
<template>
  <div class="cont">
    <Article2RightSidebar @refresh="onScroll('top')"></Article2RightSidebar>
    <div ref="scrollRef" class="cont-txt scrollbar-w-2 scrollbar">
      <MdPreview
        :editor-id="id"
        :model-value="blog"
        :preview-theme="theme.previewTheme"
        :code-theme="theme.codeTheme"
        @on-get-catalog="onGetCatalog" />
    </div>
    <!-- 右侧侧边导航 -->
    <div class="w-[16%] p-1">
      <div v-for="(item, index) in side" :key="index">
        <div class="cursor-pointer px-1 hover:text-blue-500" @click="scrollToTarget(item.text)">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>

  <div fixed class="btn">
    <button @click="onScroll('top')">顶部</button>
    <button @click="onScroll('bottom')">底部</button>
    <button @click="onScroll2(200)">下滑</button>
    <button @click="onScroll3(200)">上划</button>
  </div>
</template>

<style lang="scss" scoped>
.cont {
  @apply flex flex-nowrap;
  @apply rounded h-83vh  mt-1;

  // 内容
  .cont-txt {
    @apply py-2 mt-1 w-[78%] overflow-auto;

    scroll-behavior: smooth;
  }
}

.btn {
  @apply right-5 bottom-1 cursor-pointer z-1;

  button {
    @apply bg-white border-none px-3 mr-1px py-1;
    @apply rounded shadow;
    @apply hover:text-red-500;
  }
}
</style>
