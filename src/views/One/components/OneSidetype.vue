<script setup lang="ts">
import { IntOne } from '@/api/data/interData'
import { method, state } from '../data/index'

defineProps({
  resultData: {
    type: Array as () => IntOne[],
    required: true,
    default: () => {
      return []
    }
  },
  title: {
    type: String,
    default: () => {
      return '标题'
    }
  }
})
</script>
<template>
  <section>
    <div class="osidetype">
      <div class="osidetype-title">{{ title }}</div>
      <div v-for="res in resultData" :key="res.id" class="osidetype-cont">
        <span @click="method.setModal1Visible(true, res.id)">{{ res.title }}</span>
      </div>
    </div>
    <div>
      <a-modal
        v-model:visible="state.modal2Visible"
        :title="state.text.oneTitle"
        centered
        cancel-text="赞"
        :closable="false"
        ok-text="不了"
        @ok="state.modal2Visible = false">
        <p class="bg-white">{{ state.text.oneText }}</p>
      </a-modal>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.osidetype {
  width: 97%;

  @apply cursor-pointer m-auto mb-2 p-1;
  @apply bg-white rounded shadow;

  .osidetype-title {
    @apply font-semibold bg-gray-200 m-1 text-base p-1;
  }

  .osidetype-cont {
    @apply text-base p-1 pl-2 text-gray-600;

    border-bottom: 1px dashed #f1f1f1;
  }
}
</style>
