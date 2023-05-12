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

async function getApi(name: string) {
  rArticle.value = await (await ArticleApi.getType(2, name)).data.data
}
onMounted(async () => {
  getTopic(sideIndex.value)
  await getApi('语法')
})
</script>
<template>
  <c-right-sidebar-container>
    <div class="sidelb-name">
      <div i-fxemoji-label h-5 w-32px></div>
      标签
    </div>
    <div v-for="res in rData" :key="res.id" class="inline-flex" @click="getTopic(res.id as number)">
      <div
        v-debounce:200="() => getApi(res.name as string)"
        class="sidelb-col"
        :class="sideIndex == res.id ? 'active' : ''">
        {{ res.name }}
      </div>
    </div>
  </c-right-sidebar-container>

  <c-right-sidebar-container>
    <div class="sidelb-name">
      <div i-fxemoji-waving h-5 w-32px></div>
      分类
    </div>
    <div v-for="res in rData" :key="res.id" class="inline-flex" @click="getTopic(res.id as number)">
      <div
        v-debounce:200="() => getApi(res.name as string)"
        class="sidelb-col"
        :class="sideIndex == res.id ? 'active' : ''">
        {{ res.name }}
      </div>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.sidelb-name {
  @apply flex items-center;
  @apply text-base py-1;
}

.sidelb-col {
  @apply flex-1 m-1 text-sm px-1 py-1px text-center;
  @apply rounded bg-gray-100 shadow-2xl cursor-pointer;
  @apply hover:bg-blue-400 hover:text-white;
}

.sidelb-col.active {
  @apply text-cool-gray-50 bg-blue-500;
}
</style>
