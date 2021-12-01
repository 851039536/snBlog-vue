<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
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

const id = reactive({
  id: route.query.id
})

const GetApi = async () => {
  await video.GetTypeAsync(1, resData.typeName, true).then((res: any) => {
    resData.resultData = res.data
  })
  await video.GetByIdAsync(id.id, true).then((res: any) => {
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
  <s-header></s-header>
  <div class="video-play">
    <div class="video-play_main animate__animated animate__fadeIn">
      <div class="col-gap-4 video-play-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="video-play-2-1" v-for="res in resData.resultData" :key="res.id">
          <div class="video-play-2-1-1">
            <img src="@/assets/img/sp.png" />
          </div>
          <div class="video-play-2-1-2">
            <a @click="videos(res.id)">{{ res.title }}</a>
          </div>
          <div class="video-play-2-1-3">
            {{
              res.timeModified
                .toLocaleString()
                .replace(/T/g, ' ')
                .replace(/\.[\d]{3}Z/, '')
            }}
          </div>
        </div>
      </div>

      <div class="video-play-1">
        <iframe
          id="if"
          :src="resData.URL"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-play {
  @apply fixed w-full h-full;

  .video-play_main {
    @apply flex;

    @include initialize(93%, 91%, 3.5%, null, 3.5%, null, #ffffff);

    @apply shadow-sm rounded-sm;

    .video-play-1 {
      @include w-h(80%, 100%);

      @apply p-1 m-2;

      #if {
        margin: 0 auto;

        @include w-h(100%, 100%);
      }
    }

    .video-play-2 {
      width: 19%;

      @apply overflow-auto cursor-pointer;

      .video-play-2-1 {
        @include w-h(90%, 170px);

        @apply m-2 shadow rounded-sm;

        .video-play-2-1-1 {
          height: 65%;

          img {
            @include w-h(185px, 100px);
          }
        }

        .video-play-2-1-2 {
          height: 18%;

          @include line-one;

          @apply p-1 text-sm;
        }

        .video-play-2-1-3 {
          height: 17%;

          @apply p-1;
        }
      }
    }
  }
}

@screen xp {
  .video-play-2 {
    @apply hidden;
  }

  .video-play .video-play_main .video-play-1 {
    width: 100%;
    height: 90%;
  }
}
</style>
