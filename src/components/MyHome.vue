<script lang="ts" setup>
import { useRouter } from '@hooks/useRouter'
import { useUiSetStore } from '@store/modules/uiSettings'
const { routers } = useRouter()
const ui = useUiSetStore()

ui.uiHeadVisible = false
ui.uiLoadingVisible = false
</script>

<template>
  <section class="fixed left-0 top-0 z-10 h-full w-full bg-white">
    <div class="my-home">
      <div class="home-cont">
        <div class="text-[3rem] text-gray-700">SN BLOG</div>
        <div class="mt-4 text-center text-lg">
          <div>一位热爱生活、全栈开发者,</div>
          <div>表面腼腆,内心奔放。</div>
          <div>建站缘由 搭建一个属于自己的世界。</div>
          <div>基于windiCSS,vue3+ts,NetApi 开发,建站初衷是想学习记录生活。</div>
        </div>
        <div class="mb-5 mt-5 text-lg">
          <button class="go" @click="routers('/article/column')">Go</button>
        </div>

        <div class="social-buttons">
          <a href="#" class="social-button github i-logos-github-icon"></a>
          <a href="#" class="social-button linkedin i-logos-c-sharp"></a>
          <a href="#" class="social-button facebook i-logos-unocss"></a>
          <a href="#" class="social-button instagram i-logos-vue"></a>
        </div>

        <div class="mt-5 text-lg">
          <p>
            SN © 2021.Rights Reserved.
            <a href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.my-home {
  // 居中
  @apply top-1/2 left-1/2 fixed;

  transform: translate(-50%, -50%);

  .home-cont {
    @apply flex p-2 justify-center;

    flex-direction: column;
    align-items: center;
    min-height: 300px;
  }
}

button {
  position: relative;
  z-index: 1;
  padding: 0.5em 1em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236deg 32% 26%);
  border: none;
  outline: none;
}

button::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #fc2f70;
  transform: scaleX(0);
  transform-origin: center right;
  transition: transform 0.25s ease-in-out;
  content: '';
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}

.social-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;

  // background-color: #f7f5f5;
  border-radius: 1em;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 4px #00000027;
  transition: 0.3s;
}

.social-button:hover {
  background-color: #f2f2f2;
  box-shadow: 0 0 6px 3px #00000027;
}

.social-buttons svg {
  height: 20px;
  transition: 0.3s;
}

.facebook {
  background-color: #3b5998;
}

.facebook svg {
  fill: #f2f2f2;
}

.facebook:hover svg {
  fill: #3b5998;
}

.github {
  background-color: rgb(105 97 97);
}

.github svg {
  width: 25px;
  height: 25px;
  fill: #f2f2f2;
}

.github:hover svg {
  fill: #333;
}

.linkedin {
  background-color: #0077b5;
}

.linkedin svg {
  fill: #f2f2f2;
}

.linkedin:hover svg {
  fill: #0077b5;
}

.instagram {
  background-color: #d8b1c7;
}

.instagram svg {
  fill: #f2f2f2;
}

.instagram:hover svg {
  fill: #c13584;
}
</style>
