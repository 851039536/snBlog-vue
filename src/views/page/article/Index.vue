<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()

onMounted(() => {
  ui.searchArticle = false // 搜索框是否显示
  ui.rightSidebar = true
})
</script>
<template>
  <div class="blog">
    <base-top></base-top>

    <router-view v-slot="{ Component }">
      <transition name="fade" :duration="300">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<style lang="scss" scoped>
.blog {
  @apply mt-1;
}
</style>
rightSidebar
