<script lang="ts" setup>
import { notification } from 'ant-design-vue'

notification.open({
  message: 'Title',
  description: '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue 开发搭建 地址: https://gitee.com/kaiouyang-sn'
})
</script>
<template>
  <section>
    <a-back-top />
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

// @screen xp {
//   #blogs {
//     .blogs_main {
//       @apply m-0 mt-14;

//       width: 100%;
//     }
//   }
// }
</style>
