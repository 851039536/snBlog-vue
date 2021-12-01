<script lang="ts" setup>
import { notification } from 'ant-design-vue'

notification.open({
  message: 'Title',
  description: '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue 开发搭建 地址: https://gitee.com/kaiouyang-sn'
})
</script>
<template>
  <a-back-top />
  <l-sidebar></l-sidebar>
  <index-sidebar></index-sidebar>
  <s-header></s-header>
  <div id="blogs">
    <div class="blogs_main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#blogs {
  @include initialize(50%, 92%, 4.5%, null, 25%, null, #ffffff);
  @apply shadow;

  .blogs_main {
    @apply shadow-sm rounded-sm overflow-auto;
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
