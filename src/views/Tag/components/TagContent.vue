<script lang="ts" setup>
import { article } from '@/api'
import { resData } from '../data/data'

async function GetApi(id: number) {
  resData.blog = await (await article.GetByIdAsync(id, true)).data[0].text
}
</script>
<template>
  <div class="tag-content">
    <div class="text-sidebar">
      <div class="text-sidebar-forms" v-for="result in resData.resultData" :key="result.id">
        <div class="forms-1" @click="GetApi(result.id)">
          <span>{{ result.title }}</span>
        </div>
        <div class="forms-2">{{ result.timeCreate.substring(0, 10) }}</div>
      </div>
    </div>

    <div class="text-blog">
      <v-md-preview :text="resData.blog" model="preview" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag-content {
  @apply flex flex-nowrap;
  @apply rounded h-[80%] shadow mt-1 ml-[8%] w-[84%];

  .text-sidebar {
    @apply cursor-pointer shadow w-[25%] overflow-auto;

    .text-sidebar-forms {
      @apply m-1 shadow p-1;

      .forms-1 {
        @apply bg-gray-50 text-lg p-1 text-gray-600 hover: text-blue-400 ;
      }

      .forms-2 {
        @apply p-2 text-gray-500;
      }
    }
  }

  // 内容
  .text-blog {
    @apply mt-1 w-[75%] overflow-auto;
  }
}
</style>
