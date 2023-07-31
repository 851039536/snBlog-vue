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
  // console.log('[ state.catalogList = list; ]-28', list)
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
        @onGetCatalog="onGetCatalog" />
    </div>
    <div class="ml-1 w-[16%] overflow-y-scroll p-1 text-base">
      <div v-for="(item, index) in side" :key="index">
        <div class="mt-1 cursor-pointer hover:text-blue-500" @click="scrollToTarget(item.text)">
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
  @apply rounded h-83vh shadow mt-1;

  // 内容
  .cont-txt {
    @apply mt-1 w-[78%] overflow-auto;

    scroll-behavior: smooth;
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
