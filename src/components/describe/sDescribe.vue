<script lang="ts" setup>
defineProps({
  userTalk: {
    type: String
  }
})
</script>
<template>
  <!-- 描述内容 -->
  <section class="sDescribe">
    <div>
      <p>{{ userTalk }}</p>
    </div>
  </section>
  <!-- end  描述内容-->
</template>

<style lang="scss" scoped>
.sDescribe {
  @apply mb-2 shadow rounded m-auto;
  width: 97%;

  @apply bg-white text-center;

  div > p {
    @apply px-1 py-2 m-1;
    @apply bg-gray-50 text-sm;
  }
}
</style>
