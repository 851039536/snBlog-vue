<script lang="ts" setup>
import { ArticleApi, NavigationApi } from '@/api'

import { useUiSetStore } from '@store/modules/uiSettings'
import { useArticleApi } from '@hooksHttp/index'
const { getArticleSum } = useArticleApi()
const ui = useUiSetStore()
const time = ref()
const articleSum = ref('')
const textSum = ref('')
const readSum = ref('')
const navData = ref([])

onMounted(async () => {
  ui.uiSearchVisible = false
  const [navDatas, times, articleSums, textSums, readSums] = await axios.all([
    await NavigationApi.getTypeAsync(1, '常用工具', true),
    await ArticleApi.getPaging(0, 'null', 1, 1),
    await getArticleSum(),
    await ArticleApi.getStrSum(0, 1),
    await ArticleApi.getStrSum(0, 2)
  ])

  navData.value = navDatas.data // 右侧导航
  time.value = times.data.data[0].timeCreate // 本站已运行时间
  articleSum.value = String(articleSums.data.data) // 文章总数
  textSum.value = String(textSums.data.data) // 字数总数
  readSum.value = String(readSums.data.data) // 阅读总数
})
</script>
<template>
  <div v-if="ui.uiRightVisible">
    <c-right-sidebar>
      <right-sidebar-manager></right-sidebar-manager>
      <right-sidebar-search></right-sidebar-search>
      <right-sidebar-annunciate></right-sidebar-annunciate>
      <right-sidebar-re-sou></right-sidebar-re-sou>
      <right-sidebar-tool :r-data="navData" name="常用工具"></right-sidebar-tool>
      <right-sidebar-statistics
        title="站点统计"
        sum-title="文章数量"
        character-title="总字符数"
        heat-title="热度"
        time-title="最近更新"
        :sum="articleSum"
        :character="textSum"
        :heat="readSum"
        :time="time"></right-sidebar-statistics>
    </c-right-sidebar>

    <div id="search"></div>
    <c-modal-search @close-model="ui.uiSearchVisible = false">
      <right-sidebar-search-detail></right-sidebar-search-detail>
    </c-modal-search>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
