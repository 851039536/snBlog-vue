<script lang="ts" setup>
import { useArticleApi } from '@/hooks/http'
import { rArticle } from '../../data'
import { blog } from '../data'
const { getById } = useArticleApi()

/**
 * 选中后变色并且效果不消失
 */
const sideIndex = ref(0)
const emit = defineEmits(['refresh'])
const getApi = async (id: number) => {
  emit('refresh', 123)
  sideIndex.value = id

  const data = await getById(id)
  blog.value = data.data.data.text
}
</script>
<template>
  <div class="article2-right-sidebar">
    <div v-for="ret in rArticle" :key="ret.id" class="side-col">
      <div v-debounce:200="() => getApi(ret.id)" class="side-col-title" :class="sideIndex == ret.id ? 'active' : ''">
        <span>{{ ret.name }}</span>
      </div>
      <div class="side-col-txt">
        <span>{{ ret.read }}℃</span>
        <span>赞 {{ ret.give }}</span>
        <span>{{ ret.timeCreate.substring(0, 10) }}</span>
        <span>编辑</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article2-right-sidebar {
  @apply cursor-pointer shadow w-[24%] overflow-y-scroll;

  .side-col {
    @apply m-1 shadow p-1;

    .side-col-title {
      @apply p-1 text-base;
      @apply bg-blue-50 rounded;
      @apply hover:text-blue-500;
    }

    .side-col-title.active {
      @apply bg-blue-500 text-cool-gray-50;
    }

    .side-col-txt {
      @apply text-cool-gray-600 text-sm mt-1;

      span {
        @apply ml-1 rounded;
      }
    }
  }
}
</style>
