<script lang="ts" setup>
import { state } from './data/data'
import { method } from './data/index'

method.currentchange(1)
</script>

<template>
  <div class="video">
    <!-- <video-sidebar></video-sidebar> -->
    <video-content :r-data="state.rData"></video-content>
  </div>
</template>

<style lang="scss" scoped>
.video {
  // @apply h-[92.78vh];
}
</style>
