<script lang="ts" setup>
import { interfacesApi } from '@/api'
import { hUser } from '@/hooks/commonly'
import { hSide, sideIndex } from '@/hooks/data'
import { routers } from '@/hooks/routers'
import { storage } from '@/utils/storage/storage'

const rData: any = ref([])
const isVisible: any = ref(false)

const cliTest = () => {
  isVisible.value = true
}
function getTopic(index: number) {
  sideIndex.value = index
}
onMounted(async () => {
  rData.value = await (await interfacesApi.GetType(0, storage.get(hUser.NAME), 'sidebar', true)).data
  getTopic(sideIndex.value)
})
</script>
<template>
  <div v-show="hSide" class="lside">
    <div
      v-for="(res, index) in rData"
      :key="index"
      class="lside-list"
      :class="sideIndex == index ? 'active' : ''"
      @click="getTopic(index)">
      <div v-if="res.identity" class="flex" @click="routers(res.path)">
        <div v-if="res.path == '/index/column'" i-fxemoji-linksymbol></div>
        <div v-if="res.path == '/tag'" i-fxemoji-emptynotepage></div>
        <div v-if="res.path == '/one'" i-fxemoji-dog></div>
        <div v-if="res.path == '/video'" i-flat-color-icons-video-file></div>
        <div v-if="res.path == '/favorite'" i-fxemoji-wiredkeyboard></div>
        <div v-if="res.path == '/BlogCircles'" i-fxemoji-cyclone></div>
        <div v-if="res.path == '/book'" i-fxemoji-notebookdecorativecover></div>
        <div v-if="res.path == '/ListContent'" i-fxemoji-onebuttonmouse></div>
        <div v-if="res.path == '/Login'" i-fxemoji-maximize></div>
        {{ res.title }}
      </div>
    </div>
    <div v-show="storage.get(hUser.NAME) === hUser.NAME" bg-gray-200 text-lg>
      <div flex m-auto w-17 cursor-pointer hover:text-cool-gray-50>
        <div i-fxemoji-bolt h-5 w-5 mt-5px mr-1></div>
        登录
      </div>
    </div>

    <div text-lg>
      <div flex m-auto w-17 cursor-pointer hover:text-cool-gray-50>
        <span @click="cliTest()">测试</span>
      </div>
    </div>

    <div text-sm class="absolute bottom-1 bg-slate-400 h-80px w-full">
      <div class="flex mt-1">
        <div i-fxemoji-newmoonwithface h-25px w-25px></div>
        <div i-fxemoji-fullmoonwithface h-25px w-25px></div>
        <div i-fxemoji-medicalmask h-25px w-25px></div>
        <div i-fxemoji-angry h-25px w-25px></div>
        <div i-fxemoji-anguish h-25px w-25px></div>
        <div i-fxemoji-relieved h-25px w-25px></div>
        <div i-fxemoji-smiletongue h-25px w-25px></div>
        <div i-fxemoji-sunglasses h-25px w-25px></div>
      </div>
      <div class="text-cool-gray-50 h-25px text-center">SN © 2021.Rights Reserved.</div>
      <div class="text-cool-gray-50 h-25px text-center">粤ICP备19130826号-1</div>
    </div>
  </div>
  <c-modal-dialog :visible="isVisible" title="用户登录" @close-model="isVisible = false"></c-modal-dialog>
</template>

<style lang="scss">
.lside {
  @apply h-[91%] top-[9%] left-[12%] w-195px fixed;
  @apply bg-white rounded shadow;

  .lside-list {
    @apply text-cool-gray-600 text-center text-lg;
    @apply cursor-pointer transition duration-500 hover:bg-blue-400 rounded;

    div {
      @apply m-1 py-1 justify-center items-center;
    }
  }

  .lside-list.active {
    @apply text-cool-gray-50 bg-blue-400;
  }
}

@media screen and (max-width: 768px) {
  .lside {
    display: none;
  }
}

@media screen and (min-width: 1366px) {
  .lside {
    @apply top-[10.9%] left-[7%];
  }
}

@media screen and (min-width: 1536px) {
  .lside {
    @apply top-[8.9%] left-[11%];
  }
}
</style>
