<script setup lang="ts">
import { DiaryTypeApi, DiaryApi } from '@/api/index'

const state: any = reactive({
  resultOneType: [],
  resultOne: [],
  modal2Visible: false,
  text: []
})

onMounted(async () => {
  await DiaryTypeApi.getAll().then((res: any) => {
    state.resultOneType = res.data
  })
  await DiaryApi.getPaging(0, '0', 1, 10, 'read', true, true).then((res: any) => {
    state.resultOne = res.data
  })
})
</script>

<template>
  <div class="sdie">
    <div>内容来源于网络</div>
    <OneSidetype title="舔狗好评" :result-data="state.resultOne"></OneSidetype>
    <OneCategory :result="state.resultOneType"></OneCategory>
  </div>
</template>

<style lang="scss" scoped>
.sdie {
  @apply h-[91%] ml-3 top-[8.7%] right-[11%] w-[17%] fixed;

  div {
    @apply m-auto mb-2 w-[97%];
    @apply bg-white rounded shadow text-center;
    @apply cursor-pointer m-1 text-base py-4 px-2;
  }
}
</style>
