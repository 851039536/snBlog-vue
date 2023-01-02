<script lang="ts" setup>
import { state } from './data/data'
import { method } from './data/index'

method.currentchange(1)
</script>

<template>
  <div class="video">
    <video-sidebar></video-sidebar>
    <video-content :r-data="state.rData"></video-content>
  </div>
</template>

<style lang="scss" scoped>
.video {
  @apply w-full relative h-[92%];
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
