<script lang="ts" setup>
import { articleApi } from '@/api'
import { ISort } from '@/api/data/interData'
import { rArticle } from '../data/data'
defineProps({
  sortData: {
    type: Array as () => ISort[],
    required: true,
    default: () => {
      return []
    }
  },
  tagName: {
    type: String,
    required: true,
    default: () => {
      return ''
    }
  }
})
/**
 * 选中后变色并且效果不消失
 */
const sideIndex = ref(0)
function getTopic(index: number) {
  sideIndex.value = index
}

async function GetApi(name: string) {
  rArticle.value = await (await articleApi.GetType(2, name, true)).data
}
onMounted(async () => {
  getTopic(sideIndex.value)
  await GetApi('Markdown')
})
</script>
<template>
  <div class="taglabel">
    <div class="taglabel-name flex">
      <div i-fxemoji-pandaface h-22px w-32px mt-1px></div>
      {{ tagName }}
    </div>
    <div v-for="res in sortData" :key="res.id" class="inline-flex" @click="getTopic(res.id)">
      <div class="taglabel-cont" :class="sideIndex == res.id ? 'active' : ''" @click="GetApi(res.name)">
        {{ res.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.taglabel {
  @apply m-auto mb-2 p-1 w-[97%];
  @apply bg-white rounded shadow;

  .taglabel-name {
    @apply m-1 text-base p-1;
    @apply rounded bg-light-blue-300;
  }

  .taglabel-cont {
    @apply flex-1 m-1 text-sm text-center p-1;
    @apply rounded bg-gray-100 shadow-2xl cursor-pointer;
    @apply hover:bg-blue-400 hover:text-white;
  }

  .taglabel-cont.active {
    @apply text-cool-gray-50 bg-blue-400;
  }
}
</style>
