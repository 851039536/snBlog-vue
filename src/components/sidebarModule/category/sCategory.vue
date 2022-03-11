<script lang="ts" setup>
import { IntSort } from '@/api/data/interData'
import { routerId } from '@/hooks/routers'

defineProps({
  resultData: {
    type: Array as () => Array<IntSort>,
    required: true,
    default: () => []
  },
  name: String
})
const TagSkip = async (id: any) => {
  await routerId('/Tag', id)
}
</script>
<template>
  <div class="category">
    <div class="category-name">{{ name }}</div>
    <div class="inline-flex" v-for="res in resultData" :key="res.id">
      <div class="category-text" @click="TagSkip(res.id)">
        {{ res.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category {
  @apply m-auto mb-2 p-1 w-[97%];
  @apply bg-white rounded cursor-pointer shadow;

  .category-name {
    @apply font-semibold m-1 text-base p-1;
    @apply rounded bg-gray-200;
  }

  .category-text {
    @apply flex-1 m-1 text-base text-center p-1 px-1;
    @apply rounded bg-gray-100;
  }
}
</style>
