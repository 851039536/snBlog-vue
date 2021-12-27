<script lang="ts" setup>
import { useAppStore } from '@/store/pinia'

import { storage } from '@/utils/storage/storage'

const store = useAppStore()
// 刷新网页重新加载
store.roles = storage.get('rolres')
</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <s-bootom></s-bootom>
  </div>
</template>

<style lang="scss">
@include scroll;
</style>
