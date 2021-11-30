<script lang="ts" setup>
import { video } from '@/api'
import { state } from './data/data'
import { method } from './data/index'

video.GetCountAsync(0, '0', true).then((res: any) => {
  state.count = res.data
})
method.currentchange(1)
</script>

<template>
  <div id="svideo">
    <l-sidebar></l-sidebar>
    <video-sidebar></video-sidebar>
    <!-- <svideo-content :resultData="state.resultData"></svideo-content> -->
  </div>
</template>

<style lang="scss" scoped>
#svideo {
  @apply fixed w-full;

  height: 92%;
}

@screen xp {
  #svideo {
    .svideo_main {
      width: 100%;

      @apply m-0;

      .svideo_main_content {
        .svideo-2-1 {
          width: 97%;
          height: 65%;
        }
      }
    }
  }
}
</style>
