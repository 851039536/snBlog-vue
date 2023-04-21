<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { IArticleType } from '@/api/data/InterData'
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
  rArticle.value = await (await ArticleApi.getType(2, name)).data
}
onMounted(() => {
  getTopic(sideIndex.value)
  // await GetApi('Markdown')
})
</script>
<template>
  <c-sidebar-container>
    <div class="sidelb-name">
      <div i-flat-color-icons-radar-plot h-22px w-32px></div>
      {{ name }}
    </div>
    <div v-for="r in rData" :key="r.id" class="inline-flex" @click="getTopic(r.id)">
      <div v-debounce:200="() => GetApi(r.name)" class="sidelb-col" :class="sideIndex == r.id ? 'active' : ''">
        {{ r.name }}
      </div>
    </div>
  </c-sidebar-container>
</template>

<style lang="scss" scoped>
.sidelb-name {
  @apply flex items-center;
  @apply text-base py-1;
}

.sidelb-col {
  @apply flex-1 m-1 text-sm text-center p-1;
  @apply rounded bg-gray-100 shadow-2xl cursor-pointer;
  @apply hover:bg-blue-400 hover:text-white;
}

.sidelb-col.active {
  @apply text-cool-gray-50 bg-blue-400;
}
</style>
