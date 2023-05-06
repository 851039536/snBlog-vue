<script lang="ts" setup>
import { NavigationApi } from '@/api'
import { IFy, INav } from '@/api/data/InterData'
import { winUrl } from '@/utils/route'

const paging: IFy = reactive({
  page: 1,
  pagesize: 18,
  count: 0,
  current: 1
})
const rNav = ref([] as INav[])
const rTitle = ref('博客圈')
async function currentchange(val: number) {
  paging.current = val
  rNav.value = await (await NavigationApi.getPaging(1, rTitle.value, val, paging.pagesize, 'id', true, true)).data
}

onMounted(async () => {
  rNav.value = await (
    await NavigationApi.getPaging(1, rTitle.value, paging.page, paging.pagesize, 'id', true, true)
  ).data
  paging.count = await (await NavigationApi.getCount(1, rTitle.value, true)).data
})
</script>
<template>
  <div class="circles">
    <blog-circles-side></blog-circles-side>
    <div class="circles-main">
      <div class="mx-3 flex items-center text-base">
        <div i-flat-color-icons-idea mr-1 h-5 w-5></div>
        博客导航
      </div>
      <div class="circles-content xp:grid-cols-3 grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div v-for="res in rNav" :key="res.id" class="circles-1">
          <div class="circles-1-1">
            <img v-lazy="res.img" onerror="this.style.display='none'" />
            <!-- <img v-lazy="getImageUrl(res.img)" /> -->
          </div>
          <div class="circles-1-2">
            <div class="circles-1-2-1">
              <span @click="winUrl(res.url)">{{ res.title }}</span>
            </div>
            <div class="circles-1-2-2">
              {{ res.describe }}
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
  </div>
</template>

<style lang="scss" scoped>
.circles {
  // @apply relative;

  .circles-main {
    // @apply mt-[4.3%] ml-[22%] w-[47%];

    // @apply rounded-sm shadow;

    // 导航窗体小
    .circles-1 {
      @include w-h(98%, 110px);
      @apply bg-white rounded m-1 shadow-sm hover: bg-gray-50;

      .circles-1-1 {
        @include w-h(40%, 99%);
        @apply p-1 float-left;

        img {
          @include w-h(100%, 100%);
          @apply rounded bg-gray-300;
        }
      }

      .circles-1-2 {
        @apply float-right;
        @include w-h(60%, 100%);

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

      overflow: auto;
    }

    .circles-content::-webkit-scrollbar {
      display: none;
    }

    .circles-page {
      @apply bg-white  p-1 mx-2 mb-50;
    }
  }
}
</style>
