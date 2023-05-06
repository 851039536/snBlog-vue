<script lang="ts" setup>
import { routers } from '@/utils/route'

const skip = (num: number) => {
  switch (num) {
    case 1:
      routers('/article/column')
      break
    case 2:
      routers('/one')
      break
    case 3:
      routers('./book')
      break
    case 4:
      routers('./video')
      break
    case 5:
      routers('./photo')
      break
    case 6:
      routers('./BlogHome')
      break
    case 7:
      routers('./BlogHome')
      break
    default:
      break
  }
}
</script>
<template>
  <div class="sbootom">
    <div @click="skip(1)">首页</div>
    <div @click="skip(2)">TG</div>
    <div @click="skip(3)">One</div>
    <div @click="skip(4)">视频</div>
    <div @click="skip(5)">图库</div>
  </div>
</template>

<style lang="scss">
.sbootom {
  @apply flex justify-around;
  @apply w-full bottom-0 fixed;
  @apply bg-white shadow text-base;

  div {
    @apply m-2 py-3 px-2;
  }
}
</style>
