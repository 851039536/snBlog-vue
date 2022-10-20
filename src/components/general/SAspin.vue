<script lang="ts" setup>
import { aspShow } from '@/hooks/data'
</script>
<template>
  <section v-show="aspShow">
    <div>
      <a-spin size="large" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply top-0 left-0 z-20 fixed;
  @apply s-hw;

  div {
    @apply top-5/10 left-5/10 absolute;
  }
}
</style>
