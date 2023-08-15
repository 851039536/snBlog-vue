<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
ui.loading = false
</script>
<template>
  <div v-show="ui.loading" class="spinner">
    <div class="cube1"></div>
    <div class="cube2"></div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  @apply top-0 left-0 bottom-0 right-0 m-auto z-3000 fixed;
  @apply w-5 h-5;
}

.cube1,
.cube2 {
  @apply absolute top-0 left-0 w-3 h-3 bg-blue-300;

  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  animation-delay: -0.9s;
}

@keyframes sk-cubemove {
  25% {
    transform: translateX(20px) rotate(-90deg) scale(0.5);
  }

  50% {
    transform: translateX(20px) translateY(20px) rotate(-180deg);
  }

  75% {
    transform: translateX(0) translateY(20px) rotate(-270deg) scale(0.5);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes sk-cubemove {
  25% {
    transform: translateX(20px) rotate(-90deg) scale(0.5);
  }

  50% {
    transform: translateX(20px) translateY(20px) rotate(-179deg);
  }

  50.1% {
    transform: translateX(20px) translateY(20px) rotate(-180deg);
  }

  75% {
    transform: translateX(0) translateY(20px) rotate(-270deg) scale(0.5);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
