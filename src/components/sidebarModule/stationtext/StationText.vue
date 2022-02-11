<script lang="ts" setup>
defineProps({
  title: String,
  res1: String,
  res2: String,
  res3: String,
  res4: String,
  title1: String,
  title2: String,
  title3: String,
  title4: String
})
</script>

<template>
  <div class="statistics">
    <div class="title">{{ title }}</div>
    <div class="content">
      <div class="content-frame">
        <div class="content-frame-title">{{ title1 }}:</div>
        <div class="content-frame-text">{{ res1 }} 篇</div>
      </div>
      <div class="content-frame">
        <div class="content-frame-title">{{ title2 }}:</div>
        <div class="content-frame-text">{{ res2 }} 字</div>
      </div>
      <div class="content-frame">
        <div class="content-frame-title">{{ title3 }}:</div>
        <div class="content-frame-text">{{ res3 }} ℃</div>
      </div>
      <div class="content-frame">
        <div class="content-frame-title">{{ title4 }}:</div>
        <div class="content-frame-text">{{ res4 }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statistics {
  @apply bg-white rounded m-auto shadow mb-2 p-1 w-[97%];

  .title {
    @apply m-1 p-1;
    @apply font-semibold bg-gray-200 text-base;
  }

  .content {
    @apply m-2;

    .content-frame {
      @apply flex mt-1 text-base justify-between;

      .content-frame-title {
        @apply p-1;
      }

      .content-frame-text {
        @apply rounded bg-gray-100 p-1;
      }
    }
  }
}
</style>
