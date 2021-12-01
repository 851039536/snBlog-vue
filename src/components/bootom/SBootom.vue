<script lang="ts" setup>
import { Routers } from '@/hooks/routers'

const skip = (num: number) => {
  switch (num) {
    case 1:
      Routers('/index')
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
      Routers('./index')
      break
    case 7:
      Routers('./index')
      break
    default:
      break
  }
}
</script>
<template>
  <div class="sbootom">
    <div class="flex justify-around bootom-main">
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
  @apply fixed bottom-0 w-full z-10;
  @apply bg-white shadow text-base;

  .bootom-main {
    div {
      @apply px-2 py-3 m-2 text-center text-gray-700;
    }
  }
}
</style>
