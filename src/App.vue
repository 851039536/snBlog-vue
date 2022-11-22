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
<script lang="ts" setup></script>

<style lang="scss">
@include scroll;

#app {
  background: #f3f7fd;

  @apply absolute w-full;
}
</style>
