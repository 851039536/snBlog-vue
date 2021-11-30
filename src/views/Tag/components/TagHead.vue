<script lang="ts" setup>
import { IntLabels } from '@/api/data/interData'
import { article } from '@/api'
import { state } from '../data/data'

defineProps({
  resultData: {
    type: Array as () => Array<IntLabels>,
    required: true,
    default: () => []
  }
})

async function GetTag(name: string) {
  state.newinfo = await (await article.GetTypeAsync(2, name, true)).data
}
</script>

<template>
  <div class="tag_head">
    <div class="tag_head_content" v-for="res in resultData" :key="res.id">
      <a @click="GetTag(res.name)" variant="light">{{ res.name }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//头部
.tag_head {
  @apply flex flex-wrap mt-1;
  @apply rounded-sm  shadow bg-white;

  @include initialize(94%, null, null, null, 3%, null, null);
  .tag_head_content {
    height: 32px;

    @apply m-1 p-1;
    @apply bg-gray-100 text-base rounded-sm;

    a {
      @apply p-1;
    }
  }
}
</style>
