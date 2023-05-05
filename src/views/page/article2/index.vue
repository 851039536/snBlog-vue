<script lang="ts" setup>
import { ArticleApi, ArticleTagApi } from '@/api'
import { blog } from './components/data'
const articleCount = ref('')
const textCount = ref('')
const readCount = ref('')
const time = ref('')
const rTag = ref([])
onMounted(async () => {
  time.value = await (await ArticleApi.getPaging(0, 'null', 1, 1)).data[0].timeCreate

  const [tags, articleSums, textSums, readSums] = await axios.all([
    ArticleTagApi.getAll(true),
    ArticleApi.getSum(),
    ArticleApi.getStrSum(0, 1),
    ArticleApi.getStrSum(0, 2)
  ])
  rTag.value = tags.data // 文章总数
  articleCount.value = String(articleSums.data) // 文章总数
  textCount.value = String(textSums.data) // 字数总数
  readCount.value = String(readSums.data) // 阅读总数

  blog.value = await (await ArticleApi.getById(392)).data.text
})
</script>
<template>
  <div class="index">
    <Article2Search></Article2Search>
    <Article2Content></Article2Content>
    <c-right-sidebar>
      <CTime></CTime>
      <Article2SidebarTag :r-data="rTag" name="标签"></Article2SidebarTag>
      <c-statistics
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="articleCount"
        :res2="textCount"
        :res3="readCount"
        :res4="time.substring(0, 10)"></c-statistics>
    </c-right-sidebar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  // font-family: PuHuiTiXL;

  @apply h-[92%] mt-[4.6%] ml-[22%] w-[49.5%] relative;
  @apply bg-white;
}
</style>
