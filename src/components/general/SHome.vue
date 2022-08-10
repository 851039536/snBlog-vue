<script lang="ts" setup>
import { routers } from '@/hooks/routers'
</script>

<template>
  <div class="home">
    <div class="home2">
      <div class="text-[3rem] text-gray-700">xxxx-xxx</div>
      <div class="font-light mt-4 text-lg text-center">
        <p>一位热爱生活、xxxxxx开发者,</p>
        <p>表面腼腆,内心奔放。</p>
        <p>建站缘由 搭建一个属于自己的世界。</p>
        <p>
          blog由本人制作,本站基于TailWindcss,Vue3+ts,Net5Api
          开发搭建，部署于腾讯云，备案于腾讯云，建站初衷是想学习记录生活。
        </p>
      </div>
      <div class="mt-5 text-lg mb-5 animate-bounce">
        <a class="btn" @click="routers('/index/column')">Go-></a>
      </div>
      <div class="text-lg">
        <p>
          SN © 2021.Rights Reserved.
          <a href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  // 居中
  @apply top-1/2 left-1/2 absolute;
  transform: translate(-50%, -50%);
  .home2 {
    @apply flex p-2 justify-center;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
  }
}
</style>
