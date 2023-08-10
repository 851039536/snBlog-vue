<script lang="ts" setup>
import { useRouter } from '@hooks/useRouter'
import { Navigation } from '@hooksHttp/model/Navigation'
const { winUrl } = useRouter()

defineProps({
  rData: {
    type: Array as () => Navigation[],
    required: true,
    default: () => {
      return []
    }
  }
})
</script>
<template>
  <c-right-sidebar-container class="relative">
    <div class="tool-name">
      <div i-typcn-spanner-outline mr-1 h-6 w-6></div>
      <div>常用工具</div>
    </div>
    <div v-for="r in rData" :key="r.id" class="inline-flex">
      <span class="tool-text" @click="winUrl(r.url)">
        {{ r.name }}
      </span>
    </div>
    <div class="absolute bottom-1 right-2 cursor-pointer hover:text-blue-500" i-typcn-arrow-right h6 w7></div>
  </c-right-sidebar-container>
</template>

<style lang="scss">
.tool-name {
  @apply flex items-center;
  @apply text-base p-1;
  @apply rounded;
}

.tool-text {
  @apply flex justify-center items-center m-2px p-2px;
  @apply cursor-pointer text-sm text-center;
  @apply rounded  hover:text-white hover:bg-blue-500;
}
</style>
