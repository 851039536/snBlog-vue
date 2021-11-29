<script lang="ts" setup>
import { onMounted } from 'vue'
import { fyData, method } from '@vi/Blogs/data/index'
import BlogsContent from '@vi/Blogs/components/BlogsContent.vue'
import BlogsSidebar from '@vi/Blogs/components/BlogsSidebar.vue'
import { tool } from '@/utils/common/tool'
import SAspin from '@/components/aspin/sAspin.vue'

async function currentchange(val: number) {
  fyData.page = val
  await method.GetFy()
  await tool.BackTop()
}

onMounted(async () => {
  await method.GetApi()
})
</script>

<template>
  <blogs-sidebar></blogs-sidebar>
  <blog-sidebar></blog-sidebar>
  <a-back-top />
  <s-aspin></s-aspin>
  <div id="blogs" class="animate__animated animate__fadeIn">
    <div class="blogs_main">
      <!-- 内容框 -->
      <blogs-content :result-data="fyData.resultData"></blogs-content>
      <!-- end 内容框  -->
      <!-- 分页 -->
      <div class="blogs-page">
        <a-pagination
          size="small"
          @change="currentchange"
          :total="fyData.count"
          :pageSize="fyData.pagesize"
          show-quick-jumper
        ></a-pagination>
      </div>
      <!-- end 分页 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'index.scss';
</style>
