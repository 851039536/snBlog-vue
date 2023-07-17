<script lang="ts" setup>
import { ArticleApi, NavigationApi, UserTalkApi } from '@/api'
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()

const time = ref()
const articleSum = ref('')
const textSum = ref('')
const readSum = ref('')
const navData = ref([])
/** 通告信息 */
const annunciate = ref('')
// rightVisible.value = true
onMounted(async () => {
  ui.uiSearchVisible = false // 搜索框是否显示

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
  </div>
</template>
<style lang="scss" scoped>
.blog {
  --at-apply: mt-1 h-full;
}
</style>
