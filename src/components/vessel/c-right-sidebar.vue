<!-- 右侧边主栏 -->
<template>
  <div class="model-side">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.model-side {
  // @apply h-[92%] top-[8.4%] right-[10.5%] w-[16.5%];
}

.modal-content {
  @apply h-93vh w-full p-1px;
}
</style>
