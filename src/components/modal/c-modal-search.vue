<script lang="ts" setup>
import { useUiSetStore } from '@/store/modules/uiSettings'
const ui = useUiSetStore()
const emit = defineEmits(['close-model'])
</script>
<template>
  <teleport v-if="ui.searchArticle" to="#search">
    <div class="model-bg">
      <div class="modal-content">
        <button class="close" @click="emit('close-model')">X</button>
        <div class="model-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.model-bg {
  @apply fixed top-0 right-0 bottom-0 left-0 z-100 h-full;
  @apply overflow-auto bg-black/10 rounded;
}

.modal-content {
  @apply absolute top-[46%] left-1/2 z-100 h-750px;
  @apply transform -translate-x-1/2 -translate-y-1/2 rounded;
  @apply bg-white rounded shadow;

  .model-body {
    @apply w-650px h-650px p-6;
  }

  .model-body::-webkit-scrollbar {
    display: none;
  }

  .close {
    @apply absolute top-0px right-0 px-3;
    @apply border-none cursor-pointer bg-emerald-50;
    @apply hover:text-red-400;
  }
}
</style>
