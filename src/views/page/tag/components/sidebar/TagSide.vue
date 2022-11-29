<script lang="ts" setup>
import { articleApi, labelsApi } from '@/api'
const articleCount = ref('')
const textCount = ref('')
const readCount = ref('')
const articleStr = ref('')
const rLabel = ref([])
onMounted(async () => {
  rLabel.value = await (await labelsApi.GetAll(true)).data
  articleCount.value = await (await articleApi.GetSum(0, 'null', true)).data
  articleCount.value = String(articleCount.value)
  textCount.value = await (await articleApi.GetStrSum(0, 1, 'null', true)).data
  textCount.value = String(textCount.value)
  readCount.value = await (await articleApi.GetStrSum(0, 2, 'null', true)).data
  readCount.value = String(readCount.value)
  articleStr.value = await (await articleApi.GetFy(0, 'null', 1, 1, 'id', true, true)).data[0].timeCreate
})
</script>
<template>
  <div class="side">
    <c-time></c-time>
    <tag-side-label :sort-data="rLabel" tag-name="标签"></tag-side-label>
    <c-statistics
      title="站点统计"
      title1="文章数量"
      title2="总字符数"
      title3="热度"
      title4="最近更新"
      :res1="articleCount"
      :res2="textCount"
      :res3="readCount"
      :res4="articleStr.substring(0, 10)"></c-statistics>
  </div>
</template>

<style lang="scss" scoped>
.side {
  @apply h-[92%] top-[8.4%] right-[11%] w-[17%] fixed;
}

.side::-webkit-scrollbar {
  display: none;
}

// @screen <lg {
//   .index-sidebar {
//     display: none;
//   }
// }

// @screen <xp {
//   .index-sidebar {
//     @apply h-[90%] top-[11%];
//   }
// }
</style>
