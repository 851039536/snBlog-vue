<script lang="ts" setup>
import { rData, method } from '../data/sidebar'
method.GetApi()
</script>
<template>
  <div class="side">
    <div class="side-main">
      <s-time></s-time>
      <div class="side-input">
        <a-select
          v-model:value="rData.title"
          show-search
          style="width: 100%"
          :show-arrow="false"
          :filter-option="false"
          @search="method.Search"
          @select="method.skip">
          >
          <a-select-option v-for="res in rData.articleData1" :key="res.id">{{ res.title }}</a-select-option>
        </a-select>
      </div>
      <s-describe :user-talk="rData.userTalk"></s-describe>
      <index-tool :res-data="rData.navType" tag-name="常用工具"></index-tool>
      <station-text
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="rData.articleCount"
        :res2="rData.textCount"
        :res3="rData.readCount"
        :res4="rData.articleStr.substring(0, 10)"></station-text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side {
  @apply s-side;

  .side-main {
    @apply h-full w-full;

    .side-input {
      @include center-children;
      @apply flex flex-nowrap;
      @apply m-auto mt-1 mb-2 p-2 w-[97%];
      @apply bg-white rounded shadow;
    }
  }
}

.side::-webkit-scrollbar {
  display: none;
}

@screen <lg {
  .side {
    display: none;
  }
}

@screen <xp {
  .side {
    @apply h-[90%] top-[11%];
  }
}
</style>
