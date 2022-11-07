<template>
  <div class="side">
    <div class="side-main">
      <div class="side-describe">
        <p>各式各样网站收集分享</p>
      </div>
      <!--内容框-->
      <div class="side-itme">
        <div class="side-itme-1">最近新增</div>
        <div v-for="res in rNav" :key="res.id" class="side-itme-2">
          <div class="itme-1">
            {{ res.title }}
            <!-- <span>{{ res.type.name }}</span> -->
          </div>
        </div>
      </div>

      <div class="side-ft">
        <div class="side-f-title">站点信息</div>
        <div class="side-f-content">
          <div class="flex">
            <div class="side-f-content-name">博客:</div>
            <div class="side-f-content-text">{{ rCount }}位</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { INav } from '@/api/data/interData'
import { navigationApi } from '@/api/index'

const rNav = ref([] as INav[])
const rCount = ref(0)
onMounted(async () => {
  rNav.value = await (await navigationApi.GetFyAsync(1, '博客圈', 1, 18, 'id', true, true)).data
  rCount.value = await (await navigationApi.GetCount(1, '博客圈', true)).data
})
</script>
<style lang="scss" scoped>
.side {
  position: fixed;

  @apply h-[90%] top-[9%] right-[12%] w-[18%];

  .side-main {
    @apply w-full h-full overflow-auto;

    .side-describe {
      @apply w-[97%] mb-2 ml-1 bg-white;
      @apply rounded shadow text-center;

      p {
        @apply m-1 text-base py-4 px-2;
      }
    }

    .side-ft {
      @apply w-[97%] mb-2 p-1 m-auto;
      @apply bg-white rounded cursor-pointer shadow;

      .side-f-title {
        @apply font-semibold m-1 text-base p-1;
        @apply bg-green-300;
      }

      .side-f-content {
        @apply m-2 text-base;

        .side-f-content-name {
          @apply p-1;

          width: 35%;
        }

        .side-f-content-text {
          width: 40%;

          @apply p-1;
        }
      }
    }

    .side-itme {
      @apply w-[97%] m-auto rounded shadow mb-2 p-1 bg-white;

      .side-itme-1 {
        @apply font-semibold bg-blue-300 m-1 text-base p-1;
      }

      .side-itme-2 {
        @apply text-base p-1 pl-2 text-gray-600;

        border-bottom: 1px dashed #f1f1f1;

        .itme-1 {
          @apply text-base;
        }
      }
    }
  }

  .side-main::-webkit-scrollbar {
    display: none;
  }
}
</style>
