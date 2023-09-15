<script lang="ts" setup>
import { useNavigationApi } from '@hooks/http'
import { useRouter } from '@hooks/useRouter'
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()

const { getPaging: navigationPaging } = useNavigationApi()
const { winUrl } = useRouter()

const searchName = ref()
const navTab = ref(['常用工具', '软件', '图标', '博客', '框架', 'gpt', '灵感'])

const nData: any = ref([])

const filterNav = async (name: string) => {
  const ret = await navigationPaging(1, name, 1, 200)
  nData.value = ret.data.data
}

const switchFun = (idex: number) => {
  switch (idex) {
    case 1:
      ui.fToolsQR = false
      ui.fToolsModal = true
      break
    case 2:
      ui.fToolsModal = false
      ui.fToolsQR = true
      break
    default:
      break
  }
}

onMounted(async () => {
  await filterNav('常用工具')
})
</script>
<template>
  <footer-mouse></footer-mouse>
  <transition name="slidey-fade">
    <div v-if="ui.fTools" class="fo-nav flex">
      <div class="w-1/3">
        <input v-model="searchName" v-focus placeholder="Search" type="search" class="input mx-3 mt-6" />

        <div class="mx-3 my-2 flex cursor-pointer text-base">
          <div
            v-for="(item, index) in navTab"
            :key="index"
            class="mr-1 rounded bg-blue-400 px-1 shadow hover:text-white">
            <span @click="filterNav(item)">{{ item }}</span>
          </div>
        </div>
        <div class="mx-3 mt-1 flex flex-wrap">
          <button v-for="(item, index) in nData" :key="index" class="m-2px hover:text-red">
            <span @click="winUrl(item.url)">{{ item.name }}</span>
          </button>
        </div>
      </div>

      <div class="w-1/3 flex flex-wrap cursor-pointer text-base">
        <div
          class="h-15 w-25 rounded bg-emerald-300 text-center m-1 hover:text-white"
          style="line-height: 60px"
          @click="switchFun(1)">
          进制转换
        </div>
        <div
          class="h-15 w-25 rounded bg-blue-300 text-center m-1 hover:text-white"
          style="line-height: 60px"
          @click="switchFun(2)">
          二维码
        </div>
        <div
          class="h-15 w-25 rounded bg-blue-300 text-center m-1 hover:text-white"
          style="line-height: 60px"
          @click="switchFun(2)">
          键盘事件
        </div>
      </div>
      <div class="w-1/3 bg-yellow-400"></div>
    </div>
  </transition>
  <footer-convert></footer-convert>
  <footer-q-r></footer-q-r>
</template>

<style lang="scss" scoped>
.fo-nav {
  @apply fixed bottom-0 right-0 z-10 h-[40%] w-full bg-white;

  border: 1.2px solid rgb(190 179 179); /* 设置边框样式 */
}

.input {
  width: 50%;
}
</style>
