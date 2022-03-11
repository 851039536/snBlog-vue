<script lang="ts" setup>
import { resData, method } from './data/index'

const local = ref(true)
const scroll = () => {
  // 滚动条高度
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  // 可视区的高度
  const { clientHeight } = document.documentElement
  if (scrollTop > clientHeight) {
    local.value = true
  } else {
    local.value = true
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
  <nav class="sheader" v-if="local">
    <div>
      <div class="sheader-start">
        <div class="flex h-full text-2xl items-center">
          <span>少年</span>
        </div>
        <div class="sheader-text">
          <div v-for="res in resData" :key="res.id">
            <span @click="method.skip(res.path)" v-if="res.identity">{{ res.title }}</span>
          </div>
        </div>
      </div>
      <div class="sheader-end">
        <div>
          <span @click="method.skip(13)" v-once>博客园</span>
          <span @click="method.skip(14)" v-once>Login</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.sheader {
  @apply flex h-[53px] top-0 left-[3%] w-[94%] z-50 fixed;
  @apply bg-white rounded shadow px-3;
  & > div {
    @apply w-full inline-flex;
    .sheader-start {
      @apply flex h-full w-[50%];
      .sheader-text {
        @apply flex items-center;
        span {
          @apply cursor-pointer text-lg ml-3 text-gray-600 hover:text-blue-400;
        }
      }
    }
    .sheader-end {
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

@screen <lg {
  .sheader {
    @apply w-full left-0;
    & > div .sheader-start {
      @apply w-[75%];
    }
  }
}
</style>
