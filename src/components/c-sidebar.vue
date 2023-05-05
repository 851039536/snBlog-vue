<script lang="ts" setup>
import { InterfaceApi } from '@/api'
import { userInfo } from '@/utils/user/UserInfo'
import { sideVisible, sideIndex } from '@/utils/common/IdentityData'
import { routers } from '@/utils/route'
import { storage } from '@/utils/storage/storage'

const rData: any = ref([])
const isVisible: any = ref(false)

const cliAbout = () => {
  isVisible.value = true
}
function getTopic(index: number) {
  sideIndex.value = index
}
onMounted(async () => {
  rData.value = await (await InterfaceApi.getCondition(0, storage.get(userInfo.NAME), 'sidebar', true)).data
  getTopic(sideIndex.value)
})
</script>
<template>
  <div v-show="sideVisible" class="lside">
    <div
      v-for="(r, index) in rData"
      :key="index"
      class="lside-list"
      :class="sideIndex == index ? 'active' : ''"
      @click="getTopic(index)">
      <div v-if="r.identity" class="flex" @click="routers(r.path)">
        <div v-if="r.path == '/article/column'" class="i-fxemoji-linksymbol" />
        <div v-if="r.path == '/qarticle'" i-flat-color-icons-reddit />
        <div v-if="r.path == '/one'" i-fxemoji-dog></div>
        <div v-if="r.path == '/video'" i-flat-color-icons-headset></div>
        <div v-if="r.path == '/favorite'" i-fxemoji-wiredkeyboard></div>
        <div v-if="r.path == '/BlogCircles'" i-fxemoji-cyclone></div>
        <div v-if="r.path == '/book'" i-fxemoji-notebookdecorativecover></div>
        <div v-if="r.path == '/ListContent'" i-fxemoji-onebuttonmouse></div>
        <div v-if="r.path == '/Login'" i-fxemoji-maximize></div>
        {{ r.name }}
      </div>
    </div>
    <div v-show="storage.get(userInfo.NAME) === userInfo.NAME" bg-gray-200 text-lg>
      <div m-auto w-17 flex cursor-pointer hover:text-cool-gray-50>
        <div i-fxemoji-bolt mr-1 mt-5px h-5 w-5></div>
        <div>登录</div>
      </div>
    </div>

    <div
      v-show="storage.get(userInfo.NAME) !== userInfo.NAME"
      text-sm
      class="absolute bottom-1 h-110px w-full bg-slate-400">
      <div text="center lg cool-gray-50" bg="slate-500">
        <span @click="cliAbout()">关于我</span>
      </div>
      <div class="mt-1 flex">
        <div i-fxemoji-newmoonwithface h-25px w-25px></div>
        <div i-fxemoji-fullmoonwithface h-25px w-25px></div>
        <div i-fxemoji-medicalmask h-25px w-25px></div>
        <div i-fxemoji-angry h-25px w-25px></div>
        <div i-fxemoji-anguish h-25px w-25px></div>
        <div i-fxemoji-relieved h-25px w-25px></div>
        <div i-fxemoji-smiletongue h-25px w-25px></div>
        <div i-fxemoji-sunglasses h-25px w-25px></div>
      </div>
      <div class="h-25px text-center text-cool-gray-50">SN © 2021.Rights Reserved.</div>
      <div class="h-25px text-center text-cool-gray-50">粤ICP备19130826号-1</div>
    </div>
  </div>

  <c-about-me :visible="isVisible" @close-model="isVisible = false"></c-about-me>
</template>

<style lang="scss">
.lside {
  // font-family: PuHuiTiBASE;

  @apply h-[91%] top-[9%] left-[12%] w-195px fixed;
  @apply bg-white rounded shadow;

  .lside-list {
    @apply text-center text-lg;
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
