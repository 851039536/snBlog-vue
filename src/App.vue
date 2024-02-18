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
          <transition name="fade">
            <keep-alive>
              <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name" />
            </keep-alive>
          </transition>
          <transition name="fade">
            <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name" />
          </transition>
        </router-view>
      </div>
      <!-- Right sidebar -->
      <div v-if="ui.rightSidebar" class="app-grail-right">
        <the-right-sidebar></the-right-sidebar>
      </div>
    </main>
    <base-login></base-login>
    <base-aspin></base-aspin>
    <the-footer></the-footer>
    <snippet-content></snippet-content>
  </div>
</template>

<script lang="ts" setup>
// 使用自定义的全局消息提示插件
import useCurrentInstance from '@hooks/useCurrentInstance'
const { proxy }: any = useCurrentInstance()
proxy?.$toast.show('this is default message')

import { uiSettings } from '@store/modules/uiSettings'
import { useEventKey } from '@hooks/useEventKey'
const { addKeydownCtrl } = useEventKey()
const ui = uiSettings()
import { useTitle } from 'vue-hooks-plus'
const title = ref('snBlog')
useTitle(title)
onMounted(() => {
  addKeydownCtrl()
  ui.searchArticle = false
})
</script>

<style lang="scss">
@include scroll;

#app {
  @apply h-full;

  background-color: #f5f6f7;

  .app-main {
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    @apply w-[72%] h-[92vh] m-auto;

    @include media-sm {
      @apply w-full;
    }

    .app-grail-left {
      width: 15%;

      @apply mr-2 relative left-1;

      @include media-xl {
        display: none;
      }

      @include media-lg {
        display: none;
      }

      @include media-base {
        display: none;
      }

      @include media-sm {
        display: none;
      }
    }

    .app-grail-middle {
      flex-grow: 1;

      @apply h-[100vh] w-[40%];
    }

    .app-grail-right {
      width: 21%;

      @apply overflow-y-auto;
      @apply ml-1;

      @include media-xl {
        display: none;
      }

      @include media-lg {
        display: none;
      }

      @include media-base {
        display: none;
      }

      @include media-sm {
        display: none;
      }
    }

    .app-grail-right::-webkit-scrollbar {
      display: none;
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
