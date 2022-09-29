<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: () => {
      return 'title'
    }
  },
  text: {
    type: String,
    default: () => {
      return 'text'
    }
  },
  read: {
    type: Number,
    default: () => {
      return 0
    }
  }
})
</script>

<template>
  <div class="otop">
    <div class="otop-img">
      <img src="@/assets/img/tg.jpg" />
    </div>
    <div class="otop-cont">
      <div class="otop-cont-title">
        <span class="">舔王:{{ title }}</span>
      </div>
      <div class="otop-cont-give">{{ text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.otop {
  @apply h-420px w-full flex;

  .otop-img {
    @apply w-[45%];

    img {
      @apply h-full w-full;
    }
  }

  .otop-cont {
    @apply h-full w-[55%];

    .otop-cont-title {
      @apply text-2xl m-1 text-center pt-2;
    }

    .otop-cont-give {
      @apply m-1 py-4 px-4;
      @apply font-thin text-base text-center leading-loose tracking-wide shadow-2xl;
      @include line-numbers(5);
    }
  }
}
</style>
