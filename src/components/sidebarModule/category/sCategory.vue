<!--
 * @Author: 分类
 * @Date: 2021-09-15 10:01:43
 * @LastEditTime: 2021-11-11 15:19:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\components\Category.vue
-->
<script lang="ts" setup>
import { IntSort } from '@/api/data/interData'
import { RouterId } from '@/hooks/routers'

defineProps({
  resultData: {
    type: Array as () => Array<IntSort>, // (string也可以是其他你自定义的接口)
    required: true,
    default: () => []
  },
  name: String
})
const TagSkip = async (id: any) => {
  await RouterId('/Tag', id)
}
</script>
<template>
  <div class="category">
    <div class="category-name">{{ name }}</div>
    <div class="inline-flex" v-for="res in resultData" :key="res.id">
      <div class="category-text" @click="TagSkip(res.id)">
        {{ res.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

/* 分类内容框 */
.category {
  width: 97%;

  @apply p-1 mb-2 m-auto;
  @apply bg-white shadow rounded cursor-pointer;

  .category-name {
    @apply p-1 m-1 text-base font-semibold;
    @apply text-gray-900 bg-gray-200 cursor-pointer;
  }

  .category-text {
    @apply flex-1 px-1 p-1 m-1 text-sm text-center;
    @apply bg-gray-100 rounded;
  }
}
</style>
