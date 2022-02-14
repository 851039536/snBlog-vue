<script lang="ts" setup>
import { resData } from './data/data'
import { method } from './data/index'
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

onMounted(async () => {
  await method.GetApi('文档')
  await GetAll()
})
</script>

<template>
  <section>
    <s-header></s-header>
    <l-sidebar></l-sidebar>
    <div id="favorite">
      <!-- end 加载组件 -->
      <div id="favorite_main">
        <!-- 网站内容 -->
        <div class="flex flex-wrap favorite_content">
          <div class="favorite_content_text" v-for="resda in resData.text" :key="resda.id">
            <div class="favorite_content_text-1">
              <span @click="winUrl(resda.url)">{{ resda.title }}</span>
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
            <div class="flex-1 m-1 text-base text-center px-1">
              <span @click="clkApi(result.title)">{{ result.title }}</span>
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
  </section>
</template>

<style lang="scss" scoped>
#favorite {
  @apply h-full w-full;

  #favorite_main {
    @apply fixed;

    @include initialize($w, 85%, 4.5%, null, $ml, null, #ffffff);

    @apply rounded shadow;

    .favorite_type {
      @apply cursor-default text-base text-center;

      .favorite_type_name {
        background: #e5e7eb;
      }
    }

    .favorite_content {
      @apply h-full m-auto w-full;

      .favorite_content_text {
        @include w-h(32%, 167px);

        @apply m-auto;
        @apply rounded-sm bg-gray-100  shadow mt-2 ml-2;

        .favorite_content_text-1 {
          @apply cursor-pointer font-thin  text-lg px-1;
          height: 25%;
          @include line-one;
        }

        .favorite_content_text-2 {
          height: 65%;

          @apply bg-white font-thin mx-1  mt-2 px-2;

          @include line-numbers(5);
        }
      }
    }

    .favorite_page {
      @apply bg-white shadow p-2;
    }
  }
}

#FavSidebar {
  position: fixed;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20%, 90%);

  @apply ml-3;

  #FavSidebar_main {
    @apply h-full w-full overflow-auto;

    .el-calendar-table .el-calendar-day {
      height: 44px !important;
    }

    .FavSidebar_describe {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);

      @apply rounded shadow text-center mb-2;

      p {
        @apply m-1 text-base py-4 px-2;
      }
    }

    .FavSidebar_footer {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);

      @apply rounded cursor-pointer shadow mb-2 p-1;

      .FavSidebar_f_title {
        @apply cursor-pointer font-semibold bg-gray-200 m-1 text-base p-1;
      }

      .FavSidebar_f_content {
        @apply m-2 text-sm;

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

      @apply rounded shadow  mb-2 p-1;

      .FavSidebar_itme_1 {
        color: #1b1e21;

        @apply font-semibold bg-gray-200 m-1 text-sm p-1;
      }

      .FavSidebar_itme_2 {
        @apply bg-gray-100;
        @apply cursor-pointer m-2;

        .itme_1 {
          @apply text-base p-2;
        }
      }
    }

    .onecategory {
      width: 97%;

      @apply cursor-pointer m-auto mb-2  p-1;
      @apply bg-white rounded shadow;

      .onecategory_name {
        color: #1b1e21;

        @apply font-semibold bg-gray-200 m-1 text-base p-1;
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
