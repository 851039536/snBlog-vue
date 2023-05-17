<script lang="ts" setup>
import { IntOne } from '@/api/data/InterData'
import { method, state } from '../index'

defineProps({
  resultData: {
    type: Array as () => IntOne[],
    required: true,
    default: () => {
      return []
    }
  }
})
</script>

<template>
  <div class="ocont">
    <div v-for="res in resultData" :key="res.id" class="ocont-list">
      <div class="ocont-list-cont">
        <p class="ocont-list-cont-title">
          <span @click="method.setModal1Visible(true, res.id)">
            {{ res.title }}
          </span>
        </p>
        <p class="ocont-list-cont-text">{{ res.text }}</p>
        <p class="ocont-list-cont-text2">
          <span class="bg-yellow-100">1C</span>
          <span class="bg-fuchsia-100">123</span>
          <span class="bg-cyan-100">日记</span>
          <span class="bg-red-100">日记</span>
        </p>
      </div>
    </div>
  </div>

  <div>
    <a-modal
      v-model:visible="state.modal2Visible"
      :title="state.text.title"
      centered
      cancel-text="赞"
      :closable="false"
      ok-text="关闭"
      @cancel="method.give(state.text.id)"
      @ok="state.modal2Visible = false">
      <p>{{ state.text.text }}</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped>
.ocont {
  @apply grid grid-cols-3;

  .ocont-list {
    @apply m-auto h-140px mt-1 w-[97%] bg-white;
    @apply rounded cursor-pointer shadow;

    .ocont-list-cont {
      @apply h-full w-full;

      .ocont-list-cont-title {
        @apply h-[20%] m-1 text-lg px-1;
        @apply rounded bg-blue-100 hover:bg-blue-300 hover:text-white;
        @include line-one;
      }

      .ocont-list-cont-text {
        @apply font-thin h-[52%] m-1 text-base p-1 px-2;
        @include line-numbers(3);
      }

      .ocont-list-cont-text2 {
        @apply font-thin h-[54%] p-1 px-2;

        span {
          @apply m-1 px-1 rounded-none;
          @apply hover:text-white hover:bg-blue-400;
        }
      }
    }
  }
}
</style>
