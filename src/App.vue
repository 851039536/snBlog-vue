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
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue'

window.addEventListener('keydown', e => {
  if (e.metaKey && e.key === 'Meta') {
    message.loading('测试')
  }
})
</script>

<style lang="scss">
@include scroll;

#app {
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
