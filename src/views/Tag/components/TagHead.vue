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
  @apply flex flex-wrap mt-1;
  @apply rounded-sm  shadow bg-white;

  @include initialize(94%, null, null, null, 3%, null, null);
  .tag_head_content {
    @apply m-1 mt-2 pt-1  cursor-pointer;

    span {
      @apply p-1 text-lg;
    }
  }
}
</style>
