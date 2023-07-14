<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { blog } from './components/data'

onMounted(async () => {
  const [blogs] = await axios.all([ArticleApi.getById(392)])
  blog.value = blogs.data.data.text
})
</script>
<template>
  <div class="index">
    <Article2Search></Article2Search>
    <article2-content></article2-content>
  </div>
</template>

<style lang="scss" scoped>
.index {
  @apply bg-white mt-1 rounded h-[92.78vh];
}
</style>
