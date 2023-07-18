<script lang="ts" setup>
import { routerId } from '@/utils/route'
import { aData } from '@/views/admin/data'
import { ArticleApi } from '@/api'
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
import { articleData, paging } from '.'

const aRef: any = ref(0)

async function QSum(identity: number, type: string) {
  const count = await ArticleApi.getSum(identity, type)
  paging.count = count.data.data
}
async function QPaging() {
  const data = await ArticleApi.getPaging(
    paging.identity,
    paging.typeStr,
    paging.current,
    paging.pagesize,
    paging.typeStr
  )
  articleData.value = data.data.data
}

function QImageUrl(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}

const cheight = ref(100)

onMounted(async () => {
  ui.uiLeftVisible = true
  ui.uiHeadVisible = true
  await axios.all([await QSum(0, aData.NULL), await QPaging()])
})

async function scrollEvent() {
  const scrollTop = aRef.value.scrollTop
  console.log(scrollTop)
  if (scrollTop) {
    if (scrollTop > cheight.value) {
      console.log('触发加载')
      cheight.value += 300
      paging.pagesize += 4
      await QPaging()
    }
  }
}

const onScroll = (type: string) => {
  const distance = type === 'top' ? 0 : aRef.value.scrollHeight
  nextTick(() => {
    aRef.value.scrollTop = distance
  })
}
const throttle = (fn: Function, delay: number) => {
  let timer: any | null = null
  return (...args: any[]) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args)
        timer = null
      }, delay)
    }
  }
}
const onScrollNext = throttle((type: number) => {
  aRef.value.scrollTop += type
}, 100)
const onScrollUp = throttle((type: number) => {
  aRef.value.scrollTop -= type
}, 100)
</script>

<template>
  <section ref="aRef" class="article-columns" @scroll="scrollEvent">
    <article-column-top></article-column-top>
    <div v-for="r in articleData" :key="r.id" class="article-column">
      <div class="content">
        <div class="cont-img">
          <img v-lazy="QImageUrl(r.img)" alt="" />
        </div>
        <div class="content-frame">
          <div class="content-div-frame-1" @click="routerId('/article/content', r.id)">
            {{ r.name }}
          </div>
          <div class="content-div-frame-2">{{ r.sketch }}</div>
          <div class="content-div-frame-3">
            <span class="bg-teal-200">{{ r.user.nickname }}</span>
            <span class="bg-sky-200">{{ r.type.name }}</span>
            <span class="bg-red-200">{{ r.tag.name }}</span>
            <span class="bg-yellow-200">{{ r.read }} ℃</span>
            <span class="bg-teal-200">赞 {{ r.give }}</span>
            <span class="bg-red-100">{{ r.timeCreate.substring(0, 10) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div text="cool-gray-400 center" class="mb-20 mt-2 m-1">数据加载完毕 ^</div>
    ,
    <div fixed class="btn">
      <button @click="onScroll('top')">顶部</button>
      <button @click="onScroll('bottom')">底部</button>
      <button @click="onScrollNext(400)">下滑</button>
      <button @click="onScrollUp(400)">上划</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.article-columns {
  @apply h-[92.78vh] overflow-y-scroll;

  scroll-behavior: smooth;
}

.btn {
  @apply right-75 bottom-1 cursor-pointer z-1;

  button {
    @apply bg-white border-none px-3 mr-1px py-1;
    @apply rounded shadow;
    @apply hover:text-red-500;
  }
}

.article-column {
  @apply mt-1;

  .content {
    @apply flex h-155px w-full mb-6px;
    @apply bg-white rounded-lg shadow-sm;

    .cont-img {
      @apply h-full p-1 w-[25%];

      img {
        @apply h-full w-full rounded;
      }
    }

    .content-frame {
      @apply h-full w-[75%];

      .content-div-frame-1 {
        @apply cursor-pointer m-1 text-xl font-medium px-1;
        @apply rounded transition duration-800 hover:text-blue-400;
        @include line-one;
      }

      .content-div-frame-2 {
        @apply h-[49%] m-1 px-2 mt-2;
        @apply text-base text-cool-gray-500;
        @include line-numbers(2);
      }

      .content-div-frame-3 {
        @apply m-1 mt-2 px-1 text-cool-gray-600;

        span {
          @apply px-1 py-2px mx-2px cursor-pointer rounded text-sm;
          @apply hover:text-white hover:bg-blue-400;
        }
      }
    }
  }
}
</style>
