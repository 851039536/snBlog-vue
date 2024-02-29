<script lang="ts" setup>
import { aData } from '@views/admin/data'
import { uiSettings } from '@store/modules/uiSettings'
import { useRouter } from '@hooks/useRouter'
import { articleData, paging } from './index'
import { useApi } from '@/api/useApi'

const { ArticleApi } = useApi()
const { routerById } = useRouter()
const ui = uiSettings()

async function QSum(identity: number, type: string) {
  const count = await ArticleApi.getSum(identity, type)
  paging.count = count.data.data
}
async function QPaging() {
  const ret = await ArticleApi.getPaging(
    paging.identity,
    paging.typeStr,
    paging.current,
    paging.pagesize,
    paging.typeStr
  )
  articleData.value = ret.data.data
}

function QImageUrl(name: string) {
  return new URL(`http://kai.snblogs.cn/blog/article/${name}`)
}

const cheight = ref(100)

onMounted(async () => {
  ui.leftSidebar = true
  ui.header = true
  await axios.all([await QSum(0, aData.NULL), await QPaging()])
})
const aRef: any = ref(0)
async function scrollEvent() {
  const scrollTop = aRef.value.scrollTop
  if (scrollTop) {
    if (scrollTop > cheight.value) {
      cheight.value += 300
      paging.pagesize += 4
      await QPaging()
    }
  }
}

const onScroll = (name: string) => {
  const distance = name === 'top' ? 0 : aRef.value.scrollHeight
  nextTick(() => {
    aRef.value.scrollTop = distance
  })
}
</script>
<template>
  <section ref="aRef" class="article-columns" @scroll="scrollEvent">
    <article-column-top></article-column-top>
    <div v-for="r in articleData" :key="r.id" class="article-column">
      <div class="content">
        <div class="cont-img">
          <img v-lazy="QImageUrl(r.img)" alt="test" />
        </div>
        <div class="content-frame">
          <div class="content-div-frame-1" @click="routerById('/article/content', r.id)">
            {{ r.name }}
          </div>
          <div class="content-div-frame-2">{{ r.sketch }}</div>
          <div class="content-div-frame-3">
            <span class="bg-emerald-100">{{ r.user!.nickname }}</span>
            <span class="text-gray-300">|</span>
            <span class="bg-sky-200">{{ r.type!.name }}</span>
            <span class="bg-red-200">{{ r.tag!.name }}</span>
            <span class="bg-yellow-200">{{ r.read }} ℃</span>
            <span class="bg-teal-200">赞 {{ r.give }}</span>
            <span class="bg-red-100">{{ r.timeCreate.substring(0, 10) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div text="cool-gray-400 center" class="mb-20 mt-2 m-1">数据加载完毕 ^</div>
    <div class="btn">
      <div i-typcn-arrow-sorted-up h-6 w-7 @click="onScroll('top')"></div>
      <div i-typcn-arrow-sorted-down h-6 w-7 @click="onScroll('bottom')"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.article-columns {
  @apply h-[92.58vh] overflow-y-scroll;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .btn {
    @apply absolute right-[10%] rounded bottom-[2%] cursor-pointer z-1 bg-white;

    div {
      @apply mb-1px p-2px hover:text-blue-400;
    }
  }
}

.article-column {
  @apply mt-1 mx-2;

  .content {
    @apply flex h-145px mb-2px m-auto;
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
        @include truncation;
      }

      .content-div-frame-2 {
        @apply h-[49%] m-1 px-2 mt-2;
        @apply text-base text-cool-gray-500;
        @include line-numbers(2);
      }

      .content-div-frame-3 {
        @apply m-1 mt-2 px-1px text-cool-gray-600;

        span {
          @apply px-1 py-2px mx-2px cursor-pointer rounded text-sm;
          @apply hover:text-white hover:bg-blue-400;
        }
      }
    }
  }
}
</style>
