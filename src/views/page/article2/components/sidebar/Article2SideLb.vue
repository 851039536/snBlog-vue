<script lang="ts" setup>
import { articleApi } from '@/api'
import { IArticleType } from '@/api/data/interData'
import { rArticle } from '../../data'
defineProps({
  rData: {
    type: Array as () => IArticleType[],
    required: true,
    default: () => {
      return []
    }
  },
  name: {
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
onMounted(() => {
  getTopic(sideIndex.value)
  // await GetApi('Markdown')
})
</script>
<template>
  <div class="sidelb">
    <div class="sidelb-name">
      <div i-fxemoji-pandaface h-22px w-32px></div>
      {{ name }}
    </div>
    <div v-for="r in rData" :key="r.id" class="inline-flex" @click="getTopic(r.id)">
      <div v-debounce:200="() => GetApi(r.name)" class="sidelb-col" :class="sideIndex == r.id ? 'active' : ''">
        {{ r.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidelb {
  @apply m-auto mb-2 p-1 w-[97%];
  @apply bg-white rounded shadow;

  .sidelb-name {
    @apply flex items-center;
    @apply m-1 text-base p-1;
    @apply rounded bg-light-blue-300;
  }

  .sidelb-col {
    @apply flex-1 m-1 text-sm text-center p-1;
    @apply rounded bg-gray-100 shadow-2xl cursor-pointer;
    @apply hover:bg-blue-400 hover:text-white;
  }

  .sidelb-col.active {
    @apply text-cool-gray-50 bg-blue-400;
  }
}
</style>
