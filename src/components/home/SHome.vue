<script lang="ts" setup>
import { Routers } from '@/hooks/routers'
</script>

<template>
  <div id="blogHome" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="centeredPrompt">
        <div class="text-3xl">程序员xxx</div>
        <div class="text-lg mt-2">一位热爱生活、xxxxxx开发者。</div>
        <div class="text-lg mt-2">
          <a @click="Routers('/Blogs/BlogsColumn')">Go</a>
        </div>
        <div class="text-base">
          <p>
            SN © 2021.Rights Reserved.
            <a href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
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
    @apply absolute m-auto top-0 left-0 bottom-0 right-0;

    @include w-h(90%, 70%);

    @apply shadow-2xl rounded-3xl;
  }
}
</style>
