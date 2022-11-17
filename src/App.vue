<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" :duration="1000">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
      </transition>
      <transition name="fade" :duration="1000">
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </transition>
    </router-view>
  </div>
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
