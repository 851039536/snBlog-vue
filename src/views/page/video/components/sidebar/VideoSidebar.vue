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
      <div class="title">燃向视频收集</div>
    </c-right-sidebar-container>

    <c-right-sidebar-container>
      <div class="side-list">
        <div class="flex items-center">
          <div i-fxemoji-shavedice mr-1 h-5 w-5></div>
          <div class="text-base">视频</div>
        </div>
        <div class="my-1 flex pb-1">
          <div>视频数量</div>
          <div>{{ sum }}篇</div>
        </div>
      </div>
    </c-right-sidebar-container>
  </c-right-sidebar>
</template>

<style lang="scss" scoped>
.title {
  @apply text-center py-2 text-base;
}

// @screen <xp {
//   .vside {
//     @apply top-[11%];
//   }
// }
</style>
