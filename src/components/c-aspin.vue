<script lang="ts" setup>
import { loadingVisible } from '@/utils/common/IdentityData'
loadingVisible.value = true
</script>
<template>
  <!-- <div v-show="aspShow" class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div> -->
  <div v-show="loadingVisible" class="spinner">
    <div class="cube1"></div>
    <div class="cube2"></div>
  </div>
</template>

<style lang="scss" scoped>
section {
  @apply top-0 left-0 z-3000 fixed;
  @apply h-full w-full;

  div {
    @apply top-5/10 left-5/10 absolute;
  }
}

.spinner {
  width: 20px;
  height: 20px;

  @apply top-0 left-0 bottom-0 right-0 m-auto z-3000 fixed;
}

.cube1,
.cube2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 13px;
  height: 13px;
  background-color: rgb(172 154 154);
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
