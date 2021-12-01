<script lang="ts" setup>
import { ref } from 'vue'
import { video } from '@/api'

const state = ref(0)

video.GetCountAsync(0, '0', true).then((res: any) => {
  state.value = res.data
})
</script>

<template>
  <div class="video_sidebar">
    <div class="video_sidebar_main">
      <!-- 标签头部 -->
      <div class="video_s_m_top">
        <div class="video_s_m_top_title">
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
  @apply fixed ml-3;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20%, 90%);

  color: #888;
  font-size: 17px;

  .video_sidebar_main {
    @apply overflow-auto w-full h-full;

    .video_s_m_top {
      width: 97%;

      @apply mb-2 m-auto text-center bg-white;
      @apply shadow rounded;

      .video_s_m_top_title {
        p {
          @apply text-sm px-2 py-4 m-1;
        }
      }
    }

    .video_sidebar_count {
      width: 97%;

      @apply p-1 mb-2 m-auto cursor-pointer;
      @apply shadow rounded bg-white;

      .sn-list8-1 {
        color: #1b1e21;

        @apply p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer;
      }

      .sn-list8-2 {
        @apply text-sm m-2;

        .sn-list8-2-1 {
          .sn-list8-2-1-1 {
            @apply p-1;

            width: 35%;
          }

          .sn-list8-2-1-2 {
            width: 40%;

            @apply p-1;
          }
        }
      }
    }
  }

  .video_sidebar_main::-webkit-scrollbar {
    display: none;
  }
}

@screen xp {
  .video_sidebar {
    @apply hidden;
  }
}
</style>
