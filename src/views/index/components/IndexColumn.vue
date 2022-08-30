<script lang="ts" setup>
import { method } from '../data/index'
import { routerId } from '@/hooks/routers'
import { tool } from '@/utils/common/tool'
import { state } from '../data/data'

function getImageUrl(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}
async function currentchange(val: number) {
  state.current = val
  await method.GetFy()
  tool.BackTop()
}

onMounted(async () => {
  await method.GetCount(0, 'null')
  await method.GetFy()
})
</script>

<template>
  <section>
    <div class="blogs" v-for="res in state.resData" :key="res.id">
      <div class="blogs-div">
        <div class="blogs-div-img">
          <img v-lazy="getImageUrl(res.img)" />
        </div>
        <div class="blogs-div-frame">
          <p class="blogs-div-frame-1">
            <span @click="routerId('/index/content', res.id)">{{  res.title  }}</span>
          </p>
          <p class="blogs-div-frame-2">{{  res.sketch  }}</p>
          <p class="blogs-div-frame-3">
            <span>文章</span>
            <span>{{  res.read  }} ℃</span>
            <span>赞 {{  res.give  }}</span>
            <span>{{  res.timeCreate.substring(0, 10)  }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="blogs-page">
      <a-pagination size="small" @change="currentchange" :total="state.count" :pageSize="state.pagesize"
        :current="state.current" show-quick-jumper></a-pagination>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blogs {
  .blogs-div {
    @apply flex h-155px mt-10px w-full;
    @apply bg-white rounded shadow hover: bg-gray-50 ;

    .blogs-div-img {
      @apply h-full p-2 w-[25%];

      img {
        @apply h-full w-full;
      }
    }

    .blogs-div-frame {
      @apply h-full w-[75%];

      .blogs-div-frame-1 {
        @apply cursor-pointer m-1 text-xl px-1;
        @include line-one;
      }

      .blogs-div-frame-2 {
        @apply h-[52%] m-1 p-1 px-2;
        @apply font-light text-sm;
        @include line-numbers(4);
      }

      .blogs-div-frame-3 {
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
