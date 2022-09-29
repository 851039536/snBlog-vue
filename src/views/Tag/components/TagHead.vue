<script lang="ts" setup>
import { ILabel } from '@/api/data/interData'
import { article } from '@/api'
import { resData } from '../data/data'

defineProps({
  arrayLabel: {
    type: Array as () => ILabel[],
    required: true,
    default: () => {
      return []
    }
  }
})

async function GetTag(name: string) {
  resData.resultData = await (await article.GetType(2, name, true)).data
}
</script>

<template>
  <div class="thead">
    <div v-for="res in arrayLabel" :key="res.id" class="thead-cont">
      <div @click="GetTag(res.name)">{{ res.name }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thead {
  @apply flex flex-wrap mt-2 mb-2 w-[100%];
  @apply rounded;

  .thead-cont {
    @apply cursor-pointer m-2;

    div {
      @apply bg-white rounded shadow text-base p-1 text-gray-600 hover: bg-blue-200;
    }
  }
}
</style>
