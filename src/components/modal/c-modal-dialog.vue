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
  // eslint-disable-next-line vue/require-default-prop
  title: String, // 标题
  visible: Boolean // 模态框状态
})
</script>

<style lang="scss" scoped>
.model-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  overflow: auto;
  background-color: rgb(0 0 0 / 15%);

  @apply (
    rounded,
    @apply
  );
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  background: #fff;
  transform: translate(-50%, -50%);

  @apply (
    rounded,
    @apply
  );

  .model-title {
    height: 32px;
    text-align: center;

    @apply (
      text-lg,
      @apply -cool-gray-600
    );
  }

  .model-body {
    padding: 40px;
  }

  .close {
    position: absolute;
    top: 3px;
    right: 10px;
    padding: 2px;
    border: none;
    cursor: pointer;

    @apply bg-white;
  }
}
</style>
