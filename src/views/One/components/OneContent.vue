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
    width: 31%;
    height: 150px;

    @apply m-auto mt-1;
    @apply relative shadow rounded-sm cursor-pointer;

    .one-content-div-frame {
      @apply w-full h-full;

      .one-content_div_frame_title {
        height: 24%;
        @apply m-1 px-1 text-lg  bg-gray-100;
        @include line-one;
      }

      .one-content-div-frame-text {
        @apply px-2 m-1 p-1 text-base font-thin;
        height: 54%;
        @include line-numbers(4);
      }
    }
  }
}
</style>
