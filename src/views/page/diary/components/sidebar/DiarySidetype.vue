<script setup lang="ts">
import { IOneType } from '@/api/data/model/DiaryModel'
import { method, state } from '../../index'

defineProps({
  resultData: {
    type: Array as () => IOneType[],
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
      <div class="osidetype-title flex items-center">
        <div i-typcn-adjust-brightness mr-1 h-6 w-6></div>
        <div>
          {{ title }}
        </div>
      </div>
      <div v-for="res in resultData" :key="res.id" class="osidetype-cont">
        <span @click="method.setModal1Visible(true, res.id)">{{ res.name }}</span>
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
  @apply bg-white rounded;

  .osidetype-title {
    @apply m-1 text-base p-1;
    @apply rounded bg-fuchsia-200;
  }

  .osidetype-cont {
    @apply text-base p-1 pl-2 text-gray-600;
    @apply hover:text-blue-400;

    border-bottom: 1.3px dashed #f1f1f1;
  }
}
</style>
