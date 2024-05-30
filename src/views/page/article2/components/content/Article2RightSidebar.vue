<script lang="ts" setup>
import { rArticle } from '../../data'
import { blog } from '../data'
import { useApi } from '@/api/useApi'

const { ArticleApi } = useApi()

/**
 * 选中后变色并且效果不消失
 */
const sideIndex = ref(0)
// const sideIndex2 = ref(false)
const emit = defineEmits(['refresh'])
const getApi = async (id: number) => {
  emit('refresh', 123)
  sideIndex.value = id

  const data = await ArticleApi.getById(id, true)
  blog.value = data.data.data.text
}
</script>
<template>
  <!-- <transition name="slidey-fade"> -->
  <div class="article2-right-sidebar">
    <div v-for="ret in rArticle" :key="ret.id" class="side-col">
      <div v-debounce:200="() => getApi(ret.id)" class="side-col-title" :class="sideIndex == ret.id ? 'active' : ''">
        <span>{{ ret.name }}</span>
      </div>
      <div class="side-col-txt">
        <div class="i-typcn-user"></div>
        <span class="pr-1">
          {{ ret.user!.nickname }}
        </span>

        <div class="i-typcn-tag"></div>
        <span class="pr-1">{{ ret.tag!.name }}</span>

        <span>{{ ret.timeCreate.substring(0, 10) }}</span>
      </div>
      <div class="w-full border-gray-500 opacity-1"></div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<style lang="scss" scoped>
.article2-right-sidebar {
  @apply cursor-pointer  w-[24%] overflow-y-scroll;

  .side-col {
    @apply m-1 shadow-sm p-1 h-17 bg-white;
    @apply hover:bg-gray-100;

    .side-col-title {
      @apply p-1 text-black;
      @apply hover:text-blue-500;
    }

    .side-col-title.active {
      @apply bg-blue-500 text-cool-gray-50;
    }

    .side-col-txt {
      @apply text-cool-gray-600 text-sm mt-1 flex items-center;

      span {
        @apply rounded;
      }
    }
  }
}
</style>
