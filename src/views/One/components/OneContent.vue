<script lang="ts" setup>
import { IntOne } from '@/api/data/interData'
import { method, state } from '../data/index'

defineProps({
  resultData: {
    type: Array as () => Array<IntOne>,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="one-content">
    <div class="one-content-div" v-for="res in resultData" :key="res.id">
      <div class="one-content-div-frame">
        <p class="one-content_div_frame_title">
          <span @click="method.setModal1Visible(true, res.id)">
            {{ res.title }}
          </span>
        </p>
        <p class="one-content-div-frame-text">{{ res.text }}</p>
        <div></div>
      </div>
    </div>
  </div>

  <div>
    <a-modal
      v-model:visible="state.modal2Visible"
      :title="state.text.title"
      centered
      cancelText="赞"
      :closable="false"
      okText="关闭"
      @cancel="method.give(state.text.id)"
      @ok="state.modal2Visible = false"
    >
      <p>{{ state.text.text }}</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped>
.one-content {
  @apply flex flex-wrap;

  .one-content-div {
    @apply m-auto h-150px mt-1 w-[31%] relative;
    @apply rounded cursor-pointer shadow;

    .one-content-div-frame {
      @apply h-full w-full;

      .one-content_div_frame_title {
        @apply bg-gray-100 h-[24%] m-1 text-lg px-1;
        @include line-one;
      }

      .one-content-div-frame-text {
        @apply font-thin h-[54%] m-1 text-base p-1 px-2;
        @include line-numbers(4);
      }
    }
  }
}
</style>
