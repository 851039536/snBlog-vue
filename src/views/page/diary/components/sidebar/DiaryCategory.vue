<script setup lang="ts">
import { IOneType } from '@/api/data/InterData'

defineProps({
  result: {
    type: Array as () => IOneType[],
    default: () => {
      return []
    }
  }
})
</script>
<template>
  <div class="ocategory">
    <div class="ocategory-title">
      <div i-fxemoji-partypopper class="mx-1 h-5 w-5"></div>
      分类
    </div>
    <div v-for="ret in result" :key="ret.id" class="inline-flex">
      <div class="flex-1 px-1 hover:text-blue-400">
        {{ ret.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ocategory {
  width: 97%;

  @apply cursor-pointer;
  @apply bg-white rounded shadow;

  .ocategory-title {
    @apply flex;
    @apply bg-violet-200 m-1 text-base p-1 rounded;
  }
}
</style>
