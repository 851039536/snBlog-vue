<script lang="ts" setup>
import { useNavigationApi, useNavigationTypeApi } from '@/hooks/http'
import { useRouter } from '@hooks/useRouter'
import { Navigation } from '@api/model/Navigation'
import { uiSettings } from '@/store/modules/uiSettings'
const { winUrl } = useRouter()
const ui = uiSettings()
const { getPaging: navigationPaging, getSum } = useNavigationApi()
const { getAll: navigationType } = useNavigationTypeApi()
const paging = reactive({
  page: 1,
  pagesize: 24,
  count: 0,
  name: '',
  current: 1
})
const rNavTable = ref([] as Navigation[])
const rNav = ref([] as Navigation[])
async function currentchange(val: number) {
  paging.current = val
  rNav.value = await (await navigationPaging(1, paging.name, val, paging.pagesize)).data.data
}

async function GetApi(name: string) {
  paging.current = 1
  paging.name = name
  paging.count = await (await getSum(1, paging.name, true)).data.data
  rNav.value = await (await navigationPaging(1, name, paging.page, paging.pagesize)).data.data
}

async function clkApi(name: string) {
  await GetApi(name)
}
onMounted(async () => {
  ui.rightSidebar = false
  await GetApi('常用工具')
  //读取侧边栏信息
  rNavTable.value = await (await navigationType(true)).data.data
})
</script>

<template>
  <section>
    <div class="favorite">
      <div class="relative flex">
        <div class="favorite-onecategory">
          <div v-for="r in rNavTable" :key="r.id" class="m-2px inline-flex">
            <n-button size="small" @click="clkApi(r.name)">{{ r.name }}</n-button>
          </div>
        </div>
      </div>
      <div class="favorite-content">
        <div v-for="ret in rNav" :key="ret.id" class="fa-cont-list">
          <div class="fa-cont-list1">
            <div @click="winUrl(ret.url)">{{ ret.name }}</div>
          </div>
          <div class="fa-cont-list2">{{ ret.describe }}</div>
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
  @apply bg-gray-100 mt-1;

  .favorite-content {
    @apply h-full w-full;
    @apply grid grid-cols-5;

    .fa-cont-list {
      @apply m-auto mt-2 w-[92%] h-120px;
      @apply rounded-md shadow-sm bg-white hover:bg-red-50;

      .fa-cont-list1 {
        @apply p-2 h-9;
        @apply text-gray-900 cursor-pointer text-base  hover:text-blue-600;
        @include line-numbers(1);
      }

      .fa-cont-list2 {
        @apply text-sm p-2 h-72px bg-gray-50 mx-1;
        @include line-numbers(3);
      }
    }
  }

  .favorite-paging {
    @apply p-2 m-2 mb-50;
  }
}

.favorite-onecategory {
  @apply bg-white p-1 shadow-current rounded;
}
</style>
