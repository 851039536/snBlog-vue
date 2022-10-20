<script lang="ts" setup>
import { method } from '../data/index'
import { routerId } from '@/hooks/routers'
// import { tool } from '@/utils/common/tool'
import { state } from '../data/data'

function getImageUrl(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}
// async function currentchange(val: number) {
//   state.current = val

//   await method.GetFy()
//   tool.BackTop()
// }

const handleInfiniteOnLoad = async () => {
  // 异步加载数据等逻辑
  if (scrollDisabled.value) {
    // 数据加载完毕
  } else {
    // 加载数据列表
    state.pagesize += 8
    await method.GetFy()
  }
}
const scrollDisabled = computed(() => {
  return state.resData.length >= state.count
})

onMounted(async () => {
  await method.GetCount(0, 'null')
  await method.GetFy()
})
</script>

<template>
  <section
    v-infinite-scroll="handleInfiniteOnLoad"
    :infinite-scroll-immediate-check="false"
    :infinite-scroll-disabled="scrollDisabled"
    infinite-scroll-watch-disabled="scrollDisabled"
    :infinite-scroll-distance="20">
    <div v-for="res in state.resData" :key="res.id" class="blogs">
      <div class="blogs-cont">
        <div class="blogs-cont-img">
          <img v-lazy="getImageUrl(res.img)" />
        </div>
        <div class="blogs-cont-frame">
          <p class="blogs-div-frame-1">
            <span @click="routerId('/index/content', res.id)">{{ res.title }}</span>
          </p>
          <p class="blogs-div-frame-2">{{ res.sketch }}</p>
          <div class="blogs-div-frame-3">
            <span class="bg-red-100">{{ res.label.name }}</span>
            <span class="bg-sky-100">{{ res.sort.name }}</span>
            <span class="bg-yellow-100">{{ res.read }} ℃</span>
            <span class="bg-teal-100">赞 {{ res.give }}</span>
            <span class="bg-purple-200">{{ res.timeCreate.substring(0, 10) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="scrollDisabled">数据加载完毕</div>
    <!-- <div class="blogs-page">
      <a-pagination
        size="small"
        :total="state.count"
        :page-size="state.pagesize"
        :current="state.current"
        show-quick-jumper
        @change="currentchange"></a-pagination>
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
.blogs {
  .blogs-cont {
    @apply flex h-155px mt-10px w-full;
    @apply bg-white rounded shadow;

    .blogs-cont-img {
      @apply h-full p-1 w-[25%];

      img {
        @apply h-full w-full;
      }
    }

    .blogs-cont-frame {
      @apply h-full w-[75%];

      .blogs-div-frame-1 {
        @apply cursor-pointer m-1 text-xl px-1 hover:text-blue-400;
        @include line-one;
      }

      .blogs-div-frame-2 {
        @apply h-[51%] m-1 px-2 mt-2;
        @apply text-sm;

        color: rgb(109 104 104);

        @include line-numbers(3);
      }

      .blogs-div-frame-3 {
        @apply m-1 mt-2 px-1;

        color: #666;

        span {
          @apply p-1 mx-1 cursor-pointer rounded;
          @apply hover:bg-light-blue-400;
        }
      }
    }
  }
}

.blogs-page {
  @apply bg-white mt-1 shadow w-full py-5;
}
</style>
