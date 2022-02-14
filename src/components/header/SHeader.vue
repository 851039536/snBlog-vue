<script lang="ts" setup>
import { resData, method } from './data/header'

const reac = reactive({
  local: true
})
const scroll = () => {
  // 滚动条高度
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  // 可视区的高度
  const { clientHeight } = document.documentElement
  if (scrollTop > clientHeight) {
    reac.local = false
  } else {
    reac.local = true
  }
}
onDeactivated(async () => {
  // 离开这个界面之后，删除，不然会有问题
  window.removeEventListener('scroll', scroll)
})
onMounted(async () => {
  await method.GetType()
  // 给window添加一个滚动监听事件
  window.addEventListener('scroll', scroll)
})
</script>
<template>
  <nav class="headers" v-if="reac.local">
    <div>
      <div class="header_main">
        <div class="flex h-full items-center">
          <span class="text-2xl">少年</span>
        </div>
        <div class="header_text">
          <div v-for="res in resData.resultData" :key="res.id">
            <span @click="method.skip(res.path)" v-if="res.identity">{{ res.title }}</span>
          </div>
        </div>
      </div>
      <div class="header_end">
        <div>
          <span @click="method.skip(13)" v-once>博客园</span>
          <span @click="method.skip(14)" v-once>Login</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.headers {
  @apply flex h-[53px] top-0 left-[3%] w-[94%] z-50 fixed;
  @apply bg-white rounded shadow px-3;
  & > div {
    @apply flex w-full;
    .header_main {
      @apply flex h-full w-[50%];

      .header_text {
        @apply flex items-center;
        span {
          @apply cursor-pointer text-lg ml-3 text-gray-600 hover:text-blue-400;
        }
      }
    }

    .header_end {
      @apply flex h-full text-lg text-gray-600 w-[50%] justify-end;
      & > div {
        @apply flex  items-center;
        span {
          @apply cursor-pointer m-1 hover:text-blue-400;
        }
      }
    }
  }
}
</style>
