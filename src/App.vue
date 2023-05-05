<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" :duration="500">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
      </transition>
      <transition name="fade" :duration="500">
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </transition>
    </router-view>
  </div>
  <c-header></c-header>
  <c-sidebar></c-sidebar>
  <c-bootom></c-bootom>
  <c-aspin></c-aspin>
  <c-footer></c-footer>
</template>
<script lang="ts" setup></script>

<style lang="scss">
/* 默认导入md的样式 */
/* stylelint-disable-next-line string-quotes */
@import './design/md_sm';
@include scroll;

#app {
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: PuHuiTiBASE;
  background: #f3f7fd;

  @apply absolute w-full;
}

#nprogress .bar {
  height: 1px !important; // 自定义高度
  background: #66b1ff !important; // 自定义颜色
}

.lg-sm {
  height: 1px !important; // 自定义高度
  background: #8ba1b8 !important; // 自定义颜色
}
</style>
