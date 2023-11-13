<script lang="ts" setup>
import { useUserInfo } from '@hooks/useUserInfo'
import { useRouter } from '@hooks/useRouter'
import { uiSettings } from '@store/modules/uiSettings'
import { useApi } from '@/api/useApi'

const { InterfaceApi } = useApi()
const { getUserName } = useUserInfo()
const { routers } = useRouter()
const ui = uiSettings()
function setRight(visible: boolean) {
  ui.rightSidebar = visible
}
const rData: any = ref([])
const isVisible: any = ref(false)

const cliAbout = () => {
  isVisible.value = true
}
/**
 * @description: 侧边栏点击事件
 * @param {number} index
 * @return {*}
 */
function getTopic(index: number): void {
  ui.sideIndex = index
}

const skip = (path: string) => {
  switch (path) {
    case '/article/column':
      setRight(true)
      routers(path)
      break
    case '/qarticle':
      routers(path)
      break
    case '/diary':
      setRight(true)
      routers(path)
      break
    case '/video':
      setRight(true)
      routers(path)
      break
    case '/favorite':
      routers(path)
      break
    case '/BlogCircles':
      routers(path)
      break
    case '/book':
      setRight(true)
      routers(path)
      break
    case '/ListContent':
      setRight(true)
      routers(path)
      break
    case '/Admin-index/ArticleTable':
      setRight(true)
      routers(path)
      break

    default:
      break
  }
}
onMounted(async () => {
  const data = await InterfaceApi.getCondition(0, 'kai', 'sidebar', true)
  rData.value = data.data.data

  getTopic(ui.sideIndex)
})
</script>
<template>
  <div v-show="ui.leftSidebar" class="side">
    <div
      v-for="(r, index) in rData"
      :key="index"
      class="side-list"
      :class="ui.sideIndex == index ? 'active' : ''"
      @click="getTopic(<number>index)">
      <div v-if="r.identity" class="flex items-center" @click="skip(r.path)">
        <div v-if="r.path == '/article/column'" i-typcn-home h-6 w-6 />
        <div v-if="r.path == '/qarticle'" i-typcn-book h-6 w-6 />
        <div v-if="r.path == '/diary'" i-typcn-document h-6 w-6></div>
        <div v-if="r.path == '/video'" i-typcn-headphones h-6 w-6></div>
        <div v-if="r.path == '/favorite'" i-typcn-flash-outline h-6 w-6></div>
        <div v-if="r.path == '/BlogCircles'" i-typcn-flag h-6 w-6></div>
        <div v-if="r.path == '/book'" i-typcn-bookmark h-6 w-6></div>
        <div v-if="r.path == '/ListContent'" i-typcn-refresh-outline h-6 w-6></div>
        <div v-if="r.path == '/Admin-index/ArticleTable'" i-typcn-arrow-right-outline h-6 w-6></div>
        <div>{{ r.name }}</div>
      </div>
    </div>

    <div class="side-ab">
      <div v-show="getUserName() !== 'name'" text="center lg cool-gray-50" bg="slate-500">
        <span @click="cliAbout()">关于我</span>
      </div>
      <div class="mt-1 flex">
        <div class="ab-svg" i-fxemoji-newmoonwithface></div>
        <div class="ab-svg" i-fxemoji-fullmoonwithface></div>
        <div class="ab-svg" i-fxemoji-medicalmask></div>
        <div class="ab-svg" i-fxemoji-angry></div>
        <div class="ab-svg" i-fxemoji-anguish></div>
        <div class="ab-svg" i-fxemoji-relieved></div>
        <div class="ab-svg" i-fxemoji-smiletongue></div>
        <div class="ab-svg" i-fxemoji-sunglasses></div>
      </div>
      <div class="h-25px text-center text-cool-gray-50">SN © 2021.Rights Reserved.</div>
      <div class="h-25px text-center text-cool-gray-50">粤ICP备19130826号-1</div>
    </div>
  </div>

  <the-sidebar-about :visible="isVisible" @close-model="isVisible = false"></the-sidebar-about>
</template>

<style lang="scss">
.side {
  @apply h-93vh;
  @apply bg-white rounded relative pt-5 mt-1;

  @include media-base {
    display: none;
  }

  .side-list {
    @apply text-center text-base w-[72%] m-auto;
    @apply cursor-pointer transition duration-500 hover:bg-gray-200 rounded;

    div {
      @apply my-6px ml-1 justify-start;
    }
  }

  .side-list.active {
    @apply text-cool-gray-50 bg-blue-500;
  }

  .side-ab {
    @apply absolute bottom-1 h-110px w-full rounded;
    @apply bg-gray-400;

    .ab-svg {
      @apply h-6 w-6;
    }
  }
}
</style>
