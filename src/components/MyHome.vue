<script lang="ts" setup>
import { routers } from '@/utils/route'
import { useUiSetStore } from '@store/modules/uiSettings'
const uiSettings = useUiSetStore()

uiSettings.uiHeadVisible = false
uiSettings.uiLoadingVisible = false
</script>

<template>
  <section class="fixed left-0 top-0 h-full w-full bg-white">
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
          <a href="#" class="social-button github">
            <svg class="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19">
              <path
                d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
            </svg>
          </a>
          <a href="#" class="social-button linkedin">
            <svg
              t="1666248904275"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              p-id="4518"
              width="55"
              height="45">
              <path
                d="M689.6 347.7c11.7 0 23.2 0.9 34.6 2.1C693.1 206.5 538.2 100 361.5 100 163.9 99.9 2 233.2 2 402.5c0 97.7 53.9 177.9 143.9 240.1l-36 107 125.7-62.4c45 8.8 81.1 17.9 125.9 17.9 11.3 0 22.4-0.5 33.6-1.4C388 680 384 655 384 629.2c0-155.4 134.8-281.5 305.6-281.5z m-193.3-96.5c27.1 0 45 17.6 45 44.4 0 26.7-17.9 44.5-45 44.5-27 0-54-17.9-54-44.5 0.1-26.8 27.1-44.4 54-44.4z m-251.6 88.9c-27 0-54.2-17.9-54.2-44.5 0-26.8 27.2-44.4 54.2-44.4 26.9 0 44.9 17.6 44.9 44.4 0 26.7-17.9 44.5-44.9 44.5z"
                fill="#1BD66C"
                p-id="4519"></path>
              <path
                d="M1022 630.3c0-142.2-143.8-258.2-305.4-258.2-171.1 0-305.8 115.9-305.8 258.2 0 142.4 134.7 258.1 305.8 258.1 35.8 0 71.9-8.9 107.8-17.8L923 924l-27-88.9c72.2-53.5 126-124.6 126-204.8z m-404.5-44.5c-17.9 0-36-17.6-36-35.6 0-17.7 18.1-35.6 36-35.6 27.2 0 45 17.8 45 35.6 0 18-17.8 35.6-45 35.6z m197.7 0c-17.8 0-35.7-17.6-35.7-35.6 0-17.7 17.9-35.6 35.7-35.6 27 0 45 17.8 45 35.6 0 18-18 35.6-45 35.6z"
                fill="#EFF3F9"
                p-id="4520"></path>
            </svg>
          </a>
          <a href="#" class="social-button facebook">
            <svg
              t="1666248855271"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              p-id="2370"
              width="45"
              height="45">
              <path
                d="M773.9392 301.8752m-200.0384 0a200.0384 200.0384 0 1 0 400.0768 0 200.0384 200.0384 0 1 0-400.0768 0Z"
                fill="#40ECCB"
                p-id="2371"></path>
              <path
                d="M924.4672 706.2528a24.32 24.32 0 0 1-24.2688 24.2688h-145.7664a24.3712 24.3712 0 0 0-24.2688 24.32 24.2688 24.2688 0 0 0 24.2688 24.2688h48.5888a24.32 24.32 0 0 1 24.2688 24.32 24.32 24.32 0 0 1-24.2688 24.2688h-64.512A388.7616 388.7616 0 0 1 122.88 390.4512h-48.5888a24.32 24.32 0 0 1 0-48.5888h97.28a24.2688 24.2688 0 0 0 6.8096-47.5648l0.768-0.9728H122.88a24.32 24.32 0 1 1 0-48.5888h101.632a388.7616 388.7616 0 0 1 619.52 437.248h56.32a24.32 24.32 0 0 1 24.1152 24.2688z"
                fill="#43CEED"
                p-id="2372"></path>
              <path
                d="M294.5024 575.744c-15.36 38.0928-18.2784 74.0864-5.9392 80.5376 8.6016 4.8128 22.5792-5.888 35.4816-25.2416a106.1888 106.1888 0 0 0 35.4304 55.8592c-18.7904 6.9632-31.1808 18.7904-31.1808 31.6416 0 21.504 33.3312 39.2192 74.1376 39.2192 37.0176 0 67.6352-13.9776 73.5232-32.768h8.6016c5.9392 18.7904 36.5056 32.768 73.5744 32.768 41.3184 0 74.0864-17.2032 74.0864-39.2192 0-12.8512-12.3392-24.6784-31.1296-31.6416a106.1888 106.1888 0 0 0 35.4304-55.8592c12.9024 19.3536 26.3168 30.0544 35.4304 25.2416 12.9024-6.4512 10.24-42.9568-5.888-80.5376-12.3392-29.5424-28.9792-51.5584-41.8816-56.32 0-1.6384 0.512-3.7888 0.512-5.9392a58.368 58.368 0 0 0-8.5504-30.72v-2.1504a32.1024 32.1024 0 0 0-3.2256-14.5408C609.6896 389.12 560.2816 327.68 480.256 327.68S350.8736 389.12 347.648 466.176a32.1024 32.1024 0 0 0-3.2256 14.5408v2.1504a57.9584 57.9584 0 0 0-8.6016 30.72v5.9392c-11.776 4.6592-28.9792 26.1632-41.3184 56.2176z"
                fill="#FFFFFF"
                p-id="2373"></path>
            </svg>
          </a>
          <a href="#" class="social-button instagram">
            <svg
              t="1666249077181"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              p-id="7327"
              width="45"
              height="45">
              <path
                d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                fill="#C71D23"
                p-id="7328"></path>
            </svg>
          </a>
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
  background-color: #333;
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
