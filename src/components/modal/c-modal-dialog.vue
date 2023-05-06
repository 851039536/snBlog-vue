<template>
  <teleport to="body">
    <div v-if="visible" class="model-bg">
      <div class="modal-content">
        <button class="close" @click="emit('close-model')">X</button>
        <div class="model-title">{{ title }}</div>
        <div class="model-body relative">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-model']) // 使用 emit需要把自定义的事件在defineEmits定义，要不会有警告
defineProps({
  title: {
    type: String,
    require: true,
    default: '标题'
  },
  visible: {
    type: Boolean,
    require: true,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.model-bg {
  font-family: PuHuiTiBASE, monospace;

  @apply fixed top-0 right-0 bottom-0 left-0 z-100 h-full;
  @apply overflow-auto bg-black/10 rounded;
}

.modal-content {
  @apply absolute top-1/2 left-1/2 z-100 bg-white;
  @apply transform -translate-x-1/2 -translate-y-1/2 rounded;

  .model-title {
    @apply h-8 text-center;
    @apply text-cool-gray-600 text-lg;
  }

  .model-body {
    padding: 40px;
  }

  .close {
    @apply absolute top-0px right-0 px-3;
    @apply border-none cursor-pointer bg-emerald-50;
    @apply hover:text-red-400;
  }
}
</style>
