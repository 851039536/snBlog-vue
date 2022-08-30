<template>
  <div id="sidebar">
    <div id="sidebar-main">
      <div class="sidebar-describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <!--内容框-->
      <div class="sidebar-itme">
        <div class="sidebar-itme-1">最近添加</div>
        <div class="sidebar-itme-2" v-for="result in state.resultData" :key="result.navId">
          <div class="itme-1">
            {{ result.title }}
            <span>{{ result.type.name }}</span>
          </div>
        </div>
      </div>
      <!--end 内容框 -->

      <!-- 站点信息 -->
      <div class="sidebar-footer">
        <div class="sidebar-f-title">站点信息</div>
        <div class="sidebar-f-content">
          <div class="flex">
            <div class="sidebar-f-content-name">博客:</div>
            <div class="sidebar-f-content-text">{{ state.resultCount }}位</div>
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

  @include excursion($text-height, null, null, $sidebar-r-r);
  @include w-h(20%, 90%);
  @apply ml-3;

  #sidebar-main {
    @include w-h(100%, 100%);

    overflow: auto;

    .sidebar-describe {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply rounded shadow text-center mb-2;

      p {
        @apply m-1 text-base py-4 px-2;
      }
    }

    .sidebar-footer {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply rounded cursor-pointer shadow mb-2 p-1;

      .sidebar-f-title {
        @apply font-semibold bg-gray-200 m-1 text-base p-1;
      }

      .sidebar-f-content {
        @apply m-2 text-base;

        .sidebar-f-content-name {
          @apply p-1;

          width: 35%;
        }

        .sidebar-f-content-text {
          width: 40%;

          @apply p-1;
        }
      }
    }

    .sidebar-itme {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply rounded shadow mb-2 p-1;

      .sidebar-itme-1 {
        @apply font-semibold bg-gray-200 m-1 text-base p-1;
      }

      .sidebar-itme-2 {
        @apply text-base p-1 pl-2 text-gray-600;

        border-bottom: 1px dashed #f1f1f1;

        .itme-1 {
          @apply text-base;
        }
      }
    }
  }

  #sidebar-main::-webkit-scrollbar {
    display: none;
  }
}
</style>
