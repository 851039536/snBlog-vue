<template>
  <div id="app">
    <the-header></the-header>
    <main class="app-main">
      <!-- Left sidebar -->
      <aside class="app-grail-left">
        <the-sidebar></the-sidebar>
      </aside>
      <!-- Main content -->
      <div class="app-grail-middle">
        <router-view v-slot="{ Component }">
          <transition name="fade" :duration="500">
            <!-- :key="$route.name"  -->
            <keep-alive>
              <component :is="Component" v-if="$route.meta.keepAlive" />
            </keep-alive>
          </transition>
          <transition name="fade" :duration="500">
            <component :is="Component" v-if="!$route.meta.keepAlive" />
          </transition>
        </router-view>
      </div>

      <!-- Right sidebar -->
      <div v-if="ui.uiRightVisible" class="app-grail-right">
        <the-right-sidebar></the-right-sidebar>
      </div>
    </main>
    <base-login></base-login>
    <base-aspin></base-aspin>
    <the-footer></the-footer>
  </div>
</template>

<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
onMounted(() => {
  ui.uiSearchVisible = false
})
</script>

<style lang="scss">
@include scroll;

#app {
  display: flex;
  flex-direction: column;
  background-color: #e5e5f7;
  background-image: repeating-linear-gradient(to right, #bdbedb, #9b9baa 0.4px, #e5e5f7 0.4px, #e5e5f7);

  .app-main {
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    @apply w-[75%] h-[92.78vh] m-auto;

    .app-grail-left {
      width: 15%;

      @apply mr-2 relative left-1;
    }

    .app-grail-middle {
      flex-grow: 1;

      @apply h-[92.78vh] w-[40%];
    }

    .app-grail-right {
      width: 21%;

      @apply overflow-y-auto;
      @apply ml-1;
    }

    .app-grail-right::-webkit-scrollbar {
      display: none;
    }
  }

  // .app-body {
  //   @apply ml-[24%] mt-[4.6%] w-[47%];

  //   @include media-2xl {
  //     @apply ml-[23.3%] mt-[6.5%];
  //   }

  //   @include media-xl {
  //     @apply ml-[23.3%] mt-[6.5%];
  //   }

  //   @include media-lg {
  //     @apply ml-[23.3%] mt-[7.5%];
  //   }

  //   @include media-base {
  //     @apply ml-[23.3%] mt-[10%];
  //   }
  // }
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
