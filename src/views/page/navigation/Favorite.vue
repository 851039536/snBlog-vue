<script lang="ts" setup>
import { NavigationApi } from '@/api'
import { winUrl } from '@/utils/route'
import { aData } from '@/views/admin/data'
import { INav } from '@/api/data/InterData'

const rData = reactive({
  page: 1,
  pagesize: 32,
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
    <div class="favorite">
      <div class="favorite-content">
        <div v-for="r in rNav" :key="r.id" class="fa-cont-list">
          <div class="fa-cont-list1">
            <div @click="winUrl(r.url)">{{ r.title }}</div>
          </div>
          <div class="fa-cont-list2">{{ r.describe }}</div>
        </div>
      </div>

      <div class="favorite-paging">
        <a-pagination
          size="small"
          :total="rData.count"
          :page-size="rData.pagesize"
          :current="rData.current"
          show-quick-jumper
          @change="currentchange" />
      </div>
    </div>

    <c-right-sidebar>
      <c-right-sidebar-container>
        <div class="favorite-describe">网站收集</div>
      </c-right-sidebar-container>

      <c-right-sidebar-container>
        <div class="favorite-onecategory">
          <div class="onecategory-name">列表</div>
          <div v-for="r in rnavTable" :key="r.id" class="inline-flex">
            <div class="m-3px flex rounded p-3px text-center hover:bg-blue-400">
              <span @click="clkApi(r.title)">{{ r.title }}</span>
            </div>
          </div>
        </div>
      </c-right-sidebar-container>

      <c-right-sidebar-container>
        <div class="footer-title">站点信息</div>
        <div class="footer-content">
          <div class="footer-content-name">内容数量:</div>
          <div class="footer-content-text">{{ sum }}篇</div>
        </div>
      </c-right-sidebar-container>
    </c-right-sidebar>
  </section>
</template>

<style lang="scss" scoped>
.favorite {
  @apply bg-white;

  .favorite-content {
    @apply h-full w-full;
    @apply grid grid-cols-4;

    .fa-cont-list {
      @include w-h(92%, 96px);
      @apply m-auto mt-8px;
      @apply rounded bg-blue-50 shadow-sm;

      .fa-cont-list1 {
        @apply bg-blue-200 mt-1 rounded pl-1;
        @apply cursor-pointer text-lg mx-2 hover:text-blue-400;
        @include line-numbers(1);
      }

      .fa-cont-list2 {
        @apply mx-3 text-cool-gray-600;
        @include line-numbers(2);
      }
    }
  }

  .favorite-paging {
    @apply p-2 m-2 mb-50;
  }
}

.favorite-describe {
  @apply text-center text-base p-3;
}

.footer-title {
  @apply text-base px-1;
  @apply cursor-pointer font-semibold bg-emerald-300;
}

.footer-content {
  @apply my-7px text-sm flex;

  .footer-content-name {
    @apply py-1 w-[35%];
  }

  .footer-content-text {
    @apply py-1 w-[40%];
  }
}

.favorite-onecategory {
  @apply bg-white rounded cursor-pointer;

  .onecategory-name {
    @apply text-base px-2;
    @apply font-semibold bg-blue-300;
  }
}

// @screen <xp {
//   .favorite {
//     .fa-main {
//       @apply fixed;
//       @apply h-[83%] mt-[6.3%];

//       .fa-cont {
//         .fa-cont-list {
//           @include w-h(31%, 140px);
//         }
//       }
//     }
//   }

//   .fav-sidebar {
//     @apply top-[11%];
//   }
// }
</style>
