<script lang="ts" setup>
import { video } from '@/api'

const state = ref(0)

video.GetCountAsync(0, '0', true).then((res: any) => {
  state.value = res.data
})
</script>

<template>
  <div class="video_sidebar">
    <div>
      <!-- 标签头部 -->
      <div class="video_s_m_top">
        <div>
          <p class>燃向视频收集</p>
        </div>
      </div>

      <div class="video_sidebar_count">
        <div class="sn-list8-1">视频信息</div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">视频数量</div>
            <div class="sn-list8-2-1-2">{{ state }}篇</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video_sidebar {
  @apply h-[90%] top-[9%] right-[8%] w-[18%] fixed;

  & > div {
    @apply h-full w-full overflow-auto;

    .video_s_m_top {
      @apply bg-white m-auto text-center mb-2 w-[97%];
      @apply rounded shadow;

      & > div {
        p {
          @apply m-1 text-base py-4 px-2;
        }
      }
    }

    .video_sidebar_count {
      @apply cursor-pointer m-auto mb-2 p-1 w-[97%];
      @apply bg-white rounded shadow;

      .sn-list8-1 {
        color: #1b1e21;

        @apply cursor-pointer font-semibold bg-gray-200 m-1 text-sm p-1;
      }

      .sn-list8-2 {
        @apply m-2 text-sm;

        .sn-list8-2-1 {
          .sn-list8-2-1-1 {
            @apply p-1 w-[35%];
          }

          .sn-list8-2-1-2 {
            @apply p-1 w-[35%];
          }
        }
      }
    }
  }

  .video_sidebar_main::-webkit-scrollbar {
    display: none;
  }
}

@screen<xp {
  .video_sidebar {
    @apply top-[11%];
  }
}
</style>
