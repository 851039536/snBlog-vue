<script lang="ts" setup>
import { useRouter } from '@hooks/useRouter'
import { Navigation } from '@api/model/Navigation'
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
    <div class="mb-7">
      <div class="tool-name">
        <div i-typcn-spanner-outline mr-1 h-6 w-6></div>
        <div>常用工具</div>
      </div>
      <div v-for="r in rData" :key="r.id" class="inline-flex" m-2px>
        <n-button size="small" @click="winUrl(r.url)">
          {{ r.name }}
        </n-button>
      </div>
    </div>
    <div
      class="absolute bottom-0 right-2 cursor-pointer text-3xl text-gray-400 hover:text-blue-500"
      i-typcn-arrow-right></div>
  </c-right-sidebar-container>
</template>

<style lang="scss">
.tool-name {
  @apply flex items-center;
  @apply text-base p-1;
}
</style>
