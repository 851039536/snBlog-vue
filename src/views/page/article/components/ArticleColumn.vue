<script lang="ts" setup>
import { routerId } from '@/hooks/routers'
import { aData } from '@/views/admin/data'
import { articleApi } from '@/api'
import { hHead, hSide } from '@/hooks/data'
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()

const rArticle: any = ref([])
const state = reactive({
  page: 1,
  pagesize: 6,
  count: 0,
  identity: 0,
  typeStr: 'null',
  current: 1
})

async function GetSum(identity: number, type: string) {
  state.count = await (await articleApi.GetSum(identity, type, true)).data
}
async function QPaging() {
  rArticle.value = await (
    await articleApi.GetPaging(state.identity, state.typeStr, state.current, state.pagesize, 'id', true, true)
  ).data
}

function QImageUrl(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}
const scDisabled = computed(() => {
  return rArticle.value.length <= state.count
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
        state.pagesize += 3
        await QPaging()
      }
    }
  },
  { deep: true }
)
onMounted(async () => {
  hSide.value = true
  hHead.value = true
  await axios.all([await GetSum(0, aData.NULL), await QPaging()])
  window.onresize = function () {
    console.log('宽度', document.documentElement.clientWidth)
    console.log('高度', document.documentElement.clientHeight)
  }
})
</script>

<template>
  <section>
    <div class="bg-white rounded-lg cursor-pointer flex">
      <div class="p-1 hover:text-blue-400">热门</div>
      <div class="p-1 hover:text-blue-400">最新</div>
      <div class="p-1 hover:text-blue-400">最新</div>
    </div>
    <div v-for="r in rArticle" :key="r.id" class="blog">
      <div class="blog-cont">
        <div class="blog-cont-img">
          <img v-lazy="QImageUrl(r.img)" />
        </div>
        <div class="blog-cont-frame">
          <div class="blog-div-frame-1" @click="routerId('/article/content', r.id)">
            {{ r.name }}
          </div>
          <div class="blog-div-frame-2">{{ r.sketch }}</div>
          <div class="blog-div-frame-3">
            <span class="bg-red-100">{{ r.tag.name }}</span>
            <span class="bg-sky-100">{{ r.type.name }}</span>
            <span class="bg-yellow-100">{{ r.read }} ℃</span>
            <span class="bg-teal-100">赞 {{ r.give }}</span>
            <span class="bg-teal-200">{{ r.user.nickname }}</span>
            <span class="bg-red-50">{{ r.timeCreate.substring(0, 10) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="scDisabled" class="text-center mt-2 mb-10 m-1 text-cool-gray-400">数据加载完毕 ^</div>
  </section>
</template>

<style lang="scss" scoped>
.blog {
  .blog-cont {
    @apply flex h-155px mt-2 w-full;
    @apply bg-white rounded-lg shadow-sm;

    .blog-cont-img {
      @apply h-full p-1 w-[25%];

      img {
        @apply h-full w-full rounded;
      }
    }

    .blog-cont-frame {
      @apply h-full w-[75%];

      .blog-div-frame-1 {
        @apply cursor-pointer m-1 text-xl font-medium px-1;
        @apply rounded transition duration-800 hover:text-blue-400;
        @include line-one;
      }

      .blog-div-frame-2 {
        @apply h-[49%] m-1 px-2 mt-2;
        @apply text-base text-cool-gray-500;
        @include line-numbers(2);
      }

      .blog-div-frame-3 {
        @apply m-1 mt-2 px-1 text-cool-gray-500;

        span {
          @apply px-1 py-2px mx-2px cursor-pointer rounded;
          @apply hover:bg-light-blue-100;
        }
      }
    }
  }
}

.blog-page {
  @apply bg-white mt-1 shadow w-full py-5;
}
</style>
