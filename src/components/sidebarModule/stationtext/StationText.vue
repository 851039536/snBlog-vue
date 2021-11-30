<!--
 * @Author: 站点信息模块
 * @Date: 2021-08-17 11:54:18
 * @LastEditTime: 2021-09-17 14:53:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogInformation.vue
-->

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
  width: 97%;

  @apply p-1 mb-2 shadow rounded m-auto cursor-pointer;
  @apply bg-white;

  .title {
    @apply p-1 m-1;
    @apply text-gray-900 text-base font-semibold bg-gray-200;
  }

  .content {
    @apply m-2;

    .content-frame {
      @apply flex justify-between mt-1;

      .content-frame-title {
        @apply p-1;
      }

      .content-frame-text {
        @apply p-1 bg-gray-100 rounded;
      }
    }
  }
}
</style>
