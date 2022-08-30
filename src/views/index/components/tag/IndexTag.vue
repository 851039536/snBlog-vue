<script lang="ts" setup>
import { IntSort } from '@/api/data/interData'
import { tool } from '@/utils/common/tool'
import { method } from '../../data'
import { state } from '../../data/data'

defineProps({
  resData: {
    type: Array as () => IntSort[],
    required: true,
    default: () => {
      return []
    }
  },
  name: String
})
const GetFy = async (name: string) => {
  await method.GetCount(2, name)
  state.current = 1
  state.identity = 2
  state.typeStr = name
  await method.GetFy()
  tool.BackTop()
}
</script>
<template>
  <div class="category">
    <div class="category-name">{{  name  }}</div>
    <div class="inline-flex" v-for="res in resData" :key="res.id">
      <div class="category-text" @click="GetFy(res.name)">
        {{  res.name  }}
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
