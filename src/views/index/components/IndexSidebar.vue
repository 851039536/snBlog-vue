<script lang="ts" setup>
import { resData, method } from '../data/sidebar'

method.GetApi()
</script>
<template>
  <div class="iside">
    <div class="iside-main">
      <s-time></s-time>
      <div class="iside-input">
        <a-select
          v-model:value="resData.title"
          show-search
          placeholder="input search text"
          style="width: 100%"
          :show-arrow="false"
          :filter-option="false"
          @search="method.Search"
          @select="method.skip">
          >
          <a-select-option v-for="res in resData.articleData1" :key="res.id">{{ res.title }}</a-select-option>
        </a-select>
      </div>

      <s-describe :user-talk="resData.userTalk"></s-describe>
      <index-tool :res-data="resData.navType" tag-name="常用工具"></index-tool>

      <!-- 站点统计框 -->
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
      <!-- end 站点统计框 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iside {
  @apply s-side;

  // @apply overflow-auto;

  .iside-main {
    @apply h-full w-full;

    .iside-input {
      @include center-children;
      @apply flex flex-nowrap;
      @apply m-auto mt-1 mb-2 p-2 w-[97%];
      @apply bg-white rounded shadow;
    }
  }
}

.iside::-webkit-scrollbar {
  display: none;
}

@screen <lg {
  .iside {
    display: none;
  }
}

@screen <xp {
  .iside {
    @apply h-[90%] top-[11%];
  }
}
</style>
