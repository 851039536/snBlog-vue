<script lang="ts" setup>
import { onMounted } from 'vue'
import { state } from './data'
import { method } from './index'
import { winUrl } from '@/hooks/routers'
import FavSidebar from './FavSidebar.vue'

onMounted(async () => {
  await method.GetApi('文档')
})
</script>

<template>
  <div id="favorite">
    <!-- 加载组件 -->
    <blog-sidebar></blog-sidebar>
    <FavSidebar></FavSidebar>
    <a-back-top />
    <!-- end 加载组件 -->
    <div id="favorite_main" class="animate__animated animate__fadeIn">
      <!-- 网站内容 -->
      <div class="flex flex-wrap favorite_content">
        <div class="favorite_content_text" v-for="res in state.text" :key="res.id">
          <div class="favorite_content_text-1">
            <a @click="winUrl(res.url)">{{ res.title }}</a>
          </div>
          <div class="favorite_content_text-2">{{ res.describe }}</div>
        </div>
      </div>
      <!-- end 网站内容 -->

      <!-- 分页 -->
      <div class="favorite_page">
        <a-pagination
          size="small"
          @change="method.currentchange"
          :total="state.count"
          :pageSize="state.pagesize"
          :current="state.current"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

#favorite {
  @apply w-full h-full;

  #favorite_main {
    @apply fixed;

    @include initialize($w, 85%, 4.5%, null, $ml, null, #ffffff);

    @apply rounded shadow;

    .favorite_type {
      @apply text-base cursor-default text-center;

      .favorite_type_name {
        background: #e5e7eb;

        @apply m-1  px-2   rounded;
      }
    }

    .favorite_content {
      @apply w-full h-full m-auto;

      .favorite_content_text {
        @include w-h(31%, 125px);

        @apply m-auto;
        @apply mt-2 ml-2  rounded-sm shadow bg-gray-100;

        .favorite_content_text-1 {
          @apply px-1 text-base font-semibold;

          height: 25%;

          @include line-one;
        }

        .favorite_content_text-2 {
          height: 65%;

          @apply px-2 mt-2 mx-1 text-sm font-thin bg-white;

          @include line-numbers(4);
        }
      }
    }

    .favorite_page {
      @apply p-2 bg-white shadow;
    }
  }
}
</style>
