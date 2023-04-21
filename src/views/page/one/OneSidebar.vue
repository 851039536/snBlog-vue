<script setup lang="ts">
import { OneApi } from '@/api/index'

const state: any = reactive({
  resultOneType: [],
  resultOne: [],
  modal2Visible: false,
  text: []
})

const GetApi = async () => {
  await OneApi.getOneTypeAll().then((res: any) => {
    state.resultOneType = res.data
  })
  await OneApi.getPaging(0, '0', 1, 10, 'read', true, true).then((res: any) => {
    state.resultOne = res.data
  })
}

onMounted(async () => {
  await GetApi()
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

//   .one-side {
//     @apply top-[11%];
//   }
// }
</style>
