<script lang="ts" setup>
defineProps({
  userTalk: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="desc">
    <div flex m-1 py-2 text-base>
      <div i-flat-color-icons-advertising text-size-25px ml-1 mr-1></div>
      <span>公告</span>
    </div>
    <p class="desc-cont">{{ userTalk }}</p>
  </div>
</template>

<style lang="scss" scoped>
.desc {
  @apply rounded m-auto shadow  mb-2 w-[97%];
  @apply bg-white;

  .desc-cont {
    @apply px-2 mb-2 pb-5;
    @apply rounded bg-white text-base text-cool-gray-500;
  }
}
</style>
