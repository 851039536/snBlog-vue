<script lang="ts" setup>
import SBackTop from '../../components/general/SBackTop.vue'
</script>
<template>
  <section>
    <s-back-top></s-back-top>
    <l-sidebar></l-sidebar>
    <index-sidebar></index-sidebar>
    <s-header></s-header>
    <div class="blog">
      <router-view></router-view>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.blog {
  @apply h-[92%] mt-[4.6%] ml-[22%] w-[47%] relative;
}

@screen <lg {
  .blog {
    @apply mt-[10%] ml-0 w-full;
  }
}

@screen <xp {
  .blog {
    @apply h-[90%] mt-[6.3%];
  }
}
</style>
