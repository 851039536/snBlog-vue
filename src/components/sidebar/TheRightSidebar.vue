<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
import { useNavigationApi } from '@hooks/http'
import { useApi } from '@/api/useApi'

const { ArticleApi } = useApi()
const { getPaging: navigationPaging } = useNavigationApi()
const ui = useUiSetStore()
const time = ref()
const articleSum = ref('')
const textSum = ref('')
const readSum = ref('')
const navData = ref([])

onMounted(async () => {
  ui.searchArticle = false
  const [navs, times, articleSums, textSums, readSums] = await axios.all([
    await navigationPaging(1, '常用工具', 1, 10),
    await ArticleApi.getPaging(0, 'null', 1, 1),
    await ArticleApi.getSum(),
    await ArticleApi.getStrSum(0, 1),
    await ArticleApi.getStrSum(0, 2)
  ])

  navData.value = navs.data.data
  time.value = times.data.data[0].timeCreate
  articleSum.value = String(articleSums.data.data)
  textSum.value = String(textSums.data.data)
  readSum.value = String(readSums.data.data)
})
</script>
<template>
  <div>
    <c-right-sidebar>
      <right-sidebar-manager></right-sidebar-manager>
      <right-sidebar-search></right-sidebar-search>
      <right-sidebar-annunciate></right-sidebar-annunciate>
      <right-sidebar-re-sou></right-sidebar-re-sou>
      <right-sidebar-tool :r-data="navData"></right-sidebar-tool>
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

    <right-sidebar-search-detail></right-sidebar-search-detail>
  </div>
</template>
