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
    <article2-content></article2-content>
    <c-right-sidebar>
      <base-time></base-time>
      <article2-sidebar-tag :r-data="rTag" name="标签"></article2-sidebar-tag>
      <custom-count
        title="站点统计"
        sum-title="文章数量"
        character-title="总字符数"
        heat-title="热度"
        time-title="最近更新"
        :sum="articleCount"
        :character="textCount"
        :heat="readCount"
        :time="time.substring(0, 10)"></custom-count>
    </c-right-sidebar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  @apply bg-white;
}
</style>
