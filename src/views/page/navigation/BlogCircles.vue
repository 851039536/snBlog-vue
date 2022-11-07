<script lang="ts" setup>
import { navigationApi } from '@/api'
import { IFy, INav } from '@/api/data/interData'
import { winUrl } from '@/hooks/routers'

const rData: IFy = reactive({
  page: 1,
  pagesize: 21,
  count: 0,
  current: 1
})

const rNav = ref([] as INav[])
const rTitle = ref('博客圈')
async function currentchange(val: number) {
  rData.current = val
  rNav.value = await (await navigationApi.GetFyAsync(1, rTitle.value, val, rData.pagesize, 'id', true, true)).data
}

onMounted(async () => {
  rNav.value = await (
    await navigationApi.GetFyAsync(1, rTitle.value, rData.page, rData.pagesize, 'id', true, true)
  ).data
  rData.count = await (await navigationApi.GetCount(1, rTitle.value, true)).data
})
</script>
<template>
  <div class="circles">
    <s-header></s-header>
    <l-sidebar></l-sidebar>
    <blog-circles-side></blog-circles-side>
    <div class="circles-main">
      <div class="grid circles-content sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xp:grid-cols-3 2xl:grid-cols-3">
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
          :total="rData.count"
          :page-size="rData.pagesize"
          show-quick-jumper
          @change="currentchange" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circles {
  @apply s-hw relative;

  .circles-main {
    @apply mt-[4.3%] ml-[22%] w-[47%];

    // @apply rounded-sm shadow;

    // 导航窗体小
    .circles-1 {
      @include w-h(95%, 115px);
      @apply bg-white rounded m-2 shadow hover: bg-gray-50;

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
          @apply text-lg p-1 m-1 hover: text-blue-400 cursor-pointer;
          @include line-one;
        }

        .circles-1-2-2 {
          height: 47px;

          @apply m-1 mt-2 text-base font-light;
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
      @apply bg-white shadow p-1 mx-2 mb-50;
    }
  }
}
</style>
