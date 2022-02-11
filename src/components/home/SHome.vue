<script lang="ts" setup>
import { Routers } from '@/hooks/routers'
</script>

<template>
  <div id="blogHome ">
    <div class="home_main">
      <div class="mt-20 centeredPrompt">
        <div class="text-[3rem] text-gray-700">程序员xxx</div>
        <div class="font-light mt-4 text-lg text-center">
          <p>一位热爱生活、xxxxxx开发者,</p>
          <p>表面腼腆,内心奔放。</p>
          <p>建站缘由 搭建一个属于自己的世界。</p>
          <p>
            blog由本人制作,本站基于TailWindcss,Vue3+ts,Net5Api
            开发搭建，部署于腾讯云，备案于腾讯云，建站初衷是想学习记录生活。
          </p>
        </div>
        <div class="mt-5 text-lg mb-5">
          <P class="btn" @click="Routers('/Blogs/BlogsColumn')">Go</P>
        </div>
        <div class="text-base">
          <p>
            SN © 2021.Rights Reserved.
            <a class="text-gray-600 ceShi" href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.centeredPrompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 10px;
}

#blogHome {
  @apply fixed;

  @include w-h;

  @apply bg-white;

  .home_main {
    @apply m-auto top-0 right-0 bottom-0 left-0 absolute;

    @include w-h(90%, 70%);

    @apply rounded-3xl shadow-2xl;
  }
}
</style>
