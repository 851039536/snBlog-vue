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
  <s-header></s-header>
  <l-sidebar></l-sidebar>
  <section>
    <div class="fa-main">
      <div class="fa-cont">
        <div v-for="res in resData.text" :key="res.id" class="fa-cont-list">
          <div class="fa-cont-list1">
            <span @click="winUrl(res.url)">{{ res.title }}</span>
          </div>
          <div class="fa-cont-list2">{{ res.describe }}</div>
        </div>
      </div>

      <div class="fa-page">
        <a-pagination
          size="small"
          :total="resData.count"
          :page-size="resData.pagesize"
          :current="resData.current"
          show-quick-jumper
          @change="method.currentchange" />
      </div>
    </div>
    <!-- 右侧边栏 -->
    <div class="faside">
      <div class="faside-describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <div class="onecategory">
        <div class="onecategory-name">列表</div>
        <div v-for="result in state.resultData2" :key="result.id" class="inline-flex">
          <div class="flex-1 m-1 text-base text-center px-1 shadow rounded hover:bg-blue-300">
            <span @click="clkApi(result.title)">{{ result.title }}</span>
          </div>
        </div>
      </div>
      <div class="faside-footer">
        <div class="faside-f-title">站点信息</div>
        <div class="faside-f-cont">
          <div class="faside-f-cont-name">内容数量:</div>
          <div class="faside-f-cont-text">{{ state.resultCount }}篇</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// @apply h-full w-full bg-yellow-300;
.fa-main {
  @apply relative;
  @apply h-[85%] mt-[4.6%] ml-[22%] w-[47%];
  @apply rounded shadow;

  .fa-cont {
    @apply h-full m-auto w-full;
    @apply flex flex-wrap;

    .fa-cont-list {
      @include w-h(31.5%, 168px);
      @apply m-auto mt-2 ml-2;
      @apply rounded-sm bg-blue-gray-200 shadow;

      .fa-cont-list1 {
        @apply cursor-pointer h-[24%] text-lg p-2 hover:text-blue-400;
        @include line-one;
      }

      .fa-cont-list2 {
        @apply h-[65%] mx-1 mt-2 px-2;
        @apply bg-white font-thin;
        @include line-numbers(5);
      }
    }
  }

  .fa-page {
    @apply bg-white shadow p-2;
  }
}

.faside {
  @apply fixed;
  @apply h-[90%] top-[9%] right-[12%] w-[18%];

  .faside-describe {
    @apply mb-2 w-[97%];
    @apply rounded shadow text-center;

    p {
      @apply m-1 text-base py-4 px-2;
    }
  }

  .faside-footer {
    @apply mb-2 p-1 w-[97%];
    @apply rounded cursor-pointer shadow;

    .faside-f-title {
      @apply m-1 text-base p-1;
      @apply cursor-pointer font-semibold bg-gray-200;
    }

    .faside-f-cont {
      @apply m-2 text-sm flex;

      .faside-f-cont-name {
        @apply p-1 w-[35%];
      }

      .faside-f-cont-text {
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

@screen <xp {
  .favorite {
    .fa-main {
      @apply fixed;
      @apply h-[83%] mt-[6.3%];

      .fa-cont {
        .fa-cont-list {
          @include w-h(31%, 140px);
        }
      }
    }
  }

  .fav-sidebar {
    @apply top-[11%];
  }
}
</style>
