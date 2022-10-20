<script lang="ts" setup>
import { video } from '@/api'

const state = ref(0)

video.GetCountAsync(0, '0', true).then((res: any) => {
  state.value = res.data
})
</script>

<template>
  <div class="vside">
    <div class="vside-title">
      <p>燃向视频收集</p>
    </div>

    <div class="vside-list">
      <div class="vside-list-title">视频信息</div>
      <div class="vside-list-cnt">
        <div class="vside-l-1">视频数量</div>
        <div class="vside-l-2">{{ state }}篇</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vside {
  @apply h-[90%] top-[9%] right-[11%] w-[17%] fixed;

  .vside-title {
    @apply bg-white m-auto text-center mb-2 w-[97%];
    @apply rounded shadow;

    p {
      @apply m-1 text-base py-4 px-2;
    }
  }

  .vside-list {
    @apply cursor-pointer m-auto mb-2 p-1 w-[97%];
    @apply bg-white rounded shadow;

    .vside-list-title {
      @apply m-1 text-base p-1;
      @apply rounded cursor-pointer bg-emerald-200;
    }

    .vside-list-cnt {
      @apply m-2 text-sm flex;

      .vside-l-1 {
        @apply p-1 w-[35%];
      }

      .vside-l-2 {
        @apply p-1 w-[35%];
      }
    }
  }
}

@screen <xp {
  .vside {
    @apply top-[11%];
  }
}
</style>
