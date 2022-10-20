<script lang="ts" setup>
import { video } from '@/api'

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
video.GetCountAsync(0, '0', true).then((res: any) => {
  state.value = res.data
})

const videos = async (vid: number) => {
  await video.GetByIdAsync(vid, true).then((res: any) => {
    resData.URL = res.data.url
  })
}
const GetApi = async () => {
  await video.GetTypeAsync(1, resData.typeName, true).then((res: any) => {
    resData.resultData = res.data
  })
  await video.GetByIdAsync(resId.id, true).then((res: any) => {
    resData.URL = res.data.url
  })
}

GetApi()
</script>

<template>
  <div class="vside">
    <div class="vplay-side">
      <div v-for="res in resData.resultData" :key="res.id" class="vplay-2-1">
        <div class="vplay-2-1-1">
          <img src="@/assets/img/sp.png" />
        </div>
        <div class="vplay-2-1-2">
          <a @click="videos(res.id)">{{ res.title }}</a>
        </div>
        <div class="vplay-2-1-3">
          {{ res.timeModified.substring(0, 10) }}
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
      @include w-h(100%, 295px);
      @apply shadow mb-1;

      .vplay-2-1-1 {
        height: 65%;

        img {
          @include w-h(100%, 185px);
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

@screen <xp {
  .vside {
    @apply top-[11%];
  }
}
</style>
