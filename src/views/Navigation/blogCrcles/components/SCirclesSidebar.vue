<template>
  <div id="sidebar">
    <div id="sidebar_main">
      <div class="sidebar_describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <!--内容框-->
      <div class="sidebar_itme">
        <div class="sidebar_itme_1">最近添加</div>
        <div class="sidebar_itme_2" v-for="result in state.resultData" :key="result.navId">
          <div class="itme_1">
            {{ result.title }}
            <span>{{ result.type.name }}</span>
          </div>
        </div>
      </div>
      <!--end 内容框 -->

      <!-- 站点信息 -->
      <div class="sidebar_footer">
        <div class="sidebar_f_title">站点信息</div>
        <div class="sidebar_f_content">
          <div class="flex">
            <div class="sidebar_f_content_name">博客:</div>
            <div class="sidebar_f_content_text">{{ state.resultCount }}位</div>
          </div>
        </div>
      </div>
      <!-- end 站点信息 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { navigation } from '@/api/index'

interface State {
  resultData: any
  resultCount: string
}
const state: State = reactive({
  resultData: [],
  resultCount: ''
})
const GetAll = async () => {
  await navigation.GetFyAsync(1, '博客圈', 1, 10, 'id', true, true).then((res: any) => {
    state.resultData = res.data
  })
  await navigation.GetCountAsync(1, '博客圈', true).then((res: any) => {
    state.resultCount = res.data
  })
}
onMounted(async () => {
  await GetAll()
})
</script>
<style lang="scss" scoped>
#sidebar {
  position: fixed;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20%, 90%);

  @apply ml-3;

  #sidebar_main {
    @include w-h(100%, 100%);

    overflow: auto;
    .sidebar_describe {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);

      @apply mb-2  shadow rounded text-center;

      p {
        @apply text-base px-2 py-4 m-1;
      }
    }

    .sidebar_footer {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);

      @apply p-1 mb-2 cursor-pointer shadow rounded;

      .sidebar_f_title {
        @apply p-1 m-1 text-base font-semibold bg-gray-200;
      }

      .sidebar_f_content {
        @apply text-base m-2;

        .sidebar_f_content_name {
          @apply p-1;
          width: 35%;
        }

        .sidebar_f_content_text {
          width: 40%;
          @apply p-1;
        }
      }
    }

    .sidebar_itme {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply p-1 mb-2  shadow rounded;

      .sidebar_itme_1 {
        @apply p-1 m-1 text-base font-semibold bg-gray-200;
      }

      .sidebar_itme_2 {
        @apply m-1 cursor-pointer bg-gray-100;
        div {
          @apply p-2 text-gray-600;
        }

        .itme_1 {
          @apply text-base;
        }
      }
    }
  }

  #sidebar_main::-webkit-scrollbar {
    display: none;
  }
}
</style>
