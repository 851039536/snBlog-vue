<script lang="ts" setup>
import { sideIndex } from '@/hooks/data'
import { rData, method } from './index'

function getTopic(index: number) {
  sideIndex.value = index
}
onMounted(async () => {
  await method.GetType()
  getTopic(sideIndex.value)
})
</script>
<template>
  <div class="lside">
    <div
      v-for="(res, index) in rData"
      :key="index"
      class="lside-list"
      :class="sideIndex == index ? 'active' : ''"
      @click="getTopic(index)">
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

    @apply font-normal hover:bg-blue-500;

    div {
      @apply m-2 py-1 mx-7;
      @apply rounded  hover:text-white;
    }
  }

  .lside-list.active {
    color: #fff;
    background-color: #0ea5e9;
  }
}

@screen <xp {
  .lside {
    @apply top-[11%] left-[8%];
  }
}
</style>
