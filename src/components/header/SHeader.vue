<script lang="ts" setup>
import { resData, method } from './data/header'

onMounted(async () => {
  await method.GetType()
})
</script>
<template>
  <nav class="headers">
    <div>
      <div class="header_main">
        <div class="flex h-full flex-shrink-0 items-center">
          <span class="font-medium tracking-tight text-2xl">少年</span>
        </div>
        <div class="header_text">
          <div v-for="res in resData.resultData" :key="res.id">
            <span @click="method.skip(res.path)" v-if="res.identity">{{ res.title }}</span>
          </div>
        </div>
      </div>
      <div class="header_text_1">
        <div>
          <span @click="method.skip(13)" v-once>博客园</span>
          <span @click="method.skip(14)" v-once>Login</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.headers {
  @apply flex h-[53px]  p-1 px-2 w-[94%] z-50 fixed;
  @include excursion(0, null, 3%, null);
  @apply bg-white rounded-sm shadow-sm;
  & > div {
    @apply flex flex-wrap w-full;
    .header_main {
      @apply flex h-full w-[90%];

      .header_text {
        @apply flex flex-shrink-0 w-full items-center;
        span {
          @apply cursor-pointer text-xl ml-3;
          &:hover {
            @apply text-blue-400;
          }
        }
      }
    }

    .header_text_1 {
      @apply flex h-full text-lg;
      & > div {
        @apply flex  flex-shrink-0 items-center;
        span {
          @apply cursor-pointer m-1 text-xl;
          &:hover {
            @apply text-blue-400;
          }
        }
      }
    }
  }
}
</style>
