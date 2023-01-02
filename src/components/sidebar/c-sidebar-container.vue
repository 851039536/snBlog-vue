<!-- 侧边栏模块容器 -->
<template>
  <div class="side-container">
    <div class="mx-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.side-container {
  @apply rounded shadow-sm my-4px;
  @apply bg-white;
}
</style>
