<script lang="ts" setup>
import { videoApi } from '@/api'

const state = ref(0)

videoApi.GetSumAsync(0, '0', true).then((res: any) => {
  state.value = res.data
})
</script>

<template>
  <div class="side">
    <div class="side-title">燃向视频收集</div>

    <div class="side-list">
      <div class="side-list-title">视频</div>
      <div class="side-list-cnt">
        <div class="side-l-1">视频数量</div>
        <div class="side-l-2">{{ state }}篇</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side {
  @apply h-[90%] top-[9%] right-[11%] w-[17%] fixed;

  .side-title {
    @apply bg-white m-auto text-center mb-2 w-[97%];
    @apply rounded shadow;
    @apply m-1 text-base py-4 px-2;
  }

  .side-list {
    @apply m-auto mb-2 p-1 w-[97%];
    @apply bg-white rounded shadow;

    .side-list-title {
      @apply m-1 text-base p-1;
      @apply rounded bg-emerald-200;
    }

    .side-list-cnt {
      @apply m-2 text-sm flex;

      .side-l-1 {
        @apply p-1 w-[35%];
      }

      .side-l-2 {
        @apply p-1 w-[35%];
      }
    }
  }
}

// @screen <xp {
//   .vside {
//     @apply top-[11%];
//   }
// }
</style>
