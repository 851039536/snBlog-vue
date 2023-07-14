<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
<template>
  <c-right-sidebar-container>
    <div flex py-3px text-base>
      <div i-typcn-spiral h-6 w-6></div>
      <span>公告</span>
    </div>
    <div class="desc-cont">{{ name }}</div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.desc-cont {
  @apply px-1 pb-4;
  @apply bg-white text-sm text-cool-gray-600;
}
</style>
