<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { resData } from './data'
import { method } from './index'
import { winUrl } from '@/hooks/routers'
import { navigation } from '@/api'

interface State {
  resultData2: any
  resultCount: number
}
const state: State = reactive({
  resultData2: [],
  resultCount: 0
})

const GetAll = async () => {
  await navigation.GetCountAsync(0, 'null', true).then((res: any) => {
    state.resultCount = res.data
  })

  await navigation.GetSnNavigationTypeSAllAsync(true).then((res: any) => {
    state.resultData2 = res.data
  })
}

async function clkApi(name: string) {
  await method.GetApi(name)
}

GetAll()

onMounted(async () => {
  await method.GetApi('文档')
})
</script>

<template>
  <s-header></s-header>
  <l-sidebar></l-sidebar>
  <!-- <fav-sidebar></fav-sidebar> -->
  <div id="favorite">
    <!-- end 加载组件 -->
    <div id="favorite_main">
      <!-- 网站内容 -->
      <div class="flex flex-wrap favorite_content">
        <div class="favorite_content_text" v-for="resda in resData.text" :key="resda.id">
          <div class="favorite_content_text-1">
            <a @click="winUrl(resda.url)">{{ resda.title }}</a>
          </div>
          <div class="favorite_content_text-2">{{ resda.describe }}</div>
        </div>
      </div>
      <!-- end 网站内容 -->

      <!-- 分页 -->
      <div class="favorite_page">
        <a-pagination
          size="small"
          @change="method.currentchange"
          :total="resData.count"
          :pageSize="resData.pagesize"
          :current="resData.current"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>
  </div>

  <div id="FavSidebar">
    <div id="FavSidebar_main">
      <div class="FavSidebar_describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <!--内容框-->

      <div class="onecategory">
        <div class="onecategory_name">列表</div>
        <div class="inline-flex" v-for="result in state.resultData2" :key="result.id">
          <div
            class="flex-1 px-1 m-1 text-base text-center transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
          >
            <a @click="clkApi(result.title)">{{ result.title }}</a>
          </div>
        </div>
      </div>

      <!-- end 内容框 -->

      <!-- 站点信息 -->
      <div class="FavSidebar_footer">
        <div class="FavSidebar_f_title">站点信息</div>
        <div class="FavSidebar_f_content">
          <div class="flex">
            <div class="FavSidebar_f_content_name">内容数量:</div>
            <div class="FavSidebar_f_content_text">{{ state.resultCount }}篇</div>
          </div>
        </div>
      </div>
      <!-- end 站点信息 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

#FavSidebar {
  position: fixed;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20%, 90%);

  @apply ml-3;

  #FavSidebar_main {
    @apply w-full h-full overflow-auto;

    .el-calendar-table .el-calendar-day {
      height: 44px !important;
    }

    .FavSidebar_describe {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);

      @apply mb-2 shadow rounded text-center;

      p {
        @apply text-sm px-2 py-4 m-1 cursor-pointer;
      }
    }

    .FavSidebar_footer {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);

      @apply p-1 mb-2 cursor-pointer shadow rounded;

      .FavSidebar_f_title {
        @apply p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer;
      }

      .FavSidebar_f_content {
        @apply text-sm m-2;

        .FavSidebar_f_content_name {
          @apply p-1;

          width: 35%;
        }

        .FavSidebar_f_content_text {
          width: 40%;

          @apply p-1;
        }
      }
    }

    .FavSidebar_itme {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);

      @apply p-1 mb-2  shadow rounded;

      .FavSidebar_itme_1 {
        color: #1b1e21;

        @apply p-1 m-1 text-sm font-semibold bg-gray-200;
      }

      .FavSidebar_itme_2 {
        @apply bg-gray-100;
        @apply m-2 cursor-pointer;

        .itme_1 {
          @apply p-2 text-base;
        }
      }
    }

    .onecategory {
      width: 97%;

      @apply p-1 mb-2 m-auto cursor-pointer;
      @apply shadow rounded bg-white;

      .onecategory_name {
        color: #1b1e21;

        @apply p-1 m-1 text-sm font-semibold bg-gray-200;
      }
    }
  }
}

// @screen xp {
//   #FavSidebar {
//     display: none;
//   }
// }
</style>
