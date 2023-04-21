<script lang="ts" setup>
import { hSearch } from '@/hooks/CommonData'
const emit = defineEmits(['close-model']) // 使用 emit需要把自定义的事件在defineEmits定义，要不会有警告
</script>
<template>
  <teleport v-if="hSearch" to="#search">
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: auto;
  background-color: #00000010;
}

.modal-content {
  position: absolute;
  top: 46%;
  left: 50%;
  z-index: 100;
  background: #fff;
  transform: translate(-50%, -50%);

  @apply h-750px rounded shadow;

  .model-body {
    width: 650px;
    padding: 25px;

    @apply h-650px;
  }

  .model-body::-webkit-scrollbar {
    display: none;
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
