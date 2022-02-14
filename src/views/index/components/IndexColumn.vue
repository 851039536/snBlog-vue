<script lang="ts" setup>
import { state, method } from '../data/column'
import { RouterId } from '@/hooks/routers'
import { tool } from '@/utils/common/tool'

function getImageUrl(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}
async function currentchange(val: number) {
  state.page = val
  await method.GetFy()
  tool.BackTop()
}
method.GetCount()
method.GetFy()
</script>

<template>
  <section>
    <div class="blogs-content" v-for="res in state.resultData" :key="res.id">
      <div class="blogs-content_div">
        <div class="blogs-content_img">
          <img v-lazy="getImageUrl(res.img)" />
        </div>
        <div class="blogs-content__frame">
          <p class="blogs-content__frame-1">
            <a @click="RouterId('/index/content', res.id)">{{ res.title }}</a>
          </p>
          <p class="blogs-content__frame-2">{{ res.sketch }}</p>
          <p class="blogs-content__frame-3">
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
        @change="currentchange"
        :total="state.count"
        :pageSize="state.pagesize"
        show-quick-jumper
      ></a-pagination>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blogs-content {
  @apply m-2;

  .blogs-content_div {
    @apply flex;

    @include initialize(100%, 155px, 10px, null, null, null, #ffffff);

    @apply rounded-sm  shadow hover:bg-gray-50;

    .blogs-content_img {
      @include w-h(25%, 100%);

      @apply p-2;

      img {
        @include w-h;
      }
    }

    .blogs-content__frame {
      @include w-h(75%, 100%);

      .blogs-content__frame-1 {
        @apply cursor-pointer m-1 text-lg px-1;

        @include line-one;
      }

      .blogs-content__frame-2 {
        @apply h-[52%] m-1 p-1 px-2;
        @apply font-light text-sm;
        @include line-numbers(4);
      }

      .blogs-content__frame-3 {
        @apply font-light m-1 px-1;

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
