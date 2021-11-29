<!--
 * @Author: your name
 * @Date: 2021-09-29 13:56:12
 * @LastEditTime: 2021-11-15 15:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\components\OneCategory.vue
-->
<script setup lang="ts">
import { oneType } from '../data'

defineProps({
  result: {
    type: Array as () => Array<oneType>, // (string也可以是其他你自定义的接口)
    default: () => []
  }
})
</script>
<template>
  <div class="onecategory">
    <div class="onecategory_name">分类</div>
    <div class="inline-flex" v-for="res in result" :key="res.id">
      <div
        class="flex-1 px-1 m-1 text-xs text-center text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
      >
        {{ res.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onecategory {
  width: 97%;

  @apply p-1 mb-2 m-auto cursor-pointer;
  @apply shadow rounded bg-white;

  .onecategory_name {
    color: #1b1e21;

    @apply p-1 m-1 text-sm font-semibold bg-gray-200;
  }
}
</style>
