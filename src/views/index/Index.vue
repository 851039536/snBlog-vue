<script lang="ts" setup>
import SBackTop from '../../components/general/SBackTop.vue'

onMounted(async () => {})
</script>
<template>
  <section>
    <s-back-top></s-back-top>
    <l-sidebar></l-sidebar>
    <index-sidebar></index-sidebar>
    <s-header></s-header>
    <div id="blogs">
      <router-view> </router-view>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#blogs {
  @apply h-[92%] mt-[4.5%] ml-[26%] w-[47%];
  @apply rounded shadow overflow-auto;
}
#blogs::-webkit-scrollbar {
  display: none;
}
@screen <lg {
  #blogs {
    @apply mt-[10%] ml-0 w-full;
  }
}

@screen <xp {
  #blogs {
    @apply h-[90%] mt-[6.3%];
  }
}
</style>
