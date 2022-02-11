<script lang="ts" setup>
import { resData, method } from '../data/sidebar'

method.GetApi()
</script>
<template>
  <div id="index-sidebar">
    <div class="index_s_main">
      <s-time></s-time>
      <!-- 搜索 -->
      <div class="index_s_input">
        <a-select
          show-search
          v-model:value="resData.title"
          placeholder="input search text"
          style="width: 100%"
          :show-arrow="false"
          :filter-option="false"
          @search="method.Search"
          @select="method.skip"
        >
          >
          <a-select-option v-for="res in resData.articleData1" :key="res.id">{{ res.title }}</a-select-option>
        </a-select>
      </div>
      <!-- end 搜索 -->

      <s-describe :userTalk="resData.userTalk"></s-describe>
      <s-category :result-data="resData.sortData" name="分类"></s-category>
      <s-category :result-data="resData.labelsData" name="标签"></s-category>

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
        :res4="resData.articleStr.substring(0, 10)"
      ></station-text>
      <!-- end 站点统计框 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#index-sidebar {
  @apply ml-3 fixed overflow-auto;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20.4%, 93%);

  @apply bg-gray-100 shadow;

  .index_s_main {
    @include w-h(100%, 100%);

    /* 搜索 */
    .index_s_input {
      width: 97%;
      @include center-children;
      @apply flex flex-nowrap;
      @apply m-auto mt-1 mb-2 p-2;
      @apply bg-white rounded shadow;

      .a_but {
        @apply ml-1 p-1;
      }
    }
  }
}

#index-sidebar::-webkit-scrollbar {
  display: none;
}

@screen <sm {
  #index-sidebar {
    display: none;
  }
}
</style>
