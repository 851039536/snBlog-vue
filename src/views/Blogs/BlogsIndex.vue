<template>
  <section>
    <l-sidebar></l-sidebar>
    <blogs-sidebar></blogs-sidebar>
    <s-header></s-header>
    <a-back-top>
      <div class="rounded-lg bg-gray-400 shadow text-center text-white text-base py-2">UP</div>
    </a-back-top>

    <div class="blogs-index">
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blogs-index {
  @apply h-[92%] mt-[4.5%] ml-[25%] w-[50%];
  @apply rounded shadow overflow-auto;
}
@screen <lg {
  .blogs-index {
    @apply mt-[10%] ml-0 w-full;
  }
}
</style>
