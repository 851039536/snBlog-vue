<script lang="ts" setup>
import { ArticleApi, NavigationApi, UserTalkApi } from '@/api'
import { searchVisible } from '@/utils/common/visible-data'

// 定义异步组件函数
const AsyncComponent = (name: any) => {
  return defineAsyncComponent(() => {
    return import(/* @vite-ignore */ `./components/sidebar/${name}.vue`)
  })
}

// 定义异步组件
const ArticleSideInputModule = AsyncComponent(`ArticleSideInput`)
const ArticleSideSearchModule = AsyncComponent(`ArticleSideSearch`)
const ArticleSideAnnunciateModule = AsyncComponent(`ArticleSideAnnunciate`)
const statisticsModule = defineAsyncComponent(() => {
  return import('/src/components/CustomCount.vue')
})
const time = ref()
const articleSum = ref('')
const textSum = ref('')
const readSum = ref('')
const navData = ref([])
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
  time.value = times.data.data[0].timeCreate // 本站已运行时间
  articleSum.value = String(articleSums.data.data) // 文章总数
  textSum.value = String(textSums.data.data) // 字数总数
  readSum.value = String(readSums.data.data) // 阅读总数
})
</script>
<template>
  <div class="blog">
    <base-top></base-top>

    <router-view v-slot="{ Component }">
      <transition name="fade" :duration="300">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- 侧边栏 -->
    <c-right-sidebar>
      <ArticleSideManager></ArticleSideManager>
      <base-time></base-time>
      <ArticleSideInputModule></ArticleSideInputModule>

      <ArticleSideAnnunciateModule :name="annunciate"></ArticleSideAnnunciateModule>
      <ArticleSideTool :r-data="navData" name="常用工具"></ArticleSideTool>
      <statisticsModule
        title="站点统计"
        sum-title="文章数量"
        character-title="总字符数"
        heat-title="热度"
        time-title="最近更新"
        :sum="articleSum"
        :character="textSum"
        :heat="readSum"
        :time="time"></statisticsModule>
    </c-right-sidebar>

    <div id="search"></div>
    <c-modal-search @close-model="searchVisible = false">
      <ArticleSideSearchModule></ArticleSideSearchModule>
    </c-modal-search>
  </div>
</template>
<style lang="scss" scoped>
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
