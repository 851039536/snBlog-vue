<script lang="ts" setup>
import { notification } from 'ant-design-vue'

notification.open({
  message: 'Title',
  description: '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue 开发搭建 地址: https://gitee.com/kaiouyang-sn'
})
</script>
<template>
  <section>
    <a-back-top>
      <div class="rounded-lg bg-gray-400 shadow text-center text-white text-base py-2">UP</div>
    </a-back-top>
    <!-- <a-back-top /> -->
    <l-sidebar></l-sidebar>
    <index-sidebar></index-sidebar>
    <s-header></s-header>
    <div id="blogs">
      <router-view> </router-view>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#blogs {
  @apply h-[92%] mt-[4.5%] ml-[25%] w-[50%];
  @apply rounded shadow overflow-auto;
}

@screen <lg {
  #blogs {
    @apply mt-[10%]  ml-0 w-full;
  }
}
</style>
