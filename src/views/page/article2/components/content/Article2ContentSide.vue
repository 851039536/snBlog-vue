<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { rArticle } from '../../data'

import { blog } from '../data'
/**
 * 选中后变色并且效果不消失
 */
const sideIndex = ref(0)
const emit = defineEmits(['refresh'])
const GetApi = async (id: number) => {
  emit('refresh', 123) // onScroll('top')
  sideIndex.value = id
  blog.value = await (await ArticleApi.getById(id)).data.text
}
</script>
<template>
  <div class="side">
    <div v-for="r in rArticle" :key="r.id" class="side-col">
      <div v-debounce:200="() => GetApi(r.id)" class="side-col-title" :class="sideIndex == r.id ? 'active' : ''">
        <span>{{ r.name }}</span>
      </div>
      <div class="side-col-txt">
        <span>{{ r.read }}℃</span>
        <span>赞 {{ r.give }}</span>
        <span>{{ r.timeCreate.substring(0, 10) }}</span>
        <span>编辑</span>
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side {
  @apply cursor-pointer shadow w-[25%] overflow-auto;

  .side-col {
    @apply m-1 shadow p-1;

    .side-col-title {
      @apply p-1 text-base;
      @apply bg-blue-50 rounded;
      @apply hover:text-blue-400;
    }

    .side-col-title.active {
      @apply bg-blue-400 text-cool-gray-50;
    }

    .side-col-txt {
      @apply text-cool-gray-500 text-sm mt-1;

      span {
        @apply ml-1 rounded;
      }
    }
  }
}
</style>
