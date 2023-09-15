<template>
  <teleport to="body">
    <Transition name="fade" :duration="150">
      <div v-if="visible" class="model-bg">
        <div class="modal-content">
          <button class="close" @click="emit('close-model')">X</button>
          <div class="model-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-model'])
defineProps({
  title: {
    // 标题
    type: String,
    require: true,
    default: '标题'
  },
  visible: {
    // 模态框状态
    type: Boolean,
    require: true,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.model-bg {
  @apply fixed top-0 right-0 bottom-0 left-0 z-100 h-full;
  @apply overflow-auto bg-black/10 rounded;
}

.modal-content {
  @apply absolute top-[50%] left-[50%] w-[90%] z-100 bg-white;

  min-height: 800px;
  transform: translate(-50%, -50%);

  @apply rounded shadow;

  .model-body {
    padding: 20px;
  }

  .close {
    @apply w-6 absolute top-0 right-0 p-2px border-none cursor-pointer bg-white;
  }
}
</style>
