<script lang="ts" setup></script>
<template>
  <div class="blog">
    <c-back-top></c-back-top>
    <index-sidebar></index-sidebar>
    <router-view v-slot="{ Component }">
      <transition name="fade" :duration="500">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<style lang="scss" scoped>
.blog {
  --at-apply: h-[92%] mt-[4.6%] ml-[22%] w-[49.5%] relative;
}

@media screen and (max-width: 768px) {
  .blog {
    --at-apply: mt-[19%] ml-0 w-full;
  }
}

@media screen and (min-width: 1366px) {
  .blog {
    --at-apply: h-[90%] mt-[6.1%];
  }
}

@media screen and (min-width: 1536px) {
  .blog {
    --at-apply: mt-[4.6%];
  }
}
</style>
