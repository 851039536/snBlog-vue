<script lang="ts" setup>
import { leave } from '@/api/index'

const state: any = reactive({
  result: []
})

const GetApi = async () => {
  state.result = await (await leave.GetAllAsync()).data
}
onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <div class="leave">
    <div class="leave-main" data-title="气泡背景墙">
      <ul class="bubble-bgwall">
        <li v-for="res in state.result" :key="res.id">
          {{ res.text }}
        </li>
      </ul>
      <div class="bruce-2">
        <form class="max-w-sm w-full">
          <div class="md:flex md:items-center">
            <div class="md:w-2/3">
              <input
                id="inline-full-name"
                class="rounded bg-gray-200 border-2 border-gray-200 leading-tight w-full py-2 px-4 text-gray-700 appearance-none focus:bg-white focus:outline-none focus:border-purple-500"
                type="text"
                value="666666666666！" />
            </div>
            <button
              class="rounded font-bold bg-purple-500 shadow text-white py-2 px-3 hover:bg-purple-400 focus:outline-none focus:shadow-outline"
              type="button">
              Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.leave {
  @apply absolute s-hw;

  .leave-main {
    @apply h-full relative;

    background-image: linear-gradient(270deg, #e96dc4, #3367eb);

    .bubble-bgwall {
      @apply overflow-hidden relative;
      @apply m-auto s-hw;

      // max-width: 1200px;

      li {
        position: absolute;
        bottom: -200px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        color: #ccc;
        background-color: rgba(#fff, 0.15);
        border-radius: 10px;
        animation: bubble 15s infinite;

        &:nth-child(1) {
          left: 3%;
        }

        &:nth-child(2) {
          left: 6%;
          animation-duration: 7s;
          animation-delay: 2s;
        }

        &:nth-child(3) {
          left: 9%;
          animation-delay: 4s;
        }

        &:nth-child(4) {
          left: 12%;
          background-color: rgba(#fff, 0.3);
          animation-duration: 8s;
        }

        &:nth-child(5) {
          left: 15%;
        }

        &:nth-child(6) {
          left: 18%;
          background-color: rgba(#fff, 0.2);
          animation-delay: 3s;
        }

        &:nth-child(7) {
          left: 21%;
          animation-delay: 2s;
        }

        &:nth-child(8) {
          left: 24%;
          font-size: 12px;
          animation-duration: 15s;
          animation-delay: 4s;
        }

        &:nth-child(9) {
          left: 27%;
          font-size: 12px;
          background-color: rgba(#fff, 0.3);
          animation-duration: 12s;
          animation-delay: 2s;
        }

        &:nth-child(10) {
          left: 30%;
          animation-delay: 3s;
        }

        &:nth-child(11) {
          left: 33%;
          animation-delay: 9s;
        }

        &:nth-child(12) {
          left: 36%;
          animation-delay: 4s;
        }

        &:nth-child(13) {
          left: 39%;
          animation-delay: 7s;
        }

        &:nth-child(14) {
          left: 42%;
          animation-delay: 5s;
        }

        &:nth-child(15) {
          left: 45%;
          animation-delay: 3s;
        }

        &:nth-child(16) {
          left: 48%;
          animation-delay: 2s;
        }

        &:nth-child(17) {
          left: 51%;
          animation-delay: 5s;
        }

        &:nth-child(18) {
          left: 54%;
          animation-delay: 4s;
        }

        &:nth-child(19) {
          left: 57%;
          animation-delay: 3s;
        }

        &:nth-child(20) {
          left: 60%;
          animation-delay: 4s;
        }

        &:nth-child(21) {
          left: 62%;
          animation-delay: 5s;
        }

        &:nth-child(22) {
          left: 65%;
          animation-delay: 6.5s;
        }

        &:nth-child(23) {
          left: 68%;
          animation-delay: 2.5s;
        }

        &:nth-child(24) {
          left: 71%;
          animation-delay: 7.5s;
        }

        &:nth-child(25) {
          left: 74%;
          animation-delay: 5s;
        }

        &:nth-child(26) {
          left: 76%;
          animation-delay: 2.5s;
        }

        &:nth-child(27) {
          left: 80%;
          animation-delay: 2.5s;
        }

        &:nth-child(28) {
          left: 83%;
          animation-delay: 3.5s;
        }

        &:nth-child(29) {
          left: 85%;
          animation-delay: 8.5s;
        }

        &:nth-child(30) {
          left: 88%;
          animation-delay: 1.8s;
        }

        &:nth-child(31) {
          left: 90%;
          animation-delay: 5.4s;
        }

        &:nth-child(32) {
          left: 93%;
          animation-delay: 2.9s;
        }

        &:nth-child(33) {
          left: 97%;
          animation-delay: 2.8s;
        }

        &:nth-child(34) {
          left: 95%;
          animation-delay: 3.5s;
        }
      }
    }

    .bruce-2 {
      position: absolute;
      top: 40%;
      left: 42%;
      width: 20%;
      border-radius: 5px;
    }
  }
}

@keyframes bubble {
  0% {
    transform: translateY(0) rotate(1deg);
    opacity: 0.5;
  }

  25% {
    transform: translateY(-400px) rotate(5deg);
    opacity: 0.75;
  }

  50% {
    transform: translateY(-600px) rotate(10deg);
    opacity: 1;
  }

  100% {
    transform: translateY(-1000px) rotate(160deg);
    opacity: 0;
  }
}
</style>
