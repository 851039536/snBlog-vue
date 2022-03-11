<script setup lang="ts">
import { IntOneType } from '@/api/data/interData'

defineProps({
  result: {
    type: Array as () => Array<IntOneType>,
    default: () => []
  }
})
</script>
<template>
  <div class="onecategory">
    <div class="onecategory_name">分类</div>
    <div class="inline-flex" v-for="res in result" :key="res.id">
      <div class="flex-1 m-1 text-base text-center px-1 text-gray-600">
        {{ res.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onecategory {
  width: 97%;

  @apply cursor-pointer m-auto mb-2 p-1;
  @apply bg-white rounded shadow;

  .onecategory_name {
    @apply font-semibold bg-gray-200 m-1 text-base p-1;
  }
}
</style>
