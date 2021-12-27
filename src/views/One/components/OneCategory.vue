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
      <div class="flex-1 px-1 m-1 text-base text-center text-gray-600">
        {{ res.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onecategory {
  width: 97%;

  @apply p-1 mb-2 m-auto cursor-pointer;
  @apply shadow rounded bg-white;

  .onecategory_name {
    @apply p-1 m-1 text-base font-semibold bg-gray-200;
  }
}
</style>
