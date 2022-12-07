<script lang="ts" setup>
import { navigationApi } from '@/api'
import { winUrl } from '@/hooks/routers'
import { aData } from '@/views/admin/data'
import { INav } from '@/api/data/interData'

const rData: any = reactive({
  page: 1,
  pagesize: 15,
  count: 0,
  name: '',
  current: 1
})

const rnavCount = ref(0)
const rnavTable = ref([] as INav[])
const rNav = ref([] as INav[])
async function currentchange(val: number) {
  rData.current = val
  rNav.value = await (await navigationApi.GetPaging(1, rData.name, val, rData.pagesize, 'id', true, true)).data
}

async function GetApi(name: string) {
  rData.current = 1
  rData.name = name
  rData.count = await (await navigationApi.GetCount(1, rData.name, true)).data
  rNav.value = await (await navigationApi.GetPaging(1, name, rData.page, rData.pagesize, 'id', true, true)).data
}

async function clkApi(name: string) {
  await GetApi(name)
}
onMounted(async () => {
  await GetApi('文档')
  //读取侧边栏信息
  rnavCount.value = await (await navigationApi.GetCount(0, aData.NULL, true)).data
  rnavTable.value = await (await navigationApi.GetNavTypeAll(true)).data
})
</script>

<template>
  <section>
    <div class="fa-main">
      <div class="fa-cont">
        <div v-for="res in rNav" :key="res.id" class="fa-cont-list">
          <div class="fa-cont-list1 flex">
            <div @click="winUrl(res.url)">{{ res.title }}</div>
          </div>
          <div class="fa-cont-list2">{{ res.describe }}</div>
          <div class="fa-cont-list3">
            <span class="mr-1">作者:xxx</span>
            <span class="mx-1">热度:102</span>
            <span class="mx-1">热度:102</span>
          </div>
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
    <!-- 右侧边栏 -->
    <div class="faside">
      <div class="faside-describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <div class="onecategory">
        <div class="onecategory-name">列表</div>
        <div v-for="result in rnavTable" :key="result.id" class="inline-flex">
          <div class="flex-1 m-1 text-base text-center p-1 shadow rounded hover:bg-blue-400">
            <span @click="clkApi(result.title)">{{ result.title }}</span>
          </div>
        </div>
      </div>
      <div class="faside-footer">
        <div class="faside-f-title">站点信息</div>
        <div class="faside-f-cont">
          <div class="faside-f-cont-name">内容数量:</div>
          <div class="faside-f-cont-text">{{ rnavCount }}篇</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.fa-main {
  @apply relative;
  @apply mt-[4.3%] ml-[22%] w-[47%];

  .fa-cont {
    @apply h-full w-full;
    @apply grid grid-cols-3;

    .fa-cont-list {
      @include w-h(95%, 155px);
      @apply m-auto mt-2 ml-2;
      @apply rounded bg-white shadow;

      .fa-cont-list1 {
        @apply cursor-pointer h-[24%] text-xl py-2 px-3 hover:text-blue-400;
        @include line-one;
      }

      .fa-cont-list2 {
        @apply h-[45%]  px-3 text-cool-gray-500;
        @include line-numbers(2);
      }

      .fa-cont-list3 {
        @apply mx-1 mt-3 px-2;
        @apply cursor-pointer text-cool-gray-500;

        span {
          @apply bg-blue-100 p-1 rounded hover:text-blue-500;
        }
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
    @apply bg-white rounded cursor-pointer shadow;

    .onecategory-name {
      @apply m-1 text-base p-1;
      @apply font-semibold bg-blue-300;
    }
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
