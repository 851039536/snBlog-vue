<script lang="ts" setup>
import { useApi } from '@/api/useApi'

const { VideoApi } = useApi()
const state = ref(0)
interface ResData {
  URL: string
  typeName: string
  resultData: any
}
const resData: ResData = reactive({
  URL: '',
  typeName: 'LOL',
  resultData: []
})
const route = useRoute()
const resId = reactive({
  id: route.query.id
})
VideoApi.getSum(0, '0', true).then((res: any) => {
  state.value = res.data.data
})

const videos = async (vid: number) => {
  await VideoApi.getById(vid, true).then((res: any) => {
    resData.URL = res.data.data.url
  })
}
const GetApi = async () => {
  await VideoApi.getType(1, resData.typeName, true).then((res: any) => {
    resData.resultData = res.data.data
  })
  await VideoApi.getById(resId.id, true).then((res: any) => {
    resData.URL = res.data.data.url
  })
}

GetApi()
</script>

<template>
  <div class="vside">
    <div class="vplay-side">
      <div v-for="r in resData.resultData" :key="r.id" class="vplay-2-1">
        <div class="vplay-2-1-1">
          <img src="@/assets/img/sp.png" alt="" />
        </div>
        <div class="vplay-2-1-2">
          <a @click="videos(r.id)">{{ r.name }}</a>
        </div>
        <div class="vplay-2-1-3">
          {{ r.timeModified.substring(0, 10) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vside {
  @apply h-[90%] top-[9%] right-[11%] w-[17%] fixed;

  .vplay-side {
    @apply cursor-pointer w-[97%] h-full overflow-auto;

    .vplay-2-1 {
      @apply shadow mb-1 w-full h-295px;

      .vplay-2-1-1 {
        height: 65%;

        img {
          @apply w-full h-185px;
        }
      }

      .vplay-2-1-2 {
        height: 18%;

        @include line-numbers(2);
        @apply text-base p-1;
      }

      .vplay-2-1-3 {
        height: 17%;

        @apply text-base p-1;
      }
    }
  }
}
</style>
