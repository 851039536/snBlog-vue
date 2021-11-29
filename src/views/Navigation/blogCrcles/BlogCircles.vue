<script lang="ts" setup>
import BlogCirclesSidebar from '@vi/Navigation/blogCrcles/components/Sidebar.vue'
import { method, resData } from '@vi/Navigation/blogCrcles/data/circles'

method.GetTypeOrder()
</script>
<template>
  <div class="circles">
    <l-sidebar></l-sidebar>
    <blog-circles-sidebar></blog-circles-sidebar>
    <div class="circles_main animate__animated animate__fadeIn">
      <div class="grid circles_content 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="circles-1" v-for="res in resData.resultData" :key="res.id">
          <div class="circles-1-1">
            <img v-lazy="res.img" onerror="this.style.display='none'" />
          </div>
          <div class="circles-1-2">
            <div class="circles-1-2-1">
              <a @click="method.UrlSkip(res.url)">{{ res.title }}</a>
            </div>
            <div class="circles-1-2-2">{{ res.describe }}</div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="circles_page">
        <a-pagination
          size="small"
          @change="method.currentchange"
          :total="resData.count"
          :pageSize="resData.pagesize"
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

.circles {
  position: fixed;

  @include w-h(100%, 100%);

  .circles_main {
    @include initialize($w, 86%, 4.5%, null, $ml, null, #ffffff);

    @apply rounded-sm shadow;

    // 导航窗体小
    .circles-1 {
      @include w-h(210px, 110px);

      @apply m-2 mt-4 shadow rounded hover:bg-gray-200;

      .circles-1-1 {
        @include w-h(40%, 99%);

        @apply p-1 float-left;

        img {
          @include w-h(100%, 100%);

          @apply rounded-full  bg-gray-300;
        }
      }

      .circles-1-2 {
        @apply float-right;

        @include w-h(60%, 100%);

        .circles-1-2-1 {
          @apply text-base font-semibold p-1 pt-2;

          @include line-one;

          /* 动态下划线 */
          position: relative;
          text-decoration: none;

          &:hover {
            cursor: pointer;
          }

          &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #7f828f;
            transform: scaleX(0);
            visibility: hidden;
            transition: all 0.3s ease-in-out 0s;
            content: '';
          }

          &:hover::before {
            transform: scaleX(1);
            visibility: visible;
          }
        }

        .circles-1-2-2 {
          /* background-color: #00FFFF; */
          @apply px-1 pt-3;

          @include line-one;
        }
      }
    }

    .circles_content {
      @include w-h(100%, 100%);

      overflow: auto;
    }

    .circles_content::-webkit-scrollbar {
      display: none;
    }

    .circles_page {
      @apply bg-white  p-1 shadow;
    }
  }
}
</style>
