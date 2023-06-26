<script setup lang="ts">
import { DiaryTypeApi, DiaryApi } from '@/api/index'

const state: any = reactive({
  diaryType: [],
  resultOne: [],
  modal2Visible: false,
  text: []
})

onMounted(async () => {
  const dataType = await DiaryTypeApi.getPaging(1, 100, true, false)
  state.diaryType = dataType.data.data

  const data = await DiaryApi.getPaging(0, '0', 1, 10, 'read', true, false)
  console.log('[ data ]-16', data)
  state.resultOne = data.data.data
  console.log('[ state.resultOne ]-17', state.resultOne)
})
</script>

<template>
  <div class="diary-sidebar">
    <div>内容来源于网络</div>
    <diary-sidetype title="舔狗好评" :result-data="state.resultOne"></diary-sidetype>
    <diary-category :result="state.diaryType"></diary-category>
  </div>
</template>

<style lang="scss" scoped>
.diary-sidebar {
  @apply h-[91%] ml-3 top-[8.7%] right-[11%] w-[17%] fixed;

  div {
    @apply m-auto mb-2 w-[97%];
    @apply bg-white rounded shadow text-center;
    @apply cursor-pointer m-1 text-base py-4 px-2;
  }
}
</style>
