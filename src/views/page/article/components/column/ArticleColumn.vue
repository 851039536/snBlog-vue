<script lang="ts" setup>
import { routerId } from '@/utils/route'
import { aData } from '@/views/admin/data'
import { ArticleApi } from '@/api'
import { headVisible, sideVisible } from '@/utils/common/visible-data'
import { useWindowScroll } from '@vueuse/core'
import { articleData, paging } from '.'
const { y } = useWindowScroll()

async function getSum(identity: number, type: string) {
  const count = await ArticleApi.getSum(identity, type)
  paging.count = count.data
}
async function QPaging() {
  const data = await ArticleApi.getPaging(
    paging.identity,
    paging.typeStr,
    paging.current,
    paging.pagesize,
    paging.typeStr
  )
  articleData.value = data.data
}

function QImageUrl(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}
const scDisabled = computed(() => {
  return articleData.value.length <= paging.count
})

const cheight = ref(50)

watch(
  () => {
    return [y]
  },
  async () => {
    if (scDisabled.value) {
      if (y.value > cheight.value) {
        console.log('触发加载')
        cheight.value += 400
        paging.pagesize += 3
        await QPaging()
      }
    }
  },
  { deep: true }
)
onMounted(async () => {
  sideVisible.value = true
  headVisible.value = true
  await axios.all([await getSum(0, aData.NULL), await QPaging()])
})
</script>

<template>
  <section>
    <article-column-top></article-column-top>
    <div v-for="r in articleData" :key="r.id" class="article-column">
      <div class="content">
        <div class="cont-img">
          <img v-lazy="QImageUrl(r.img)" />
        </div>
        <div class="content-frame">
          <div class="content-div-frame-1" @click="routerId('/article/content', r.id)">
            {{ r.name }}
          </div>
          <div class="content-div-frame-2">{{ r.sketch }}</div>
          <div class="content-div-frame-3">
            <span class="bg-teal-200">{{ r.user.nickname }}</span>
            <span class="bg-sky-100">{{ r.type.name }}</span>
            <span class="bg-red-100">{{ r.tag.name }}</span>
            <span class="bg-yellow-100">{{ r.read }} ℃</span>
            <span class="bg-teal-100">赞 {{ r.give }}</span>
            <span class="bg-red-50">{{ r.timeCreate.substring(0, 10) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="scDisabled" text="cool-gray-400 center" class="mb-10 mt-2 m-1">数据加载完毕 ^</div>
  </section>
</template>

<style lang="scss" scoped>
.article-column {
  .content {
    @apply flex h-155px mt-2 w-full;
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
        @apply m-1 mt-2 px-1 text-cool-gray-500;

        span {
          @apply px-1 py-2px mx-2px cursor-pointer rounded;
          @apply hover:bg-light-blue-100;
        }
      }
    }
  }
}
</style>
