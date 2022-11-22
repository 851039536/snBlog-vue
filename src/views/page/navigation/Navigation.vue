<script setup lang="ts">
import { navigationApi } from '@/api/index'
import { winUrl } from '@/hooks/routers'
interface State {
  resultData: any
  page: number
  pagesize: number
  count: number
  current: number
}
const state: State = reactive({
  resultData: [],
  page: 1,
  pagesize: 9,
  count: 0,
  current: 1
})

async function currentchange(val: number) {
  state.page = val
  await navigationApi.GetFyAsync(1, '网站', state.page, state.pagesize, 'id', true, true).then((res: any) => {
    state.resultData = res.data
  })
}
onMounted(async () => {
  await navigationApi.GetCount(1, '网站', true).then((res: any) => {
    state.count = res.data
  })
  await currentchange(1)
})
</script>
<template>
  <div>
    <blog-sidebar></blog-sidebar>
    <IndexSidebar></IndexSidebar>
    <a-back-top />
    <div class="n-nav">
      <h5 class="m-1 py-2 px-2">网站导航</h5>
      <div class="n-nav-text">
        <div v-for="res in state.resultData" :key="res.navId" class="n-nav-1">
          <div class="n-nav-1-1">
            <img v-lazy="res.img" align="left" />
          </div>
          <div class="font-semibold text-base n-nav-1-2">
            <a @click="winUrl(res.url)">{{ res.title }}</a>
          </div>
          <div class="n-nav-1-3">
            <p>{{ res.text }}</p>
          </div>
        </div>
      </div>
      <div class="n-nav-paging">
        <a-pagination
          size="small"
          :total="state.count"
          :page-size="state.pagesize"
          show-quick-jumper
          @change="currentchange" />
        <!-- end 分页-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.n-nav {
  @include initialize($w, null, 4.5%, null, $ml, null, #ffffff);
  @apply rounded-sm shadow;

  .n-nav-text {
    @apply grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl: grid-cols-4;

    .n-nav-1 {
      @include w-h(null, 200px);
      @apply rounded-sm shadow m-2.5;

      .n-nav-1-1 {
        img {
          @include w-h(100%, 100%);
        }
      }

      .n-nav-1-2 {
        padding: 5px;
      }

      .n-nav-1-3 {
        padding: 5px;

        @include w-h(null, 42px);
        @include line-number;
      }
    }
  }

  .n-nav-paging {
    @apply bg-white p-1;
  }
}
</style>
