<script lang="ts" setup>
import { IntOne } from '@/api/data/interData'
import { method, state } from '../data/index'

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
        <div></div>
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
  @apply flex flex-wrap;

  .ocont-list {
    @apply m-auto h-150px mt-1 w-[31%] relative bg-white;
    @apply rounded cursor-pointer shadow;

    .ocont-list-cont {
      @apply h-full w-full;

      .ocont-list-cont-title {
        @apply bg-gray-100 h-[24%] m-1 text-lg px-1;
        @include line-one;
      }

      .ocont-list-cont-text {
        @apply font-thin h-[54%] m-1 text-base p-1 px-2;
        @include line-numbers(4);
      }
    }
  }
}
</style>
