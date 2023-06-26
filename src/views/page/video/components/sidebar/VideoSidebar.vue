<script lang="ts" setup>
import { VideoApi } from '@/api'

const sum = ref(0)
VideoApi.getSum(0, '0', true).then((res: any) => {
  sum.value = res.data.data
})
</script>

<template>
  <c-right-sidebar>
    <c-right-sidebar-container>
      <div class="video-sidebar-title">燃向视频收集</div>
    </c-right-sidebar-container>

    <c-right-sidebar-container>
      <div class="flex items-center">
        <div i-fxemoji-shavedice mr-1 h-5 w-5></div>
        <div class="text-base">视频</div>
      </div>
      <div class="video-sidebar-content">
        <div class="sidebar-content-1">视频数量</div>
        <div class="sidebar-content-2">{{ sum }}篇</div>
      </div>
    </c-right-sidebar-container>
  </c-right-sidebar>
</template>

<style lang="scss" scoped>
.video-sidebar-title {
  @apply text-center py-2 text-base;
}

.video-sidebar-content {
  @apply flex p-1;

  .sidebar-content-1 {
    // @apply mx-1;
  }

  .sidebar-content-2 {
    @apply mx-4;
  }
}

// @screen <xp {
//   .vside {
//     @apply top-[11%];
//   }
// }
</style>
