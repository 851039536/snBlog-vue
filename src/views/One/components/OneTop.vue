<!--
 * @Author: your name
 * @Date: 2021-09-28 17:50:44
 * @LastEditTime: 2021-11-15 15:01:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\components\OneTop.vue
-->
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
        <a class="text-lg">舔王:{{ title }}</a>
      </div>
      <div class="One-top-give">{{ text }}</div>

      <div class="flex flex-row-reverse One-top-give-div">
        <div>转载</div>
        <div>点赞({{ read }})</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

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

      @apply m-1  px-4 py-4 font-thin leading-loose tracking-wide text-center shadow-2xl;
    }

    .One-top-give-div {
      @apply m-1 cursor-pointer;

      height: 17%;

      div {
        @apply px-2 py-2 m-1 text-center text-gray-700;
      }
    }
  }
}
</style>
