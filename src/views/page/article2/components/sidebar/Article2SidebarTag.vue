<script lang="ts" setup>
import { ArticleType } from '@/api/model/InterData'
import { rArticle } from '../../data'
import { useApi } from '@/api/useApi'

const { ArticleApi } = useApi()

defineProps({
  rData: {
    type: Array as () => ArticleType[],
    required: true,
    default: () => {
      return []
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

/**
 * 按条件获取文章
 * @param name
 */
async function getCondition(name: string) {
  const data = await ArticleApi.getType(1, name)
  rArticle.value = data.data.data
}
onMounted(async () => {
  getTopic(sideIndex.value)
  await getCondition('markdown')
})
</script>
<template>
  <c-right-sidebar-container>
    <div v-for="res in rData" :key="res.id" class="inline-flex" @click="getTopic(res.id as number)">
      <div
        v-debounce:200="() => getCondition(res.name as string)"
        class="article2-sidebar-tag-col"
        :class="sideIndex == res.id ? 'active' : ''">
        {{ res.name }}
      </div>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.article2-sidebar-tag-col {
  @apply flex-1 mr-2 text-sm px-1 py-3px;
  @apply rounded bg-gray-100  cursor-pointer;
  @apply hover:bg-blue-400 hover:text-white;
}

.article2-sidebar-tag-col.active {
  @apply text-cool-gray-50 bg-blue-500;
}
</style>
