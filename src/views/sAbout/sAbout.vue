<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { Routers } from '@/hooks/routers'
import { user } from '@/api/index'
import toScss from '@/hooks/dynamicScss'

interface State {
  activeClass: string
  errorClass: string
  bounceIn: string
  backInDown: string
  fadeInTopRight: string
  fadeIn: string
  User: any
}
const state: State = reactive({
  activeClass: 'animate__animated',
  errorClass: 'animate__fadeInRightBig',
  bounceIn: 'animate__bounceIn',
  backInDown: 'animate__backInDown',
  fadeInTopRight: 'animate__fadeInTopRight',
  fadeIn: 'animate__fadeIn',
  User: []
})

const GetId = async (id: number) => {
  switch (id) {
    case 1:
      await Routers('/index/column')
      break
    case 2:
      await Routers('/Svideo')
      break
    case 3:
      await Routers('/Talk')
      break
    case 4:
      await Routers('/favorite')
      break
    case 5:
      await Routers('/Leave')
      break
    default:
      break
  }
}
onMounted(async () => {
  await toScss('sAbout')
  await user.GetByIdAsync(4).then((res: any) => {
    state.User = res.data
  })
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="about_main" :class="[state.activeClass, state.fadeIn]">
    <div class="about_content">
      <!-- 背景图+介绍 -->
      <div class="about-bg">
        <div class="about-1" :class="[state.activeClass, state.backInDown]">
          <div class="about-1-1">
            <div class="about-1-1-1">
              <img src="@/assets/img/bb.jpg" />
            </div>
          </div>
          <div class="about-1-2">
            <a>{{ state.User['brief'] }}</a>
          </div>
          <div class="flex items-center about-1-3">
            <div class="flex-1 about-1-3-1"></div>
            <div class="flex-1 about-1-3-1"></div>
            <div class="flex-1 about-1-3-1"></div>
            <div class="flex-1 about-1-3-1"></div>
          </div>
        </div>

        <div class="flex flex-wrap about-2">
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(1)">文章</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(2)">娱乐</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(3)">日志</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(4)">分享</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(5)">留言</a>
          </div>
        </div>
      </div>
      <!-- end 背景图+介绍 -->

      <!-- 关于我：  -->
      <div class="bg-2" :class="[state.activeClass, state.errorClass]">
        <div class="bg-2-1">
          <div class="bg-2-1-1">
            <h2>关于我：</h2>
          </div>
          <div class="bg-2-1-2">表面腼腆,内心奔放</div>
        </div>
        <div class="bg-2-2">
          <div class="bg-2-2-1">
            <h2>关于本站：</h2>
          </div>
          <div class="bg-2-2-2">
            blog由本人制作,本站基于TailWindcss,Vue3+ts,Net5Api
            开发搭建，部署于腾讯云，备案于腾讯云，建站初衷是想学习记录生活。
          </div>
        </div>
        <div class="bg-2-3">
          <div class="bg-2-3-1">
            <h2>建站缘由</h2>
          </div>
          <div class="bg-2-3-2">搭建一个属于自己的世界。</div>
        </div>
      </div>
      <!-- end 关于我：  -->
    </div>
  </div>
</template>
