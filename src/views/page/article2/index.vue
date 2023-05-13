<script lang="ts" setup>
import { ArticleApi, ArticleTagApi } from '@/api'
import { blog } from './components/data'
const articleCount = ref('')
const textCount = ref('')
const readCount = ref('')
const time = ref('')
const rTag = ref([])
onMounted(async () => {
  const [tags, articleSums, textSums, readSums, times, blogs] = await axios.all([
    ArticleTagApi.getPaging(1, 100),
    ArticleApi.getSum(),
    ArticleApi.getStrSum(0, 1),
    ArticleApi.getStrSum(0, 2),
    ArticleApi.getPaging(0, 'null', 1, 1),
    ArticleApi.getById(392)
  ])
  rTag.value = tags.data.data // 文章总数
  console.log('[ tags ]-19', tags.data)
  articleCount.value = String(articleSums.data.data) // 文章总数
  textCount.value = String(textSums.data.data) // 字数总数
  readCount.value = String(readSums.data.data) // 阅读总数
  time.value = times.data.data[0].timeCreate
  blog.value = blogs.data.data.text
})
</script>
<template>
  <div class="index">
    <Article2Search></Article2Search>
    <article2-content></article2-content>
    <c-right-sidebar>
      <base-time></base-time>
      <article2-sidebar-tag :r-data="rTag"></article2-sidebar-tag>
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
