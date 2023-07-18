<script lang="ts" setup>
import { NavigationApi } from '@/api'
import { IPaging, INav } from '@/api/data/InterData'
import { winUrl } from '@/utils/route'

const sum = ref(0)
onMounted(async () => {
  sum.value = await (await NavigationApi.getCount(1, '博客圈', true)).data
})

const paging: IPaging = reactive({
  page: 1,
  pagesize: 18,
  count: 0,
  current: 1
})
const navData = ref([] as INav[])
const rTitle = ref('博客圈')
async function currentchange(val: number) {
  paging.current = val
  navData.value = await (
    await NavigationApi.getPaging(1, rTitle.value, val, paging.pagesize as number, 'id', true, true)
  ).data
}
function QImageUrl(name: string) {
  return new URL(`/src/assets/img/navigation/${name}`, import.meta.url).href
}
onMounted(async () => {
  navData.value = await (
    await NavigationApi.getPaging(1, rTitle.value, paging.page as number, paging.pagesize as number, 'id', true, true)
  ).data
  paging.count = await (await NavigationApi.getCount(1, rTitle.value, true)).data
})
</script>
<template>
  <div class="blog-circles">
    <div class="mx-5 rounded bg-white p-1 text-base">博客:{{ sum }}</div>
    <div class="circles-content xp:grid-cols-3 grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div v-for="ret in navData" :key="ret.id" class="circles-1">
        <div class="circles-1-1">
          <img v-lazy="QImageUrl(ret.img)" alt="err" />
        </div>
        <div class="circles-1-2">
          <div class="circles-1-2-1">
            <span @click="winUrl(ret.url)">{{ ret.title }}</span>
          </div>
          <div class="circles-1-2-2">
            {{ ret.describe }}
          </div>
        </div>
      </div>
    </div>

    <div class="circles-page">
      <a-pagination
        size="small"
        :total="paging.count"
        :page-size="paging.pagesize"
        show-quick-jumper
        @change="currentchange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-circles {
  @apply mt-1 bg-white rounded;

  // 导航窗体小
  .circles-1 {
    @include w-h(90%, 120px);
    @apply m-auto mb-3 mt-6px shadow-sm;

    .circles-1-1 {
      @include w-h(42%, 99%);
      @apply float-left;

      img {
        @include w-h(100%, 100%);
        @apply rounded;
      }
    }

    .circles-1-2 {
      @apply float-right bg-white;
      @include w-h(58%, 100%);

      .circles-1-2-1 {
        @apply text-lg p-1 font-medium m-1 cursor-pointer hover:text-blue-400;
        @include line-one;
      }

      .circles-1-2-2 {
        height: 47px;

        @apply m-1 mt-2 text-cool-gray-500;
        @include line-numbers(2);
      }
    }
  }

  .circles-content {
    @include w-h(100%, 100%);
    @apply bg-gray-100;
  }

  .circles-content::-webkit-scrollbar {
    display: none;
  }

  .circles-page {
    @apply p-1 mx-2 mt-1;
  }
}
</style>
