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
    <s-bootom></s-bootom>
    <s-aspin></s-aspin>
  </div>
</template>

<style lang="scss">
@include scroll;
#app {
}
</style>
