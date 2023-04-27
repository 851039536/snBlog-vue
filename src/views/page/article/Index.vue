<script lang="ts" setup>
import { ArticleApi, NavigationApi, UserTalkApi } from '@/api'
import { searchVisible } from '@/utils/common/IdentityData'

// 定义异步组件函数
const AsyncComponent = (name: any) => {
  return defineAsyncComponent(() => {
    return import(`./components/${name}`)
  })
}

// 定义异步组件
const ArticleSideInputModule = AsyncComponent(`sidebar/ArticleSideInput.vue`)
const ArticleSideSearchModule = AsyncComponent('sidebar/ArticleSideSearch')
const ArticleSideAnnunciateModule = AsyncComponent('sidebar/ArticleSideAnnunciate')
// const statisticsModule = AsyncComponent('/src/components/c-statistics.vue')
const statisticsModule = defineAsyncComponent(() => {
  return import('/src/components/c-statistics.vue')
})
const time = ref() // time of the last article
const articleSum = ref('') // number of articles
const textSum = ref('') // number of words in the articles
const readSum = ref('') // number of words read
const navData = ref([]) // array of links
/** 通告信息 */
const annunciate = ref('')
onMounted(async () => {
  searchVisible.value = false // 搜索框是否显示

  const [annunciates, navDatas, times, articleSums, textSums, readSums] = await axios.all([
    UserTalkApi.getUserTalkFirst(),
    NavigationApi.getTypeAsync(1, '常用工具', true),
    ArticleApi.getPaging(0, 'null', 1, 1),
    ArticleApi.getSum(),
    ArticleApi.getStrSum(0, 1),
    ArticleApi.getStrSum(0, 2)
  ])
  annunciate.value = annunciates.data // 公告
  navData.value = navDatas.data // 右侧导航
  time.value = times.data[0].timeCreate // 本站已运行时间
  articleSum.value = String(articleSums.data) // 文章总数
  textSum.value = String(textSums.data) // 字数总数
  readSum.value = String(readSums.data) // 阅读总数
})
</script>
<template>
  <div class="blog">
    <c-back-top></c-back-top>
    <router-view v-slot="{ Component }">
      <transition name="fade" :duration="500">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- 侧边栏 -->
    <c-right-sidebar>
      <ArticleSideManager></ArticleSideManager>
      <CTime></CTime>
      <ArticleSideInputModule></ArticleSideInputModule>

      <ArticleSideAnnunciateModule :name="annunciate"></ArticleSideAnnunciateModule>
      <ArticleSideTool :r-data="navData" name="常用工具"></ArticleSideTool>
      <statisticsModule
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="articleSum"
        :res2="textSum"
        :res3="readSum"
        :res4="time"></statisticsModule>
    </c-right-sidebar>

    <div id="search"></div>
    <c-modal-search @close-model="searchVisible = false">
      <ArticleSideSearchModule></ArticleSideSearchModule>
    </c-modal-search>
  </div>
</template>
<style lang="scss" scoped>
.blog {
  --at-apply: h-[92%] mt-[4.6%] ml-[22%] w-[49.5%] relative;
}

@media screen and (max-width: 768px) {
  .blog {
    --at-apply: mt-[19%] ml-0 w-full;
  }
}

@media screen and (min-width: 1366px) {
  .blog {
    --at-apply: h-[90%] mt-[6.1%];
  }
}

@media screen and (min-width: 1536px) {
  .blog {
    --at-apply: mt-[4.6%];
  }
}
</style>
