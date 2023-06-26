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
        <span class="">{{ title }}</span>
      </div>
      <div class="otop-cont-give">
        <div>{{ text }}</div>
        <div class="otop-cont-give2">
          <span class="bg-yellow-100">1C</span>
          <span class="bg-fuchsia-100">123</span>
          <span class="bg-cyan-100">日记</span>
          <span class="bg-red-100">日记</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.otop {
  @apply h-400px w-full flex bg-white;

  .otop-img {
    @apply w-[45%] mx-1;

    img {
      @apply h-full w-full rounded;
    }
  }

  .otop-cont {
    @apply h-full w-[55%];

    .otop-cont-title {
      @apply text-2xl m-1 text-center pt-2;
    }

    .otop-cont-give {
      @apply m-1 py-4 px-4;
      @apply font-thin text-base text-center leading-loose tracking-wide shadow-2xl rounded;
      @include line-numbers(5);
    }

    .otop-cont-give2 {
      span {
        @apply m-1 p-1 rounded;
        @apply cursor-pointer;
        @apply hover:text-white hover:bg-blue-400;
      }
    }
  }
}
</style>
