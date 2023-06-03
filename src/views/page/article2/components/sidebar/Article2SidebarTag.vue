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
  const data = await ArticleApi.getType(2, name)
  rArticle.value = data.data.data
}
onMounted(async () => {
  getTopic(sideIndex.value)
  await getCondition('语法')
})
</script>
<template>
  <c-right-sidebar-container>
    <div class="article2-sidebar-tag-name">
      <div i-fxemoji-label h-5 w-32px></div>
      标签
    </div>
    <div v-for="ret in rData" :key="ret.id" class="inline-flex" @click="getTopic(ret.id as number)">
      <!--suppress VueUnrecognizedDirective -->
      <div
        v-debounce:200="() => getCondition(ret.name as string)"
        class="article2-sidebar-tag-col"
        :class="sideIndex == ret.id ? 'active' : ''">
        {{ ret.name }}
      </div>
    </div>
  </c-right-sidebar-container>

  <c-right-sidebar-container>
    <div class="article2-sidebar-tag-name">
      <div i-fxemoji-waving h-5 w-32px></div>
      分类
    </div>
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
.article2-sidebar-tag-name {
  @apply flex items-center;
  @apply text-base py-1;
}

.article2-sidebar-tag-col {
  @apply flex-1 m-1 text-sm px-1 py-1px text-center;
  @apply rounded bg-gray-100 shadow-2xl cursor-pointer;
  @apply hover:bg-blue-400 hover:text-white;
}

.article2-sidebar-tag-col.active {
  @apply text-cool-gray-50 bg-blue-500;
}
</style>
