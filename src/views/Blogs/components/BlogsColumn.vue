<script lang="ts" setup>
import { fyData, method } from '../data/column'
import { routerId } from '@/hooks/routers'
import { tool } from '@/utils/common/tool'

async function currentchange(val: number) {
  fyData.page = val
  await method.GetFy()
  tool.BackTop()
}
function getImageUrl(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}

onMounted(async () => {
  await method.GetFy()
})
</script>

<template>
  <div v-for="res in fyData.resultData" :key="res.id" class="blogs-content">
    <div class="blogs-content-div">
      <div class="blogs-content-img">
        <img v-lazy="getImageUrl(res.img)" />
      </div>
      <div class="blogs-content-frame">
        <p class="blogs-content-frame-1">
          <span @click="routerId('/Blogs/BlogsContent', res.id)">{{ res.title }}</span>
        </p>
        <p class="blogs-content-frame-2">{{ res.sketch }}</p>
        <p class="blogs-content-frame-3">
          <span>文章</span>
          <span>{{ res.read }} ℃</span>
          <span>赞 {{ res.give }}</span>
          <span>{{ res.timeCreate.substring(0, 10) }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="blogs-page">
    <a-pagination
      size="small"
      :total="fyData.count"
      :page-size="fyData.pagesize"
      show-quick-jumper
      @change="currentchange"></a-pagination>
  </div>
  <!-- end 分页 -->
</template>

<style lang="scss" scoped>
.blogs-content {
  .blogs-content-div {
    @apply bg-white flex h-155px mt-10px w-full;
    @apply rounded shadow hover: bg-gray-50;

    .blogs-content-img {
      @apply h-full p-2 w-[25%];

      img {
        @apply h-full w-full;
      }
    }

    .blogs-content-frame {
      @apply h-full w-[75%];

      .blogs-content-frame-1 {
        @apply cursor-pointer m-1 text-xl px-1;
        @include line-one;
      }

      .blogs-content-frame-2 {
        @apply h-[52%] m-1 p-1 px-2;
        @apply font-thin text-sm;
        @include line-numbers(4);
      }

      .blogs-content-frame-3 {
        @apply m-1 px-1;

        span {
          @apply p-1;
        }
      }
    }
  }
}

.blogs-page {
  @apply bg-white rounded shadow w-full py-5;
}
</style>
