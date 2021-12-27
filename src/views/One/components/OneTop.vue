<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: () => 'title'
  },
  text: String,
  read: Number
})
</script>

<template>
  <div class="One-top">
    <div class="One-top-img">
      <img src="@/assets/img/tg.jpg" />
    </div>
    <div class="One-top-text">
      <div class="One-top-text-title">
        <span class="text-lg text-gray-600">舔王:{{ title }}</span>
      </div>
      <div class="One-top-give">{{ text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.One-top {
  @include w-h(100%, 55%);

  .One-top-img {
    @include w-h(45%, 76.5%);

    @apply float-left;

    img {
      @include w-h(100%, 100%);
    }
  }

  .One-top-text {
    @include w-h(55%, 100%);

    @apply float-right;

    .One-top-text-title {
      @apply text-center m-1 pt-2;

      height: 19%;
    }

    .One-top-give {
      height: 55%;
      @include line-numbers(5);
      @apply m-1  px-4 py-4  text-base font-thin leading-loose tracking-wide text-center shadow-2xl;
    }
  }
}
</style>
