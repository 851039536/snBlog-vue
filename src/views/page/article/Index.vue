<script lang="ts" setup>
import { articleApi, navigationApi, userTalk } from '@/api'
import { hSearch } from '@/hooks/data'

const ArSideInput = defineAsyncComponent(() => {
  return import('./components/sidebar/ArticleSideInput.vue')
})
const ArSideSearch = defineAsyncComponent(() => {
  return import('./components/sidebar/ArticleSideSearch.vue')
})
const ArAnnunciate = defineAsyncComponent(() => {
  return import('./components/sidebar/Annunciate.vue')
})
const statistics = defineAsyncComponent(() => {
  return import('@/components/c-statistics.vue')
})
const articleTime = ref()
const articleCount = ref('')
const textCount = ref('')
const readCount = ref('')
const rNav = ref([])
const annunciate = ref('') //通告
onMounted(async () => {
  hSearch.value = false //
  annunciate.value = await (await userTalk.GetUserTalkFirst()).data
  rNav.value = await (await navigationApi.GetTypeAsync(1, '常用工具', true)).data
  articleTime.value = await (await articleApi.GetPaging(0, 'null', 1, 1, 'id', true, true)).data[0].timeCreate
  articleCount.value = await (await articleApi.GetSum(0, 'null', true)).data
  articleCount.value = String(articleCount.value)
  textCount.value = await (await articleApi.GetStrSum(0, 1, 'null', true)).data
  textCount.value = String(textCount.value)
  readCount.value = await (await articleApi.GetStrSum(0, 2, 'null', true)).data
  readCount.value = String(readCount.value)
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
      <c-sidebar-container>
        <div class="h-30px text-base text-cool-gray-500 cursor-pointer">
          <!-- <div class="float-left">创作中心</div> -->
          <div class="float-right hover:text-blue-400">管理></div>
        </div>
        <div class="bor flex justify-center items-center my-2 cursor-pointer">
          <div class="mx-3 hover:text-blue-400">
            <div i-flat-color-icons-about w-7 h-7 m-auto></div>
            快捷发文
          </div>
          <div class="mx-3 hover:text-blue-400">
            <div i-flat-color-icons-file w-7 h-7 m-auto></div>
            写文章
          </div>
          <div class="mx-3 hover:text-blue-400">
            <div i-flat-color-icons-sports-mode w-7 h-7 m-auto></div>
            发动态
          </div>
          <div class="mx-3 hover:text-blue-400">
            <div i-flat-color-icons-wikipedia w-7 h-7 m-auto></div>
            发代码
          </div>
        </div>
        <div class="flex justify-center items-center my-1 pb-2">
          <div class="mx-1">发布 0</div>
          <div class="mx-1">草稿 0</div>
          <div class="mx-1">待审核 0</div>
          <div class="mx-1">收藏 0</div>
        </div>
      </c-sidebar-container>
      <CTime></CTime>
      <ArSideInput></ArSideInput>

      <ArAnnunciate :name="annunciate"></ArAnnunciate>
      <Tool :r-data="rNav" name="常用工具"></Tool>
      <statistics
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="articleCount"
        :res2="textCount"
        :res3="readCount"
        :res4="articleTime"></statistics>
    </c-right-sidebar>

    <div id="search"></div>
    <c-modal-search @close-model="hSearch = false">
      <ArSideSearch></ArSideSearch>
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
