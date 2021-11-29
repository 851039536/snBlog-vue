<script lang="ts" setup></script>

<template>
  <l-sidebar></l-sidebar>
  <blogs-sidebar></blogs-sidebar>
  <a-back-top />
  <s-aspin></s-aspin>
  <div id="blogs" class="animate__animated animate__fadeIn">
    <div class="blogs_main">
      <router-view></router-view>
      <!-- end 内容框  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'index.scss';
</style>
