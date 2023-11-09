<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    require: true,
    default: false
  }
})
</script>

<template>
  <teleport to="body">
    <!-- fade-in -->
    <div v-if="visible" class="model-bg">
      <div class="modal-content">
        <div class="model-body relative">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.model-bg {
  font-family: PuHuiTiBASE, monospace;

  @apply fixed top-0 z-60 h-[60%] w-full;
  @apply overflow-auto bg-white;
}

.modal-content {
  @apply absolute top-1/2 left-1/2 z-100 bg-white;
  @apply transform -translate-x-1/2 -translate-y-1/2 rounded;

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
