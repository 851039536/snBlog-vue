<script lang="ts" setup>
import { Routers } from '@/hooks/routers'

const skip = (num: number) => {
  switch (num) {
    case 1:
      Routers('/index/column')
      break
    case 2:
      Routers('/One')
      break
    case 3:
      Routers('./Book')
      break
    case 4:
      Routers('./svideo')
      break
    case 5:
      Routers('./Photo')
      break
    case 6:
      Routers('./BlogHome')
      break
    case 7:
      Routers('./BlogHome')
      break
    default:
      break
  }
}
</script>
<template>
  <div class="sbootom">
    <div class="">
      <div class @click="skip(1)">首页</div>
      <div class @click="skip(2)">TG</div>
      <div class @click="skip(3)">One</div>
      <div class @click="skip(4)">视频</div>
      <div class @click="skip(5)">图库</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sbootom {
  @apply w-full bottom-0 z-10 fixed;
  @apply bg-white shadow text-base;

  & > div {
    @apply flex justify-around;
    div {
      @apply m-2 text-center py-3 px-2 text-gray-700;
    }
  }
}
</style>
