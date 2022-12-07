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
  @apply h-[92%] top-[8.4%] right-[11%] w-[17%] fixed;
}

.modal-content {
  @apply h-full w-full;
}
</style>
