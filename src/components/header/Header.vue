<script lang="ts" setup>
import { onMounted } from 'vue'
import { resData, method } from './data/header'

onMounted(async () => {
  await method.GetType()
})
</script>
<template>
  <nav class="headers">
    <div class="headers-1">
      <!--  -->
      <div class="header_main">
        <div class="header-title">
          <span class="text-2xl font-medium tracking-tight">少年</span>
        </div>
        <div class="header_text">
          <div v-for="res in resData.resultData" :key="res.id">
            <a @click="method.skip(res.path)" v-if="res.identity">{{ res.title }}</a>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="header_text_1">
        <div class="header-text-r-1">
          <a @click="method.skip(13)" v-once>博客园</a>
          <a @click="method.skip(14)" v-once>Login</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss.scss';
@import '@/design/uitl';

.headers {
  @apply flex fixed z-10 p-1;
  @include excursion(0, null, 3%, null);
  @include w-h(94%, 53px);
  @apply shadow-sm rounded-sm bg-white;
  .headers-1 {
    @apply flex flex-wrap w-full;
  }

  .header_main {
    width: 90%;

    @apply flex h-full text-lg;

    .header-title {
      @apply flex items-center flex-shrink-0 h-full;
    }

    .header_text {
      @apply w-full flex items-center flex-shrink-0;

      a {
        @apply ml-3 text-gray-800;
      }
    }
  }

  .header_text_1 {
    width: 10%;

    @apply flex text-lg h-full;

    .header-text-r-1 {
      @apply flex items-center flex-shrink-0;

      a {
        @apply m-1 text-gray-800;
      }
    }
  }
}

@screen xp {
  .headers {
    width: 100%;

    @include excursion(0, null, 0, null);

    .headers-1 {
      @apply hidden;
    }
  }
}
</style>
