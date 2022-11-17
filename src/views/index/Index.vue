<script lang="ts" setup></script>
<template>
  <section>
    <c-back-top></c-back-top>
    <c-sidebar></c-sidebar>
    <index-sidebar></index-sidebar>
    <c-header></c-header>
    <div class="blog">
      <router-view></router-view>
    </div>
  </section>
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
