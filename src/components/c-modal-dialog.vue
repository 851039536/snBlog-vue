<template>
  <teleport to="body">
    <div v-show="visible" class="model-bg">
      <div class="modal-content">
        <button class="close" @click="emit('close-model')">X</button>
        <div class="model-title">{{ title }}</div>
        <div class="model-body">
          <slot>第一个对话框</slot>
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
  z-index: 2000;
  height: 100%;
  overflow: auto;
  background-color: #00000080;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  width: 600px;
  min-height: 300px;
  background: #fff;
  border: 1px solid #eee;
  transform: translate(-50%, -50%);

  .model-title {
    height: 32px;
    color: #000;
    line-height: 32px;
    text-align: center;
    background: #eee;
  }

  .model-body {
    padding: 40px;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    padding: 2px;
    border: none;
    cursor: pointer;
  }
}
</style>
