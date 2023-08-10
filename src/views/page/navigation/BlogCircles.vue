<script lang="ts" setup>
import { IPaging } from '@/api/data/InterData'
import { useNavigationApi } from '@/hooks/http'
import { useRouter } from '@hooks/useRouter'
const { winUrl } = useRouter()
const { getSum, getPaging } = useNavigationApi()
const sum = ref(0)
onMounted(async () => {
  sum.value = await (await getSum(1, '博客圈', true)).data.data
})

const paging: IPaging = reactive({
  page: 1,
  pagesize: 18,
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
  return new URL(`http://rxzvlzwfh.hn-bkt.clouddn.com/blog/navigation/${name}`)
}
onMounted(async () => {
  nData.value = await (await getPaging(1, rTitle.value, paging.page as number, paging.pagesize as number)).data.data
  paging.count = await (await getSum(1, rTitle.value, true)).data.data
})
</script>
<template>
  <div class="blog-circles">
    <div class="mx-5 rounded bg-white p-1 text-base">博客:{{ sum }}</div>
    <div class="circles-content xp:grid-cols-3 grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
  @apply mt-1 bg-white rounded;

  // 导航窗体小
  .circles-1 {
    @apply m-auto mb-3 mt-6px shadow-sm w-[90%] h-120px;

    .circles-1-1 {
      @apply float-left w-[42%] h-[99%];

      img {
        @apply rounded w-full h-full;
      }
    }

    .circles-1-2 {
      @apply float-right bg-white w-[58%] h-full;

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
