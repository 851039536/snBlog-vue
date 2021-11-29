<script lang="ts" setup>
import BlogIco from '@/components/sidebarModule/sico/sIco.vue'
import BlogInformation from '@/components/sidebarModule/sstatistics/sStatistics.vue'
import SDescribe from '@/components/describe/sDescribe.vue'
import SCategory from '@/components/sidebarModule/category/sCategory.vue'
import { resData, method } from '../../data/sidebar'
import STime from '@/components/sidebarModule/stime/sTime.vue'
method.GetApi()
</script>
<template>
  <div id="indexsidebar">
    <div class="index_s_main">
      <STime></STime>
      <blog-ico></blog-ico>

      <!-- 搜索 -->
      <div class="index_s_input">
        <a-select
          show-search
          v-model:value="resData.sntitle"
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

        <a-button class="a_but">搜一搜a</a-button>
      </div>
      <!-- end 搜索 -->

      <s-describe :userTalk="resData.userTalk"></s-describe>
      <SCategory :result-data="resData.sortData" name="分类"></SCategory>
      <SCategory :result-data="resData.labelsData" name="标签"></SCategory>

      <!-- 站点统计框 -->
      <BlogInformation
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="resData.articleCount"
        :res2="resData.textCount"
        :res3="resData.readCount"
        :res4="resData.articleStr.substring(0, 10)"
      ></BlogInformation>
      <!-- end 站点统计框 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
