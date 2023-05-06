<script lang="ts" setup>
import { NavigationApi } from '@/api'
import { winUrl } from '@/utils/route'
import { aData } from '@/views/admin/data'
import { INav } from '@/api/data/InterData'

const rData = reactive({
  page: 1,
  pagesize: 21,
  count: 0,
  name: '',
  current: 1
})
const sum = ref(0)
const rnavTable = ref([] as INav[])
const rNav = ref([] as INav[])
async function currentchange(val: number) {
  rData.current = val
  rNav.value = await (await NavigationApi.getPaging(1, rData.name, val, rData.pagesize, 'id', true, true)).data
}

async function GetApi(name: string) {
  rData.current = 1
  rData.name = name
  rData.count = await (await NavigationApi.getCount(1, rData.name, true)).data
  rNav.value = await (await NavigationApi.getPaging(1, name, rData.page, rData.pagesize, 'id', true, true)).data
}

async function clkApi(name: string) {
  await GetApi(name)
}
onMounted(async () => {
  await GetApi('文档')
  //读取侧边栏信息
  sum.value = await (await NavigationApi.getCount(0, aData.NULL, true)).data
  rnavTable.value = await (await NavigationApi.getNavTypeAll(true)).data
})
</script>

<template>
  <section>
    <div class="fa-main">
      <div class="mx-3 flex items-center text-base">
        <div i-flat-color-icons-doughnut-chart mr-1 h-5 w-5></div>
        网站导航
      </div>
      <div class="fa-cont">
        <div v-for="r in rNav" :key="r.id" class="fa-cont-list">
          <div class="fa-cont-list1">
            <div @click="winUrl(r.url)">{{ r.title }}</div>
          </div>
          <div class="fa-cont-list2">{{ r.describe }}</div>
        </div>
      </div>

      <div class="fa-page">
        <a-pagination
          size="small"
          :total="rData.count"
          :page-size="rData.pagesize"
          :current="rData.current"
          show-quick-jumper
          @change="currentchange" />
      </div>
    </div>

    <div class="faside">
      <div class="faside-describe">
        <p>网站收集</p>
      </div>
      <div class="onecategory">
        <div class="onecategory-name">列表</div>
        <div v-for="r in rnavTable" :key="r.id" class="inline-flex">
          <div class="flex-1 rounded p-1 text-center text-base m-1 hover:bg-blue-400">
            <span @click="clkApi(r.title)">{{ r.title }}</span>
          </div>
        </div>
      </div>
      <div class="faside-footer">
        <div class="faside-f-title">站点信息</div>
        <div class="faside-f-cont">
          <div class="faside-f-cont-name">内容数量:</div>
          <div class="faside-f-cont-text">{{ sum }}篇</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.fa-main {
  // @apply relative;

  // @apply mt-[4.3%] ml-[22%] w-[47%];

  .fa-cont {
    @apply h-full w-full;
    @apply grid grid-cols-3;

    .fa-cont-list {
      @include w-h(98%, 96px);
      @apply m-auto mt-6px;
      @apply rounded bg-white shadow-sm;

      .fa-cont-list1 {
        @apply cursor-pointer text-lg font-medium py-1 mx-3 hover:text-blue-400;
        @include line-numbers(1);
      }

      .fa-cont-list2 {
        @apply mx-3 text-cool-gray-500;
        @include line-numbers(2);
      }
    }
  }

  .fa-page {
    @apply bg-white shadow p-2 m-2 mb-50;
  }
}

.faside {
  @apply fixed;
  @apply h-[90%] top-[9%] right-[12%] w-[18%];

  .faside-describe {
    @apply m-auto mb-2 w-[97%] bg-white;
    @apply rounded shadow text-center;

    p {
      @apply m-1 text-base py-4 px-2;
    }
  }

  .faside-footer {
    @apply m-auto mb-2 p-1 w-[97%] bg-white;
    @apply rounded cursor-pointer shadow;

    .faside-f-title {
      @apply m-1 text-base p-1;
      @apply cursor-pointer font-semibold bg-emerald-300;
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
    @apply bg-white rounded cursor-pointer;

    .onecategory-name {
      @apply m-1 text-base p-1;
      @apply font-semibold bg-blue-300;
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
