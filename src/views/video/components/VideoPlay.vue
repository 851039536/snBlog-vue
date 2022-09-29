<script lang="ts" setup>
import { video } from '@/api'

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
  await video.GetTypeAsync(1, resData.typeName, true).then((res: any) => {
    resData.resultData = res.data
  })
  await video.GetByIdAsync(resId.id, true).then((res: any) => {
    resData.URL = res.data.url
  })
}

const videos = async (vid: number) => {
  await video.GetByIdAsync(vid, true).then((res: any) => {
    resData.URL = res.data.url
  })
}
GetApi()
</script>

<template>
  <section>
    <s-header></s-header>
    <div class="vplay">
      <div class="vplay-main">
        <div class="vplay-2">
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

        <div class="vplay-1">
          <iframe
            id="if"
            :src="resData.URL"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vplay {
  @apply h-[90%] top-[8.5%] left-[5%] w-[90%] fixed;

  .vplay-main {
    @apply flex;
    @include initialize(100%, 100%, null, null, null, null, #ffffff);

    .vplay-1 {
      @include w-h(80%, 100%);
      @apply m-2 p-1;

      #if {
        margin: 0 auto;

        @include w-h(100%, 100%);
      }
    }

    .vplay-2 {
      width: 19%;

      @apply cursor-pointer overflow-auto;

      .vplay-2-1 {
        @include w-h(100%, 185px);
        @apply shadow mb-1;

        .vplay-2-1-1 {
          height: 65%;

          img {
            @include w-h(100%, 115px);
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
