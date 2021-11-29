<!--
 * @Author: Index.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-11-17 14:58:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Index.vue
-->
<script lang="ts" setup>
import { notification } from 'ant-design-vue'
notification.open({
  message: 'Title',
  description: '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue 开发搭建 地址: https://gitee.com/kaiouyang-sn'
})
</script>
<template>
  <div>
    <a-back-top />
    <blog-sidebar></blog-sidebar>
    <IndexSidebar></IndexSidebar>
    <router-view></router-view>
  </div>
</template>
