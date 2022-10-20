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

  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE5JREFUKFNjtDt1/j8DAwPDITNDRhCNCzASrRCbCQ9u2IFtUdA4BLcFq3VEK8RmC2PFeYg1HYYIayhTiE33p5lxYFv40hfh9wzRCrHZAgDvfSAL13A91QAAAABJRU5ErkJggg==)
  //   repeat;
}
</style>
