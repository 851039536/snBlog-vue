<script lang="ts" setup>
import user2 from '@assets/svg/components/user2.svg?component'
defineProps({
  name: {
    type: Boolean,
    require: true,
    default: false
  }
})
</script>
<template>
  <c-modal-dialog :visible="name" title="关于我" @close-model="name">
    <div class="w420px">
      <div class="m-auto mb-3 w-100px">
        <user2></user2>
      </div>

      <div class="text-center text-xl">一个不会前端的前端</div>
      <div class="mt-3 flex items-center justify-center">
        <div i-fxemoji-newmoonwithface h-25px w-25px></div>
        <div i-fxemoji-fullmoonwithface h-25px w-25px></div>
        <div i-fxemoji-medicalmask h-25px w-25px></div>
        <div i-fxemoji-angry h-25px w-25px></div>
        <div i-fxemoji-anguish h-25px w-25px></div>
        <div i-fxemoji-relieved h-25px w-25px></div>
        <div i-fxemoji-smiletongue h-25px w-25px></div>
        <div i-fxemoji-sunglasses h-25px w-25px></div>
      </div>
      <div class="text-center text-lg text-slate-600">
        一位热爱生活、全栈开发者, 表面腼腆,内心奔放。 建站缘由 搭建一个属于自己的世界。
      </div>

      <div class="mt-5 text-center text-base">
        <div>人生已过去</div>
        <div>18.2年15832.2时</div>
        <div>剩余时间</div>
        <div>61.9年 542936.7时</div>
        <div class="flex items-center">
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

<!-- <style lang="scss" scoped></style> -->
