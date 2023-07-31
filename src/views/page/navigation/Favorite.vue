<script lang="ts" setup>
import { NavigationApi } from '@/api'
import { aData } from '@/views/admin/data'
import { INav } from '@/api/data/InterData'
import { useRouter } from '@hooks/useRouter'
const { winUrl } = useRouter()

const paging = reactive({
  page: 1,
  pagesize: 28,
  count: 0,
  name: '',
  current: 1
})
const sum = ref(0)
const rnavTable = ref([] as INav[])
const rNav = ref([] as INav[])
async function currentchange(val: number) {
  paging.current = val
  rNav.value = await (await NavigationApi.getPaging(1, paging.name, val, paging.pagesize, 'id', true, true)).data
}

async function GetApi(name: string) {
  paging.current = 1
  paging.name = name
  paging.count = await (await NavigationApi.getCount(1, paging.name, true)).data
  rNav.value = await (await NavigationApi.getPaging(1, name, paging.page, paging.pagesize, 'id', true, true)).data
}

async function clkApi(name: string) {
  await GetApi(name)
}
onMounted(async () => {
  await GetApi('文档')
  //读取侧边栏信息
  sum.value = await (await NavigationApi.getCount(0, aData.NULL, true)).data
  rnavTable.value = await (await NavigationApi.getNavTypeAll(true)).data
})
</script>

<template>
  <section>
    <div class="favorite">
      <div class="relative flex">
        <div class="favorite-onecategory">
          <div class="onecategory-name">列表</div>
          <div v-for="r in rnavTable" :key="r.id" class="inline-flex">
            <div class="flex rounded p-1px text-base m-1 hover:bg-blue-500">
              <span @click="clkApi(r.title)">{{ r.title }}</span>
            </div>
          </div>
        </div>

        <div class="footer-content">{{ sum }}篇</div>
      </div>
      <div class="favorite-content">
        <div v-for="r in rNav" :key="r.id" class="fa-cont-list">
          <div class="fa-cont-list1">
            <div @click="winUrl(r.url)">{{ r.title }}</div>
          </div>
          <div class="fa-cont-list2">{{ r.describe }}</div>
        </div>
      </div>

      <div class="favorite-paging">
        <a-pagination
          size="small"
          :total="paging.count"
          :page-size="paging.pagesize"
          :current="paging.current"
          show-quick-jumper
          @change="currentchange" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.favorite {
  @apply bg-white mt-1;

  .favorite-content {
    @apply h-full w-full;
    @apply grid grid-cols-4;

    .fa-cont-list {
      @apply m-auto mt-8px w-[92%] h-96px;
      @apply rounded  bg-red-50 shadow-sm;

      .fa-cont-list1 {
        @apply bg-white mt-1  pl-1;
        @apply cursor-pointer text-lg  hover:text-blue-400;
        @include line-numbers(1);
      }

      .fa-cont-list2 {
        @apply mx-3 text-cool-gray-600;
        @include line-numbers(2);
      }
    }
  }

  .favorite-paging {
    @apply p-2 m-2 mb-50;
  }
}

.footer-content {
  @apply text-sm  absolute top-1 right-1;
}

.favorite-onecategory {
  @apply bg-white rounded cursor-pointer;

  .onecategory-name {
    @apply text-base px-2;
    @apply font-semibold;
  }
}
</style>
