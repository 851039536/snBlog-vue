<script lang="ts" setup>
import { interfaces } from '@/api'
import { hUser } from '@/hooks/commonly'
import { sideIndex } from '@/hooks/data'
import { routers } from '@/hooks/routers'
import { storage } from '@/utils/storage/storage'

const rData: any = ref([])

function getTopic(index: number) {
  sideIndex.value = index
}
onMounted(async () => {
  rData.value = await (await interfaces.GetType(0, storage.get(hUser.NAME), 'sidebar', true)).data
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
      <div v-if="res.identity" @click="routers(res.path)">
        {{ res.title }}
      </div>
    </div>
    <div v-show="storage.get(hUser.NAME) === hUser.NAME" class="lside-list bg-blue-400">
      <div class="text-lg text-white">登录</div>
    </div>
  </div>
</template>

<style lang="scss">
.lside {
  @apply h-[88%] top-[9%] left-[12%] w-175px fixed;
  @apply bg-white rounded shadow;

  .lside-list {
    @apply text-cool-gray-600 text-center text-lg;
    @apply cursor-pointer hover:bg-blue-500;

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
