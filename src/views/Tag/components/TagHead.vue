<script lang="ts" setup>
import { IntLabels } from '@/api/data/interData'
import { article } from '@/api'
import { resData } from '../data/data'

defineProps({
  arrayLabel: {
    type: Array as () => IntLabels[],
    required: true,
    default: () => {
      return []
    }
  }
})

async function GetTag(name: string) {
  resData.resultData = await (await article.GetTypeAsync(2, name, true)).data
}
</script>

<template>
  <div class="tag-head">
    <div class="tag-head-content" v-for="res in arrayLabel" :key="res.id">
      <div @click="GetTag(res.name)" variant="light">{{  res.name  }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag-head {
  @apply flex flex-wrap mt-2 mb-2 ml-[8%] w-[84%];
  @apply rounded shadow;

  .tag-head-content {
    @apply cursor-pointer m-2;

    div {
      @apply rounded shadow text-base p-1 text-gray-600 hover: bg-blue-100 ;
    }
  }
}
</style>
