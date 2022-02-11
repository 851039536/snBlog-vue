<template>
  <l-sidebar></l-sidebar>
  <blogs-sidebar></blogs-sidebar>
  <s-header></s-header>
  <a-back-top />
  <s-aspin></s-aspin>
  <div class="blogs">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.blogs {
  @include initialize(50%, 92%, 4.5%, null, 25%, null, #ffffff);
  @apply rounded shadow overflow-auto;
}

@screen <sm {
  .blogs {
    @apply m-0 w-full;
  }
}
</style>
