<script lang="ts" setup>
import { reactive } from 'vue'
import { navigation } from '@/api/index'
import { method } from './index'

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
</script>

<template>
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
