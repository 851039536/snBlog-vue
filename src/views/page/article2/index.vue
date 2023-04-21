<script lang="ts" setup>
import { ArticleApi, ArticleTagApi } from '@/api'
const articleCount = ref('')
const textCount = ref('')
const readCount = ref('')
const articleStr = ref('')
const rTag = ref([])
onMounted(async () => {
  rTag.value = await (await ArticleTagApi.getAll(true)).data
  articleCount.value = await (await ArticleApi.getSum()).data
  articleCount.value = String(articleCount.value)
  textCount.value = await (await ArticleApi.getStrSum(0, 1)).data
  textCount.value = String(textCount.value)
  readCount.value = await (await ArticleApi.getStrSum(0, 2)).data
  readCount.value = String(readCount.value)
  articleStr.value = await (await ArticleApi.getPaging(0, 'null', 1, 1)).data[0].timeCreate
})
</script>
<template>
  <div class="index">
    <Article2Search></Article2Search>
    <Article2Content></Article2Content>
    <c-right-sidebar>
      <CTime></CTime>
      <Article2SideLb :r-data="rTag" name="标签"></Article2SideLb>
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
    </c-right-sidebar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  @apply h-[92%] mt-[4.6%] ml-[22%] w-[49.5%] relative;
  @apply bg-white;
}
</style>
