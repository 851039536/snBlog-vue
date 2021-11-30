<script lang="ts" setup>
import { useStore } from 'vuex'
import SnBootom from './components/bootom/Bootom.vue'
import { storage } from '@/utils/storage/storage'
import Header from './components/header/Header.vue'

const store = useStore()
store.state.Roles = storage.get('rolres')
</script>

<template>
  <div id="app">
    <Header></Header>
    <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <!-- 需要缓存的视图组件 -->
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <!-- 不需要缓存的视图组件 -->
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <SnBootom></SnBootom>
  </div>
</template>

<style lang="scss">
@include scroll; //滚动条美化
</style>
