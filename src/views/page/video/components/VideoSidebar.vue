<script lang="ts" setup>
import { VideoApi } from '@/api'

const sum = ref(0)
VideoApi.getSum(0, '0', true).then((res: any) => {
  sum.value = res.data
})
</script>

<template>
  <c-right-sidebar>
    <c-sidebar-container>
      <div class="side-title">燃向视频收集</div>
    </c-sidebar-container>

    <c-sidebar-container>
      <div class="side-list">
        <div class="flex items-center">
          <div i-fxemoji-shavedice w-5 h-5 mr-1></div>
          <div class="text-base">视频</div>
        </div>
        <div class="flex my-1 pb-1">
          <div>视频数量</div>
          <div>{{ sum }}篇</div>
        </div>
      </div>
    </c-sidebar-container>
  </c-right-sidebar>
</template>

<style lang="scss" scoped>
.side-title {
  @apply text-center py-2 text-base;
}

// @screen <xp {
//   .vside {
//     @apply top-[11%];
//   }
// }
</style>
