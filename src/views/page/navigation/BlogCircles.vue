<script lang="ts" setup>
import { IPaging } from '@/api/model/InterData'
import { useNavigationApi } from '@/hooks/http'
import { uiSettings } from '@/store/modules/uiSettings'
import { useRouter } from '@hooks/useRouter'
const { winUrl } = useRouter()
const { getSum, getPaging } = useNavigationApi()
const ui = uiSettings()
const sum = ref(0)
onMounted(async () => {
  sum.value = await (await getSum(1, '博客圈', true)).data.data
})

const paging: IPaging = reactive({
  page: 1,
  pagesize: 24,
  count: 0,
  current: 1
})
const nData: any = ref([])
const rTitle = ref('博客圈')
async function currentchange(val: number) {
  paging.current = val
  nData.value = await (await getPaging(1, rTitle.value, val, paging.pagesize as number)).data.data
}

function QImageUrl(name: string) {
  return new URL(`http://kai.snblogs.cn/blog/navigation/${name}`)
}
onMounted(async () => {
  ui.rightSidebar = false
  nData.value = await (await getPaging(1, rTitle.value, paging.page as number, paging.pagesize as number)).data.data
  paging.count = await (await getSum(1, rTitle.value, true)).data.data
})
</script>
<template>
  <div class="blog-circles">
    <div class="mx-5 rounded bg-white p-1 text-base">博客总数 : {{ sum }}位</div>
    <div class="circles-content xp:grid-cols-4 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div v-for="ret in nData" :key="ret.id" class="circles-1">
        <div class="circles-1-1">
          <img v-lazy="QImageUrl(ret.img)" alt="err" />
        </div>
        <div class="circles-1-2">
          <div class="circles-1-2-1">
            <span @click="winUrl(ret.url)">{{ ret.title }}</span>
          </div>
          <div class="circles-1-2-2">
            {{ ret.describe }}
          </div>
        </div>
      </div>
    </div>

    <div class="circles-page">
      <a-pagination
        size="small"
        :total="paging.count"
        :page-size="paging.pagesize"
        show-quick-jumper
        @change="currentchange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-circles {
  @apply m-1 bg-white;

  // 导航窗体小
  .circles-1 {
    @apply m-2 shadow-sm w-[95%] h-110px;

    .circles-1-1 {
      @apply float-left w-[45%] h-[99%];

      img {
        @apply w-full h-full;
      }
    }

    .circles-1-2 {
      @apply float-right bg-white w-[55%] h-full;

      .circles-1-2-1 {
        @apply text-lg p-1 font-medium m-1 cursor-pointer hover:text-blue-400;
        @include truncation;
      }

      .circles-1-2-2 {
        height: 47px;

        @apply m-1 mt-2 text-cool-gray-500;
        @include line-numbers(2);
      }
    }
  }

  .circles-content {
    @apply bg-gray-100 w-full h-full;
  }

  .circles-content::-webkit-scrollbar {
    display: none;
  }

  .circles-page {
    @apply p-1 mx-2 mt-1;
  }
}
</style>
@/api/model/InterData
