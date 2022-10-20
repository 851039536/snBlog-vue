<template>
  <div class="cside">
    <div class="cside-main">
      <div class="cside-describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <!--内容框-->
      <div class="cside-itme">
        <div class="cside-itme-1">最近</div>
        <div v-for="result in state.resultData" :key="result.navId" class="cside-itme-2">
          <div class="itme-1">
            {{ result.title }}
            <span>{{ result.type.name }}</span>
          </div>
        </div>
      </div>
      <!--end 内容框 -->

      <!-- 站点信息 -->
      <div class="cside-footer">
        <div class="cside-f-title">站点信息</div>
        <div class="cside-f-content">
          <div class="flex">
            <div class="cside-f-content-name">博客:</div>
            <div class="cside-f-content-text">{{ state.resultCount }}位</div>
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
  await navigation.GetCount(1, '博客圈', true).then((res: any) => {
    state.resultCount = res.data
  })
}
onMounted(async () => {
  await GetAll()
})
</script>
<style lang="scss" scoped>
.cside {
  position: fixed;

  @apply h-[90%] top-[9%] right-[12%] w-[18%];

  .cside-main {
    @apply w-full h-full overflow-auto;

    .cside-describe {
      @apply w-[97%] mb-2 ml-1 bg-white;
      @apply rounded shadow text-center;

      p {
        @apply m-1 text-base py-4 px-2;
      }
    }

    .cside-footer {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply rounded cursor-pointer shadow mb-2 p-1;

      .cside-f-title {
        @apply font-semibold bg-gray-200 m-1 text-base p-1;
      }

      .cside-f-content {
        @apply m-2 text-base;

        .cside-f-content-name {
          @apply p-1;

          width: 35%;
        }

        .cside-f-content-text {
          width: 40%;

          @apply p-1;
        }
      }
    }

    .cside-itme {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply rounded shadow mb-2 p-1;

      .cside-itme-1 {
        @apply font-semibold bg-gray-200 m-1 text-base p-1;
      }

      .cside-itme-2 {
        @apply text-base p-1 pl-2 text-gray-600;

        border-bottom: 1px dashed #f1f1f1;

        .itme-1 {
          @apply text-base;
        }
      }
    }
  }

  .cside-main::-webkit-scrollbar {
    display: none;
  }
}
</style>
