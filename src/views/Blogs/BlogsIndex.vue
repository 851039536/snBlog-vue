<template>
  <l-sidebar></l-sidebar>
  <blogs-sidebar></blogs-sidebar>
  <a-back-top />
  <s-aspin></s-aspin>
  <div id="blogs">
    <div class="blogs_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#blogs {
  @include initialize(50%, 92%, 4.5%, null, 25%, null, #ffffff);
  @apply shadow;

  .blogs_main {
    @apply shadow-sm rounded-sm overflow-auto;
  }
}

@screen xp {
  #blogs {
    .blogs_main {
      @apply m-0 mt-14;

      width: 100%;
    }
  }
}
</style>
