<script lang="ts" setup>
import { video } from '@/api'

const state = ref(0)

video.GetCountAsync(0, '0', true).then((res: any) => {
  state.value = res.data
})
</script>

<template>
  <div class="video-sidebar">
    <div class="video-s-title">
      <p>燃向视频收集</p>
    </div>

    <div class="video-s-list">
      <div class="video-s-list-title">视频信息</div>
      <div class="video-s-list-cnt">
        <div class="s-v-l-1">视频数量</div>
        <div class="s-v-l-2">{{ state }}篇</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-sidebar {
  @apply h-[90%] top-[9%] right-[12%] w-[18%] fixed;

  .video-s-title {
    @apply bg-white m-auto text-center mb-2 w-[97%];
    @apply rounded shadow;

    p {
      @apply m-1 text-base py-4 px-2;
    }
  }

  .video-s-list {
    @apply cursor-pointer m-auto mb-2 p-1 w-[97%];
    @apply bg-white rounded shadow;

    .video-s-list-title {
      color: #1b1e21;

      @apply cursor-pointer font-semibold bg-gray-200 m-1 text-base p-1;
    }

    .video-s-list-cnt {
      @apply m-2 text-sm flex;

      .s-v-l-1 {
        @apply p-1 w-[35%];
      }

      .s-v-l-2 {
        @apply p-1 w-[35%];
      }
    }
  }
}

@screen <xp {
  .video-sidebar {
    @apply top-[11%];
  }
}
</style>
