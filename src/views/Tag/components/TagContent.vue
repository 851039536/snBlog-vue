<script lang="ts" setup>
import { article } from '@/api'
import { resData } from '../data/data'

async function GetApi(id: number) {
  resData.blog = await (await article.GetById(id, true)).data[0].text
}
</script>
<template>
  <div class="tagcont">
    <div class="tagcont-side">
      <div v-for="res in resData.resultData" :key="res.id" class="text-sidebar-forms">
        <div class="forms-1" @click="GetApi(res.id)">
          <span>{{ res.title }}</span>
        </div>
        <div class="forms-2">
          {{ res.timeCreate.substring(0, 10) }}
          <span>测试</span>
        </div>
      </div>
    </div>

    <div class="text-blog">
      <v-md-preview :text="resData.blog" model="preview" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tagcont {
  @apply flex flex-nowrap;
  @apply rounded h-730px shadow mt-1;

  .tagcont-side {
    @apply cursor-pointer shadow w-[25%] overflow-auto;

    .text-sidebar-forms {
      @apply m-1 shadow p-1;

      .forms-1 {
        @apply bg-gray-100 text-lg p-1 text-gray-700 hover: text-blue-400;
      }

      .forms-2 {
        @apply p-1 text-gray-500;
      }
    }
  }

  // 内容
  .text-blog {
    @apply mt-1 w-[75%] overflow-auto;
  }
}
</style>
