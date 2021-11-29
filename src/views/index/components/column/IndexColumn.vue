<script lang="ts" setup>
import BlogsContent from '@vi/Blogs/components/BlogsContent.vue'
import { state, method } from '../../data/column'

method.GetCount()
method.GetFy()
</script>

<template>
  <div id="blogs" class="animate__animated animate__fadeIn">
    <div class="blogs_main">
      <!-- 内容框 -->
      <blogs-content :result-data="state.resultData"></blogs-content>
      <!-- end 内容框  -->
      <!-- 分页 -->
      <div class="indextitle_page">
        <a-pagination
          size="small"
          @change="method.CurrentChange"
          :total="state.count"
          :pageSize="state.pagesize"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<style lang="scss">
@import '@/design/methodCss';
@import '@/design/uitl';
@import '@/views/blogs/index.scss';

#blogs {
  @include initialize(50%, 92%, 4.5%, null, 25%, null, #ffffff);
  @apply shadow;

  .blogs_main {
    @apply shadow-sm rounded-sm overflow-auto;
    .blogs-page {
      @apply w-full py-5 bg-white shadow rounded;
    }
  }
}

@screen xp {
  #blogs {
    .blogs_main {
      @apply m-0 mt-14;

      width: 100%;
    }
  }
}
</style>
