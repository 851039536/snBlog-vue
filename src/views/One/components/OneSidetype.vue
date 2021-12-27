<script setup lang="ts">
import { IntOne } from '@/api/data/interData'
import { method, state } from '../data/index'

defineProps({
  resultData: {
    type: Array as () => Array<IntOne>,
    required: true,
    default: () => []
  },
  title: {
    type: String,
    default: () => '标题'
  }
})
</script>
<template>
  <div class="onesidetype">
    <div class="onesidetype-title">{{ title }}</div>
    <div class="onesidetype-text" v-for="res in resultData" :key="res.id">
      <span @click="method.setModal1Visible(true, res.id)">{{ res.title }}</span>
    </div>
  </div>
  <div>
    <a-modal
      v-model:visible="state.modal2Visible"
      :title="state.text.oneTitle"
      centered
      cancelText="赞"
      :closable="false"
      okText="不了"
      @ok="state.modal2Visible = false"
    >
      <p class="bg-white">{{ state.text.oneText }}</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped>
.onesidetype {
  width: 97%;

  @apply p-1  m-auto mb-2 cursor-pointer;
  @apply shadow rounded bg-white;

  .onesidetype-title {
    @apply p-1 m-1 text-base font-semibold bg-gray-200;
  }

  .onesidetype-text {
    @apply p-1 pl-2 text-base text-gray-600;
    border-bottom: 1px dashed #f1f1f1;
  }
}
</style>
