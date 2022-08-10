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
    @apply h-[85%] mt-[4.6%] ml-[26%] w-[47%];
    @apply rounded shadow;

    .favorite_content {
      @apply h-full m-auto w-full;
      .favorite_content_text {
        @include w-h(31.5%, 170px);
        @apply m-auto mt-4 ml-2;
        @apply rounded-sm bg-gray-100 shadow;

        .favorite_content_text-1 {
          @apply cursor-pointer h-[25%] text-lg p-2;
          @include line-one;
        }

        .favorite_content_text-2 {
          @apply h-[65%] mx-1 mt-2 px-2;
          @apply bg-white font-thin;
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
  @apply fixed;
  @apply h-[90%] top-[9%] right-[8%] w-[18%];
  #FavSidebar_main {
    @apply h-full w-full overflow-auto;
    .FavSidebar_describe {
      @apply mb-2 w-[97%];
      @apply rounded shadow text-center;
      p {
        @apply m-1 text-base py-4 px-2;
      }
    }
    .FavSidebar_footer {
      @apply mb-2 p-1 w-[97%];
      @apply rounded cursor-pointer shadow;

      .FavSidebar_f_title {
        @apply m-1 text-base p-1;
        @apply cursor-pointer font-semibold bg-gray-200;
      }

      .FavSidebar_f_content {
        @apply m-2 text-sm;

        .FavSidebar_f_content_name {
          @apply p-1 w-[35%];
        }

        .FavSidebar_f_content_text {
          @apply p-1 w-[40%];
        }
      }
    }

    .onecategory {
      @apply m-auto mb-2 p-1 w-[97%];
      @apply bg-white rounded cursor-pointer shadow;

      .onecategory_name {
        @apply m-1 text-base p-1;
        @apply font-semibold bg-gray-200;
      }
    }
  }
}

@screen <xp {
  #favorite {
    #favorite_main {
      @apply fixed;
      @apply h-[83%] mt-[6.3%];

      .favorite_content {
        .favorite_content_text {
          @include w-h(31%, 140px);
        }
      }
    }
  }
  #FavSidebar {
    @apply top-[11%];
  }
}
</style>
