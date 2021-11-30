<script lang="ts" setup>
import { article } from '@/api'
import { state } from '../data/data'

async function GetApi(id: number) {
  state.blog = await (await article.GetByIdAsync(id, true)).data[0].text
}
</script>
<template>
  <div class="tag_content">
    <div class="text-sidebar">
      <div class="text-sidebar-forms" v-for="result in state.newinfo" :key="result.id">
        <div class="forms-1" @click="GetApi(result.id)">
          <a>{{ result.title }}</a>
        </div>
        <div class="forms-2">{{ result.timeCreate.substring(0, 10) }}</div>
      </div>
    </div>

    <div class="text-blog">
      <v-md-preview :text="state.blog" model="preview" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag_content {
  @apply flex flex-nowrap;
  @apply mt-1;

  @include initialize(94%, 71%, null, null, 3%, null, #ffffff);

  // 侧边框
  .text-sidebar {
    @include w-h(25%, null);

    @apply overflow-auto shadow;

    .text-sidebar-forms {
      @apply p-1 m-1 bg-gray-100 cursor-pointer shadow;

      .forms-1 {
        @apply bg-gray-300 text-base p-1;
      }

      .forms-2 {
        @apply p-2;
      }
    }
  }

  // 内容
  .text-blog {
    @include w-h(75%, null);

    @apply px-1 bg-white shadow rounded-sm overflow-auto;

    .blog {
      @include blogs;

      @apply mt-1;
    }
  }
}
</style>
