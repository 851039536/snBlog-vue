<script setup lang="ts">
import { one } from '../data'
import { method } from '../index'

defineProps({
  resultData: {
    type: Array as () => Array<one>,
    required: true,
    default: () => []
  },
  title: {
    type: String,
    default: () => '标题'
  }
})
</script>
<template>
  <div class="One-Sidebar-textlist">
    <div class="One-Sidebar-textlist-title">{{ title }}</div>
    <div class="TalkSidebar-text-4-2" v-for="result in resultData" :key="result.id">
      <div class="p-1 pl-2 text-base">
        <a @click="method.setModal1Visible(true, result.id)">{{ result.title }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.One-Sidebar-textlist {
  width: 97%;

  @apply p-1 mb-2 m-auto cursor-pointer;
  @apply shadow rounded bg-white;

  .One-Sidebar-textlist-title {
    color: #1b1e21;

    @apply p-1 m-1 text-sm font-semibold bg-gray-200;
  }

  .TalkSidebar-text-4-2 {
    border-bottom: 1px dashed #f1f1f1;
  }
}
</style>
