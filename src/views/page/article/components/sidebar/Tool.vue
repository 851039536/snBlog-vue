<script lang="ts" setup>
import { INav } from '@/api/data/interData'
import { winUrl } from '@/hooks/routers'

defineProps({
  rData: {
    type: Array as () => INav[],
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
</script>
<template>
  <c-sidebar-container>
    <div class="tool-name">
      <div i-flat-color-icons-edit-image w-5 h-5 mr-1></div>
      <div>{{ name }}</div>
    </div>
    <div v-for="r in rData" :key="r.id" class="inline-flex">
      <span class="tool-text" @click="winUrl(r.url)">
        {{ r.title }}
      </span>
    </div>
  </c-sidebar-container>
</template>

<style lang="scss">
.tool-name {
  @apply flex items-center;
  @apply text-base p-1;
  @apply rounded;
}

.tool-text {
  @apply flex justify-center items-center m-3px text-base text-center p-3px;
  @apply rounded bg-blue-100 hover:text-white hover:bg-blue-500;
}
</style>
