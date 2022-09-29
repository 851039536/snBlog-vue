<script lang="ts" setup>
import { storage } from '@/utils/storage/storage'
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
onDeactivated(() => {
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
  <nav class="head">
    <div class="head-cont">
      <div class="head-cont-l">
        <div class="flex text-2xl items-center">
          <span>少年</span>
        </div>
        <div class="head-l-text">
          <div v-for="res in resData" :key="res.id">
            <span v-if="res.identity" @click="method.skip(res.path)">{{ res.title }}</span>
          </div>
        </div>
      </div>
      <div class="head-cont-r">
        <div class="head-r-div">
          <span v-if="storage.get('user') === 'user'" v-once @click="method.skip(14)">登录</span>
          <span v-else v-once @click="method.skip(14)">{{ storage.get('user') }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.head {
  @apply flex h-70px w-full top-0 left-0 z-50 fixed;
  @apply bg-white shadow px-3;

  .head-cont {
    @apply w-full inline-flex;

    .head-cont-l {
      @apply flex h-full w-[50%];

      .head-l-text {
        @apply flex m-1 p-1 items-center;

        span {
          @apply cursor-pointer m-1 text-xl p-1 hover: text-blue-400;
        }
      }
    }

    .head-cont-r {
      @apply flex h-full text-xl w-[50%] justify-end;

      .head-r-div {
        @apply flex items-center;

        span {
          @apply cursor-pointer m-1 hover: text-blue-400;
        }
      }
    }
  }
}

@screen <lg {
  .head {
    @apply w-full left-0;

    .head-cont .head-cont-l {
      @apply w-[75%];
    }
  }
}
</style>
