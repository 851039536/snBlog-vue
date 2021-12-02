<script lang="ts" setup>
import { useStore } from 'vuex'
import { storage } from '@/utils/storage/storage'

const store = useStore()
store.state.Roles = storage.get('rolres')
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
