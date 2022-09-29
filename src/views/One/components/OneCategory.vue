<script setup lang="ts">
import { IntOneType } from '@/api/data/interData'

defineProps({
  result: {
    type: Array as () => IntOneType[],
    default: () => {
      return []
    }
  }
})
</script>
<template>
  <div class="ocategory">
    <div class="ocategory-title">分类</div>
    <div v-for="res in result" :key="res.id" class="inline-flex">
      <div class="flex-1 m-1 text-base text-center px-1 text-gray-600">
        {{ res.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ocategory {
  width: 97%;

  @apply cursor-pointer m-auto mb-2 p-1;
  @apply bg-white rounded shadow;

  .ocategory-title {
    @apply font-semibold bg-gray-200 m-1 text-base p-1;
  }
}
</style>
