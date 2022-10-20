<script lang="ts" setup>
import { method, resData } from '@vi/Navigation/blogCrcles/data/circles'

// function getImageUrl(name: string) {
//   return new URL(`${name}`, import.meta.url).href
// }
method.GetTypeOrder()
</script>
<template>
  <div class="circles">
    <s-header></s-header>
    <l-sidebar></l-sidebar>
    <s-circles-sidebar></s-circles-sidebar>
    <div class="circles-main">
      <div class="grid circles-content sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xp:grid-cols-3 2xl:grid-cols-3">
        <div v-for="res in resData.resultData" :key="res.id" class="circles-1">
          <div class="circles-1-1">
            <img v-lazy="res.img" onerror="this.style.display='none'" />
            <!-- <img v-lazy="getImageUrl(res.img)" /> -->
          </div>
          <div class="circles-1-2">
            <div class="circles-1-2-1">
              <span @click="method.UrlSkip(res.url)">{{ res.title }}</span>
            </div>
            <div class="circles-1-2-2">
              {{ res.describe }}
            </div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="circles-page">
        <a-pagination
          size="small"
          :total="resData.count"
          :page-size="resData.pagesize"
          show-quick-jumper
          @change="method.currentchange" />
      </div>
      <!-- end 分页-->
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
      @apply bg-white shadow p-1 mx-2;
    }
  }
}
</style>
