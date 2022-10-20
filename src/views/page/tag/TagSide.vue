<script lang="ts" setup>
import { resData, method } from './data/sidebar'
const tagName = ref('标签')
onMounted(async () => {
  await method.GetApi()
})
</script>
<template>
  <div class="index-sidebar">
    <div class="index-s-main">
      <s-time></s-time>
      <tag-side-label :sort-data="resData.labelsData" :tag-name="tagName"></tag-side-label>
      <station-text
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="resData.articleCount"
        :res2="resData.textCount"
        :res3="resData.readCount"
        :res4="resData.articleStr.substring(0, 10)"></station-text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-sidebar {
  @apply s-side;
  @apply overflow-auto;

  .index-s-main {
    @apply h-full w-full;
  }
}

.index-sidebar::-webkit-scrollbar {
  display: none;
}

@screen <lg {
  .index-sidebar {
    display: none;
  }
}

@screen <xp {
  .index-sidebar {
    @apply h-[90%] top-[11%];
  }
}
</style>
