<script lang="ts" setup>
import { VideoApi } from '@/api'

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
  <section>
    <video-play-side></video-play-side>
    <div class="vplay">
      <div class="vplay-if">
        <iframe id="ifs" :src="resData.URL" border="0" framespacing="0" allowfullscreen="true"></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vplay {
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
