<script lang="ts" setup>
defineProps({
  userTalk: {
    type: String
  }
})
</script>
<template>
  <section class="sDescribe">
    <p>{{ userTalk }}</p>
  </section>
</template>

<style lang="scss" scoped>
.sDescribe {
  @apply m-auto shadow rounded  mb-2;
  width: 97%;

  @apply bg-white text-center;

  p {
    @apply px-1 py-2 m-1;
    @apply text-base bg-white;
  }
}
</style>
