<template>
  <l-sidebar></l-sidebar>
  <blogs-sidebar></blogs-sidebar>
  <s-header></s-header>
  <a-back-top />
  <s-aspin></s-aspin>
  <div class="blogs">
    <div class="blogs_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blogs {
  @include initialize(50%, 92%, 4.5%, null, 25%, null, #ffffff);
  @apply shadow;
  .blogs_main {
    @apply shadow-sm rounded-sm overflow-auto;
  }
}

@screen <sm {
  .blogs {
    @apply m-0 w-full;
  }
}
</style>
