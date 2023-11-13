<script lang="ts" setup>
import { uiSettings } from '@/store/modules/uiSettings'
import { useArticleApi } from '@hooksHttp/useArticleApi'
import { blog } from './components/data'
const { getById } = useArticleApi()
const ui = uiSettings()
onMounted(async () => {
  ui.rightSidebar = false
  const [blogs] = await axios.all([getById(392)])
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
  @apply bg-white mt-1 rounded h-[92.58vh];
}
</style>
