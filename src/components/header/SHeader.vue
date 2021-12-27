<script lang="ts" setup>
import { resData, method } from './data/header'

onMounted(async () => {
  await method.GetType()
})
</script>
<template>
  <nav class="headers">
    <div class="headers-1">
      <div class="header_main">
        <div class="header-title">
          <span class="text-2xl font-medium tracking-tight">少年</span>
        </div>
        <div class="header_text">
          <div v-for="res in resData.resultData" :key="res.id">
            <span @click="method.skip(res.path)" v-if="res.identity">{{ res.title }}</span>
          </div>
        </div>
      </div>
      <div class="header_text_1">
        <div class="header-text-r-1">
          <span @click="method.skip(13)" v-once>博客园</span>
          <span @click="method.skip(14)" v-once>Login</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.headers {
  @apply flex fixed  p-1 z-50;
  @include excursion(0, null, 3%, null);
  @include w-h(94%, 53px);
  @apply shadow-sm rounded-sm bg-white;
  .headers-1 {
    @apply flex flex-wrap w-full;
  }

  .header_main {
    width: 90%;

    @apply flex h-full;

    .header-title {
      @apply flex items-center flex-shrink-0 h-full;
    }

    .header_text {
      @apply w-full flex items-center flex-shrink-0;

      span {
        @apply ml-3 text-xl cursor-pointer;
      }
    }
  }

  .header_text_1 {
    width: 10%;

    @apply flex text-lg h-full;

    .header-text-r-1 {
      @apply flex items-center flex-shrink-0;

      span {
        @apply m-1 text-xl cursor-pointer;
      }
    }
  }
}
</style>
