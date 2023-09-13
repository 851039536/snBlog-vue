<script lang="ts" setup>
import { useNavigationApi } from '@hooks/http'
import { useEventKey } from '@hooks/useEventKey'
import { useRouter } from '@hooks/useRouter'
import { useUiSetStore } from '@store/modules/uiSettings'
const { addKeyup, removeKeyup } = useEventKey()
const ui = useUiSetStore()

const { getPaging: navigationPaging } = useNavigationApi()
const { winUrl } = useRouter()
const vi = ref(false)
const vi2 = ref(true)

const searchName = ref()
const navTab = ref(['常用工具', '软件', '图标', '博客', '框架', 'gpt', '灵感'])

const escape = (e: any) => {
  if (e.key === 'Escape') {
    removeKeyup(escape)
  }
}

function handleMouseOver() {
  // 鼠标进入<div>元素时执行的代码
  vi.value = true
  vi2.value = false
  addKeyup(escape)
}
function handleMouseLeave() {
  // 鼠标离开<div>元素时执行的代码

  vi.value = false
  vi2.value = true
}
const nData: any = ref([])

const filterNav = async (name: string) => {
  const ret = await navigationPaging(1, name, 1, 200)
  nData.value = ret.data.data
}

onMounted(async () => {
  await filterNav('常用工具')
})
</script>
<template>
  <div
    v-if="vi2"
    i-bytesize-chevron-left
    h-5
    w-5
    class="fixed bottom-[45%] right-0 rounded"
    @mouseover="handleMouseOver"
    @click="vi = true"></div>
  <transition name="slidex-fade">
    <div v-if="vi" class="fixed bottom-[40%] right-0 rounded" @mouseleave="handleMouseLeave">
      <div class="test-cont">
        <div>gitee</div>
        <div>github</div>
        <div @click="ui.fTools = true">工具</div>
      </div>
    </div>
  </transition>
  <transition name="slidey-fade">
    <div v-if="ui.fTools" class="fo-nav flex">
      <div class="w-1/3">
        <input
          v-model="searchName"
          v-focus
          placeholder="Search"
          type="search"
          class="input mx-3 mt-6"
          @input="handleMouseLeave()" />

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
          class="h-15 w-25 rounded bg-emerald-500 text-center m-1 hover:text-white"
          style="line-height: 60px"
          @click="ui.fToolsModal = true">
          进制转换
        </div>
        <div
          class="h-15 w-25 rounded bg-emerald-500 text-center m-1 hover:text-white"
          style="line-height: 60px"
          @click="ui.fToolsModal = true">
          加解密
        </div>
      </div>
      <div class="w-1/3 bg-yellow-400"></div>
    </div>
  </transition>
  <footer-convert></footer-convert>
</template>

<style lang="scss" scoped>
.test-cont {
  @apply w-16 bg-white rounded p-1 cursor-pointer;

  div {
    @apply text-center  hover:text-blue-400;
  }
}

.fo-nav {
  @apply fixed bottom-0 right-0 z-10 h-40% w-full bg-white;

  border: 1.2px solid rgb(190 179 179); /* 设置边框样式 */
}

.input {
  width: 50%;
  height: 40px;
  padding: 0 1rem 0 0.5rem;
  color: #0d0c22;
  line-height: 28px;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  transition: 0.3s ease;

  @apply mx-2 text-base;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  background-color: #fff;
  border-color: rgb(128 121 124 / 40%);
  outline: none;
  box-shadow: 0 0 0 2px rgb(194 176 183 / 10%);
}
</style>
