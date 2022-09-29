<template>
  <!-- <s-header></s-header> -->
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
  <s-bootom></s-bootom>
  <s-aspin></s-aspin>
</template>

<style lang="scss">
@include scroll;

#app {
  // @apply bg-gray-100 w-full overflow-auto;
  @apply bg-gray-100 absolute w-full;
}
</style>
