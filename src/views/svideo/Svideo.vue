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
    <s-header></s-header>
    <l-sidebar></l-sidebar>
    <video-sidebar></video-sidebar>
    <video-content :arrayVideo="state.resultData"></video-content>
  </div>
</template>

<style lang="scss" scoped>
#svideo {
  @apply fixed w-full;
  height: 92%;
}

// @screen xp {
//   #svideo {
//     .svideo_main {
//       width: 100%;

//       @apply m-0;

//       .svideo_main_content {
//         .svideo-2-1 {
//           width: 97%;
//           height: 65%;
//         }
//       }
//     }
//   }
// }
</style>
