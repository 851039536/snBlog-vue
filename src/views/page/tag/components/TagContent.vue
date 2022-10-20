<script lang="ts" setup>
import { articleApi } from '@/api'
import { rData } from '../data/data'
/**
 * 选中后变色并且效果不消失
 */
const sideIndex = ref(0)
async function GetApi(id: number) {
  sideIndex.value = id
  rData.blog = await (await articleApi.GetById(id, true)).data[0].text
}
onMounted(async () => {
  await GetApi(147)
})
</script>
<template>
  <div class="tagcont">
    <div class="tagcont-side">
      <div v-for="res in rData.articleData" :key="res.id" class="text-sidebar-forms">
        <div class="forms-1" :class="sideIndex == res.id ? 'active' : ''" @click="GetApi(res.id)">
          <span>{{ res.title }}</span>
        </div>
        <div class="forms-2">
          <span>{{ res.give }}</span>
          <span>{{ res.read }}</span>
          <span>{{ res.timeCreate.substring(0, 10) }}</span>
          <span>编辑</span>
        </div>
      </div>
    </div>

    <div class="tagcont-text">
      <v-md-preview :text="rData.blog" model="preview" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tagcont {
  @apply flex flex-nowrap;
  @apply rounded h-840px shadow mt-1;

  .tagcont-side {
    @apply cursor-pointer shadow w-[25%] overflow-auto;

    .text-sidebar-forms {
      @apply m-1 shadow p-1;

      .forms-1 {
        @apply p-1 text-lg;
        @apply bg-blue-100 rounded;
        @apply hover: text-blue-400;
      }

      .forms-1.active {
        color: #fff;
        background-color: #0ea5e9;
      }

      .forms-2 {
        @apply p-1 text-gray-500;

        span {
          @apply ml-1 rounded;
        }
      }
    }
  }

  // 内容
  .tagcont-text {
    @apply mt-1 w-[75%] overflow-auto;
  }
}
</style>
