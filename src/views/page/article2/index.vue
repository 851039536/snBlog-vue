<script lang="ts" setup>
import { uiSettings } from '@/store/modules/uiSettings'
import { blog } from './components/data'
import { useApi } from '@api/useApi'
const { ArticleApi } = useApi()
const ui = uiSettings()
onMounted(async () => {
  ui.rightSidebar = false
  const [blogs] = await axios.all([ArticleApi.getById(392)])
  blog.value = blogs.data.data.text
})
</script>
<template>
  <div class="mt-1 h-[92.58vh] rounded bg-white">
    <Article2Search></Article2Search>
    <article2-content></article2-content>
  </div>
</template>
