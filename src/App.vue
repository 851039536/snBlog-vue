<template>
  <div id="app">
    <div class="app-body">
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
  </div>
  <the-sidebar></the-sidebar>
  <the-header></the-header>
  <the-bootom></the-bootom>
  <base-aspin></base-aspin>
  <the-footer></the-footer>
</template>
<script lang="ts" setup></script>

<style lang="scss">
/* 默认导入md的样式 */
@import './design/md-sm';
@include scroll;

#app {
  background: #f3f7fd;

  @apply w-full absolute;

  .app-body {
    @apply ml-[24%] mt-[4.6%] w-[47%];

    @include media-2xl {
      @apply ml-[23.3%] mt-[6.5%];
    }

    @include media-xl {
      @apply ml-[23.3%] mt-[6.5%];
    }

    @include media-lg {
      @apply ml-[23.3%] mt-[7.5%];
    }

    @include media-base {
      @apply ml-[23.3%] mt-[10%];
    }
  }
}

#nprogress .bar {
  height: 2px !important; // 自定义高度
  background: #66b1ff !important; // 自定义颜色
}

.lg-sm {
  height: 2px !important; // 自定义高度
  background: #8ba1b8 !important; // 自定义颜色
}
</style>
