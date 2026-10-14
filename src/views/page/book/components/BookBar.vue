<script lang="ts" setup></script>
<template>
  <div class="book_bar">
    <p>
      <a>观影</a>
      / 总计 501 本月 5 今年 20
    </p>
  </div>
</template>

<style lang="scss" scoped>
.book_bar {
  @apply mb-2;

  @include underline;

  p {
    @apply m-2 py-2 px-1;
    @apply font-medium text-base;
  }
}
</style>
