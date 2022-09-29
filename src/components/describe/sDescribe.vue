<script lang="ts" setup>
defineProps({
  userTalk: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div>
    <p>{{ userTalk }}</p>
  </div>
</template>

<style lang="scss" scoped>
div {
  @apply rounded m-auto shadow  mb-2 w-[97%];
  @apply bg-white text-center;

  p {
    @apply font-light m-1 py-2 px-1;
    @apply bg-white text-base;
  }
}
</style>
