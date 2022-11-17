<script lang="ts" setup>
import { videoApi } from '@/api'

const route = useRoute()

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

const resId = reactive({
  id: route.query.id
})

const GetApi = async () => {
  await videoApi.GetTypeAsync(1, resData.typeName, true).then((res: any) => {
    resData.resultData = res.data
  })
  await videoApi.GetByIdAsync(resId.id, true).then((res: any) => {
    resData.URL = res.data.url
  })
}

// const videos = async (vid: number) => {
//   await video.GetByIdAsync(vid, true).then((res: any) => {
//     resData.URL = res.data.url
//   })
// }
GetApi()
</script>

<template>
  <section>
    <c-header></c-header>
    <c-sidebar></c-sidebar>
    <video-play-side></video-play-side>
    <div class="vplay">
      <div class="vplay-if">
        <iframe
          id="ifs"
          :src="resData.URL"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vplay {
  @apply h-[100%] mt-[4.6%] ml-[22%] w-[49.5%];

  .vplay-if {
    @apply bg-white w-full h-full;

    #ifs {
      @apply w-full h-800px;
    }
  }
}

// @screen xp {
//   .vplay-2 {
//     @apply hidden;
//   }

//   .vplay .vplay-main .vplay-1 {
//     width: 100%;
//     height: 90%;
//   }
// }
</style>
