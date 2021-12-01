<script lang="ts" setup>
import SCategory from '@/components/sidebarModule/category/SCategory.vue'
import { resData, method } from '../data/sidebar'

method.GetApi()
</script>
<template>
  <div id="index-sidebar">
    <div class="index_s_main">
      <s-time></s-time>
      <s-ico></s-ico>

      <!-- 搜索 -->
      <div class="index_s_input">
        <a-select
          show-search
          v-model:value="resData.title"
          placeholder="input search text"
          style="width: 200px"
          :show-arrow="false"
          :filter-option="false"
          @search="method.Search"
          @select="method.skip"
        >
          >
          <a-select-option v-for="res in resData.articleData1" :key="res.id">{{ res.title }}</a-select-option>
        </a-select>

        <a-button class="a_but">搜一搜</a-button>
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
@import '@/design/methodCss';
@import '@/design/uitl';

/* index-sidebar
---------------------------------------------------------------- */
#index-sidebar {
  @apply fixed ml-3 overflow-auto;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20.4%, 93%);

  @apply bg-gray-100 shadow;

  .index_s_main {
    @include w-h(100%, 100%);

    /* 说显示描述内容 */
    .index_s_describe {
      width: 97%;
      color: #666;

      @apply mb-2 m-auto;
      @apply text-center rounded bg-white shadow;

      div > p {
        @apply px-1 py-2 m-1;
        @apply bg-gray-50 text-sm;
      }
    }

    .index-si-count {
      width: 97%;

      @apply p-1 mb-2 shadow rounded m-auto cursor-pointer;
      @apply bg-white;
    }

    /* 分类内容框 */
    .index_s_type {
      width: 97%;

      @apply p-1 mb-2 m-auto;
      @apply bg-white shadow rounded cursor-pointer;

      .index_s_type_name {
        @apply p-1 m-1 text-base font-semibold;
        @apply text-gray-900 bg-gray-200 cursor-pointer;
      }

      .index-si-type-text {
        @apply flex-1 px-1 p-1 m-1 text-sm text-center;
        @apply bg-gray-100 rounded;
      }
    }

    /* 搜索 */
    .index_s_input {
      width: 97%;

      @apply flex flex-nowrap;
      @apply p-2 mt-1 mb-2 m-auto;
      @apply bg-white shadow rounded;

      .a_but {
        @apply p-1 ml-1;
      }
    }
  }
}

#index-sidebar::-webkit-scrollbar {
  display: none;
}

.icon {
  @include w-h(1.5em, 1.5em);

  overflow: hidden;
  vertical-align: -0.1em;
  fill: currentColor;
}

// @screen xp {
//   #index-sidebar {
//     display: none;
//   }
// }
</style>
