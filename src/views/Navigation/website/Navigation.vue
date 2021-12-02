<script setup lang="ts">
import { onMounted } from 'vue'
import { navigation } from '@/api/index'
import { winUrl } from '@/hooks/routers'
import { state } from './data'
import { method } from './index'

onMounted(async () => {
  await navigation.GetCountAsync(1, '网站', true).then((res: any) => {
    state.count = res.data
  })
  await method.currentchange(1)
})
</script>
<template>
  <div>
    <s-header></s-header>
    <blog-sidebar></blog-sidebar>
    <IndexSidebar></IndexSidebar>
    <a-back-top />
    <div class="n-nav animate__animated animate__fadeIn">
      <h5 class="px-2 py-2 m-1">网站导航</h5>
      <div class="n-nav-text">
        <div v-for="res in state.resultData" :key="res.navId" class="n-nav-1">
          <div class="n-nav-1-1">
            <img v-lazy="res.img" align="left" />
          </div>
          <div class="text-base font-semibold n-nav-1-2">
            <a @click="winUrl(res.url)">{{ res.title }}</a>
          </div>
          <div class="n-nav-1-3">
            <p>{{ res.text }}</p>
          </div>
        </div>
      </div>
      <div class="n-nav_Paging">
        <a-pagination
          size="small"
          @change="method.currentchange"
          :total="state.count"
          :pageSize="state.pagesize"
          show-quick-jumper
        />
        <!-- end 分页-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.n-nav {
  @include initialize($w, null, 4.5%, null, $ml, null, #ffffff);

  @apply shadow rounded-sm;

  .n-nav-text {
    @apply grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1;

    .n-nav-1 {
      @include w-h(null, 200px);

      @apply shadow rounded-sm m-2.5;

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

  .n-nav_Paging {
    @apply bg-white p-1;
  }
}
</style>
