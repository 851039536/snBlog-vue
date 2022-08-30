<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: () => {
      return 'title'
    }
  },
  text: String,
  read: Number
})
</script>

<template>
  <div class="one-top">
    <div class="one-top-img">
      <img src="@/assets/img/tg.jpg" />
    </div>
    <div class="one-top-text">
      <div class="one-top-text-title">
        <span class="text-lg text-gray-600">舔王:{{  title  }}</span>
      </div>
      <div class="one-top-give">{{  text  }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.one-top {
  @apply h-[55%] w-full;

  .one-top-img {
    @apply h-[76.5%] w-[45%] float-left;

    img {
      @apply h-full w-full;
    }
  }

  .one-top-text {
    @apply h-full w-[55%] float-right;

    .one-top-text-title {
      @apply h-[19%] m-1 text-center pt-2;
    }

    .one-top-give {
      @apply h-[55%] m-1 py-4 px-4;
      @apply font-thin text-base text-center leading-loose tracking-wide shadow-2xl;
      @include line-numbers(5);
    }
  }
}
</style>
