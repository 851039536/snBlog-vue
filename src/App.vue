<template>
  <div id="app">
    <the-header></the-header>
    <main class="app-main">
      <!-- Left sidebar -->
      <aside class="app-grail-left">
        <the-sidebar></the-sidebar>
      </aside>
      <!-- Main content -->
      <div class="app-grail-middle">
        <router-view v-slot="{ Component }">
          <transition name="fade" :duration="500">
            <keep-alive>
              <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name" />
            </keep-alive>
          </transition>
          <transition name="fade" :duration="500">
            <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name" />
          </transition>
        </router-view>
      </div>

      <!-- Right sidebar -->
      <nav v-if="uiSettings.uiRightVisible" class="app-grail-right">
        <!-- 侧边栏 -->
        <c-right-sidebar>
          <article-side-input-module></article-side-input-module>
          <article-side-manager></article-side-manager>

          <article-side-annunciate-module :name="annunciate"></article-side-annunciate-module>
          <article-side-tool :r-data="navData" name="常用工具"></article-side-tool>
          <statistics-module
            title="站点统计"
            sum-title="文章数量"
            character-title="总字符数"
            heat-title="热度"
            time-title="最近更新"
            :sum="articleSum"
            :character="textSum"
            :heat="readSum"
            :time="time"></statistics-module>
        </c-right-sidebar>

        <div id="search"></div>
        <c-modal-search @close-model="uiSettings.uiSearchVisible = false">
          <article-side-search-module></article-side-search-module>
        </c-modal-search>
      </nav>
    </main>

    <!-- <the-bootom></the-bootom> -->
    <base-article-fast-send></base-article-fast-send>
    <base-aspin></base-aspin>
    <the-footer></the-footer>
  </div>
</template>
<script lang="ts" setup>
import { ArticleApi, NavigationApi, UserTalkApi } from '@/api'
import { useUiSetStore } from '@/store/modules/uiSettings'
const uiSettings = useUiSetStore()
// 定义异步组件函数
const AsyncComponent = (name: any) => {
  return defineAsyncComponent(() => {
    return import(/* @vite-ignore */ `@views/page/article/components/sidebar/${name}.vue`)
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
  uiSettings.uiSearchVisible = false // 搜索框是否显示

  const [annunciates, navDatas, times, articleSums, textSums, readSums] = await axios.all([
    await UserTalkApi.getUserTalkFirst(),
    await NavigationApi.getTypeAsync(1, '常用工具', true),
    await ArticleApi.getPaging(0, 'null', 1, 1),
    await ArticleApi.getSum(),
    await ArticleApi.getStrSum(0, 1),
    await ArticleApi.getStrSum(0, 2)
  ])

  annunciate.value = annunciates.data // 公告
  navData.value = navDatas.data // 右侧导航
  time.value = times.data.data[0].timeCreate // 本站已运行时间
  articleSum.value = String(articleSums.data.data) // 文章总数
  textSum.value = String(textSums.data.data) // 字数总数
  readSum.value = String(readSums.data.data) // 阅读总数
})
</script>

<style lang="scss">
/* 默认导入md的样式 */
@import './design/md-sm';
@include scroll;

#app {
  display: flex;
  flex-direction: column;
  background-color: #e5e5f7;
  background-image: repeating-linear-gradient(to right, #bdbedb, #9b9baa 0.4px, #e5e5f7 0.4px, #e5e5f7);

  .app-main {
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    @apply w-[75%] h-[92.78vh] m-auto;

    .app-grail-left {
      width: 15%;

      @apply mr-2 relative left-1;
    }

    .app-grail-middle {
      flex-grow: 1;

      @apply h-[92.78vh] w-[40%];
    }

    .app-grail-right {
      width: 21%;

      @apply ml-1;
    }
  }

  // .app-body {
  //   @apply ml-[24%] mt-[4.6%] w-[47%];

  //   @include media-2xl {
  //     @apply ml-[23.3%] mt-[6.5%];
  //   }

  //   @include media-xl {
  //     @apply ml-[23.3%] mt-[6.5%];
  //   }

  //   @include media-lg {
  //     @apply ml-[23.3%] mt-[7.5%];
  //   }

  //   @include media-base {
  //     @apply ml-[23.3%] mt-[10%];
  //   }
  // }
}

#nprogress .bar {
  height: 2px !important; // 自定义高度
  background: #66b1ff !important; // 自定义颜色
}

.lg-sm {
  height: 2px !important; // 自定义高度
  background: #8ba1b8 !important; // 自定义颜色
}
</style>
