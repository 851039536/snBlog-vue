<script setup lang="ts">
import { one } from '@/api/index'

const state: any = reactive({
  resultOneType: [],
  resultOne: [],
  modal2Visible: false,
  text: []
})

const GetApi = async () => {
  await one.GetOneTypeAllAsync().then((res: any) => {
    state.resultOneType = res.data
  })
  await one.GetFyAsync(0, '0', 1, 10, 'read', true, true).then((res: any) => {
    state.resultOne = res.data
  })
}

onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <div class="one-side">
    <div>内容来源于网络</div>
    <OneSidetype title="舔狗好评" :result-data="state.resultOne"></OneSidetype>
    <OneCategory :result="state.resultOneType"></OneCategory>
  </div>
</template>

<style lang="scss" scoped>
.one-side {
  @apply h-[91%] ml-3 top-[9%] right-[11%] w-[17%] fixed;
  @apply overflow-auto;

  div {
    @apply m-auto mb-2 w-[97%];
    @apply bg-white rounded shadow text-center;
    @apply cursor-pointer m-1 text-base py-4 px-2;
  }
}

.one-side::-webkit-scrollbar {
  display: none;
}

@screen <xp {
  .one-side {
    @apply top-[11%];
  }
}
</style>
