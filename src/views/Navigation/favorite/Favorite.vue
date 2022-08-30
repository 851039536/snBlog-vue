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
      <div id="favorite-main">
        <!-- 网站内容 -->
        <div class="flex flex-wrap favorite-content">
          <div class="favorite-content-text" v-for="resda in resData.text" :key="resda.id">
            <div class="favorite-content-text-1">
              <span @click="winUrl(resda.url)">{{ resda.title }}</span>
            </div>
            <div class="favorite-content-text-2">{{ resda.describe }}</div>
          </div>
        </div>
        <!-- end 网站内容 -->

        <!-- 分页 -->
        <div class="favorite-page">
          <a-pagination size="small" @change="method.currentchange" :total="resData.count" :pageSize="resData.pagesize"
            :current="resData.current" show-quick-jumper />
        </div>
        <!-- end 分页-->
      </div>
    </div>

    <div id="FavSidebar">
      <div id="FavSidebar-main">
        <div class="fav-sidebar-describe">
          <p class>各式各样网站收集分享</p>
        </div>
        <!--内容框-->

        <div class="onecategory">
          <div class="onecategory-name">列表</div>
          <div class="inline-flex" v-for="result in state.resultData2" :key="result.id">
            <div class="flex-1 m-1 text-base text-center px-1">
              <span @click="clkApi(result.title)">{{ result.title }}</span>
            </div>
          </div>
        </div>

        <!-- end 内容框 -->

        <!-- 站点信息 -->
        <div class="fav-sidebar-footer">
          <div class="fav-sidebar-f-title">站点信息</div>
          <div class="fav-sidebar-f-content">
            <div class="flex">
              <div class="fav-sidebar-f-content-name">内容数量:</div>
              <div class="fav-sidebar-f-content-text">{{ state.resultCount }}篇</div>
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

  #favorite-main {
    @apply fixed;
    @apply h-[85%] mt-[4.6%] ml-[26%] w-[47%];
    @apply rounded shadow;

    .favorite-content {
      @apply h-full m-auto w-full;

      .favorite-content-text {
        @include w-h(31.5%, 170px);
        @apply m-auto mt-4 ml-2;
        @apply rounded-sm bg-gray-100 shadow;

        .favorite-content-text-1 {
          @apply cursor-pointer h-[25%] text-lg p-2;
          @include line-one;
        }

        .favorite-content-text-2 {
          @apply h-[65%] mx-1 mt-2 px-2;
          @apply bg-white font-thin;
          @include line-numbers(5);
        }
      }
    }

    .favorite-page {
      @apply bg-white shadow p-2;
    }
  }
}

#fav-sidebar {
  @apply fixed;
  @apply h-[90%] top-[9%] right-[8%] w-[18%];

  #fav-sidebar-main {
    @apply h-full w-full overflow-auto;

    .fav-sidebar-describe {
      @apply mb-2 w-[97%];
      @apply rounded shadow text-center;

      p {
        @apply m-1 text-base py-4 px-2;
      }
    }

    .fav-sidebar-footer {
      @apply mb-2 p-1 w-[97%];
      @apply rounded cursor-pointer shadow;

      .fav-sidebar-f-title {
        @apply m-1 text-base p-1;
        @apply cursor-pointer font-semibold bg-gray-200;
      }

      .fav-sidebar-f-content {
        @apply m-2 text-sm;

        .fav-sidebar-f-content-name {
          @apply p-1 w-[35%];
        }

        .fav-sidebar-f-content-text {
          @apply p-1 w-[40%];
        }
      }
    }

    .onecategory {
      @apply m-auto mb-2 p-1 w-[97%];
      @apply bg-white rounded cursor-pointer shadow;

      .onecategory-name {
        @apply m-1 text-base p-1;
        @apply font-semibold bg-gray-200;
      }
    }
  }
}

@screen <xp {
  #favorite {
    #favorite-main {
      @apply fixed;
      @apply h-[83%] mt-[6.3%];

      .favorite-content {
        .favorite-content-text {
          @include w-h(31%, 140px);
        }
      }
    }
  }

  #fav-sidebar {
    @apply top-[11%];
  }
}
</style>
