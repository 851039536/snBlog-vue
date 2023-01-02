<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
<template>
  <c-sidebar-container>
    <div flex py-3px text-base>
      <div i-flat-color-icons-advertising text-size-25px ml-1 mr-1></div>
      <span>公告</span>
    </div>
    <div class="desc-cont">{{ name }}</div>
  </c-sidebar-container>
</template>

<style lang="scss" scoped>
.desc-cont {
  @apply px-1 pb-1 text-center;
  @apply bg-white text-base text-cool-gray-500;
}
</style>
