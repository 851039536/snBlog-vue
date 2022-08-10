<script lang="ts" setup>
import { IntLabels } from '@/api/data/interData'
import { article } from '@/api'
import { resData } from '../data/data'

defineProps({
  arrayLabel: {
    type: Array as () => Array<IntLabels>,
    required: true,
    default: () => []
  }
})

async function GetTag(name: string) {
  resData.resultData = await (await article.GetTypeAsync(2, name, true)).data
}
</script>

<template>
  <div class="tag_head">
    <div class="tag_head_content" v-for="res in arrayLabel" :key="res.id">
      <span @click="GetTag(res.name)" variant="light">{{ res.name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag_head {
  @apply flex flex-wrap mt-1 ml-[8%] w-[84%];
  @apply bg-white rounded-sm shadow;

  .tag_head_content {
    @apply cursor-pointer m-1 pt-1;

    span {
      @apply rounded shadow  text-base p-1 text-gray-600 hover:bg-blue-400;
    }
  }
}
</style>
