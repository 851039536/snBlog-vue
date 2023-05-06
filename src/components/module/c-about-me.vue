<script lang="ts" setup>
import user2 from '@assets/svg/components/user2.svg?component'
defineProps({
  name: {
    type: Boolean,
    require: true,
    default: false
  }
})

function myNewFunction(value: boolean) {
  return value
}
</script>
<template>
  <c-modal-dialog :visible="name" title="关于我" @close-model="myNewFunction(name)">
    <div class="c-about-me">
      <div class="svg">
        <user2></user2>
      </div>

      <div text="center xl">一个不会前端的前端</div>
      <div display="flex" justify="center">
        <div i-fxemoji-newmoonwithface h-25px w-25px></div>
        <div i-fxemoji-fullmoonwithface h-25px w-25px></div>
        <div i-fxemoji-medicalmask h-25px w-25px></div>
        <div i-fxemoji-angry h-25px w-25px></div>
        <div i-fxemoji-anguish h-25px w-25px></div>
        <div i-fxemoji-relieved h-25px w-25px></div>
        <div i-fxemoji-smiletongue h-25px w-25px></div>
        <div i-fxemoji-sunglasses h-25px w-25px></div>
      </div>
      <div text="center lg slate-600">
        一位热爱生活、全栈开发者, 表面腼腆,内心奔放。 建站缘由 搭建一个属于自己的世界。
      </div>

      <div class="time">
        <div>人生已过去</div>
        <div>18.2年15832.2时</div>
        <div>剩余时间</div>
        <div>61.9年 542936.7时</div>
        <div class="time-text">
          <div class="mr-2">人生进度条:</div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 animate-pulse bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 animate-pulse bg-emerald-400"></div>
          <div class="mr-2px h-4 w-4 animate-pulse bg-emerald-400"></div>
        </div>
      </div>
    </div>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.c-about-me {
  @apply w-430px;

  .svg {
    @apply m-auto mb-3 w-100px;
  }

  .time {
    @apply mt-5 mt-5 text-center text-base;

    .time-text {
      @apply flex items-center;
    }
  }
}
</style>
