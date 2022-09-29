<script lang="ts" setup>
import { resData, method } from './index'

onMounted(async () => {
  await method.GetType()
})
</script>
<template>
  <div class="lside">
    <div v-for="(res, index) in resData" :key="index" class="lside-list">
      <div v-if="res.identity" @click="method.skip(res.path)">
        {{ res.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.lside {
  @apply h-[88%] top-[9%] left-[12%] w-175px fixed;
  @apply bg-white rounded shadow;

  .lside-list {
    @apply cursor-pointer text-center;

    color: #666;
    font-size: 15px;

    @apply font-normal;

    div {
      @apply m-2 py-1 mx-7;
      @apply rounded hover:bg-blue-500 hover:text-white;
    }
  }
}

@screen <xp {
  .lside {
    @apply top-[11%] left-[8%];
  }
}
</style>
