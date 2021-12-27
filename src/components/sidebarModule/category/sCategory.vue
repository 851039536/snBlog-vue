<script lang="ts" setup>
import { IntSort } from '@/api/data/interData'
import { RouterId } from '@/hooks/routers'

defineProps({
  resultData: {
    type: Array as () => Array<IntSort>,
    required: true,
    default: () => []
  },
  name: String
})
const TagSkip = async (id: any) => {
  await RouterId('/Tag', id)
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
  width: 97%;

  @apply m-auto p-1 mb-2;
  @apply bg-white shadow rounded cursor-pointer;

  .category-name {
    @apply p-1 m-1 text-base font-semibold rounded;
    @apply bg-gray-200;
  }

  .category-text {
    @apply flex-1 px-1 p-1 m-1 text-base text-center;
    @apply bg-gray-100 rounded;
  }
}
</style>
