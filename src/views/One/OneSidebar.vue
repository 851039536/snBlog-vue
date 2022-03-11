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
  <div class="one-sidebar">
    <div class="one-sidebar-div">
      <div class="one-sidebar-describe">
        <div class="one-sidebar-describe-text">
          <p class>内容来源于网络</p>
        </div>
      </div>

      <OneSidetype title="舔狗好评" :result-data="state.resultOne"></OneSidetype>

      <OneCategory :result="state.resultOneType"></OneCategory>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.one-sidebar {
  @apply h-1/10 ml-3 top-[9%] right-[3%] w-2/10 fixed;
  @apply rounded bg-gray-100 overflow-auto;
  .one-sidebar-div {
    @apply h-full w-full;
    .one-sidebar-describe {
      @apply m-auto mb-2 w-[97%];
      @apply bg-white rounded shadow text-center;

      .one-sidebar-describe-text {
        p {
          @apply cursor-pointer m-1 text-base py-4 px-2;
        }
      }
    }
  }
}

.one-sidebar::-webkit-scrollbar {
  display: none;
}
// @screen xp {
//   .one-Sidebar {
//     display: none;
//   }
// }
</style>
