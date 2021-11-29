<!--
 * @Author: your name
 * @Date: 2020-12-17 08:49:57
 * @LastEditTime: 2021-11-15 15:40:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\videoplay.vue
-->
<script lang="ts" setup>
import { video } from '@/api'
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

interface State {
  videourl: string
  type: string
  newvideo: any
}
const state: State = reactive({
  videourl: '',
  type: '',
  newvideo: []
})

const id = reactive({
  id: route.query.id
})

const getvideo = async () => {
  await video.GetByIdAsync(id.id, true).then((res: any) => {
    state.videourl = res.data.url
    console.log('%c [  res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
    state.type = res.data.type.name
  })
  await video.GetTypeAsync(1, state.type, true).then((res: any) => {
    state.newvideo = res.data
    console.log('%c [ res.data ]', 'font-size:13px; background:pink; color:#bf2c9f;', res.data)
  })
}

const videos = async (id: number) => {
  await video.GetByIdAsync(id, true).then((res: any) => {
    state.videourl = res.data.vUrl
  })
}
onMounted(async () => {
  await getvideo()
})
</script>

<template>
  <div class="videoplay">
    <div class="videoplay_main animate__animated animate__fadeIn">
      <div class="col-gap-4 videoplay-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="videoplay-2-1" v-for="res in state.newvideo" :key="res.id">
          <div class="videoplay-2-1-1">
            <img src="@/assets/img/sp.png" />
          </div>
          <div class="videoplay-2-1-2">
            <a @click="videos(res.id)">{{ res.title }}</a>
          </div>
          <div class="videoplay-2-1-3">
            {{
              res.timeModified
                .toLocaleString()
                .replace(/T/g, ' ')
                .replace(/\.[\d]{3}Z/, '')
            }}
          </div>
        </div>
      </div>

      <div class="videoplay-1">
        <iframe
          id="if"
          :src="state.videourl"
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
@import '@/design/methodCss';
@import '@/design/uitl';

.videoplay {
  @apply fixed w-full h-full;

  .videoplay_main {
    @apply flex;

    @include initialize(93%, 91%, 3.5%, null, 3.5%, null, #ffffff);

    @apply shadow-sm rounded-sm;

    .videoplay-1 {
      @include w-h(80%, 100%);

      @apply p-1 m-2;

      #if {
        margin: 0 auto;

        @include w-h(100%, 100%);
      }
    }

    .videoplay-2 {
      width: 19%;

      @apply overflow-auto cursor-pointer;

      .videoplay-2-1 {
        @include w-h(90%, 170px);

        @apply m-2 shadow rounded-sm;

        .videoplay-2-1-1 {
          height: 65%;

          img {
            @include w-h(185px, 100px);
          }
        }

        .videoplay-2-1-2 {
          height: 18%;

          @include line-one;

          @apply p-1 text-sm;
        }

        .videoplay-2-1-3 {
          height: 17%;

          @apply p-1;
        }
      }
    }
  }
}

@screen xp {
  .videoplay-2 {
    @apply hidden;
  }

  .videoplay .videoplay_main .videoplay-1 {
    width: 100%;
    height: 90%;
  }
}
</style>
