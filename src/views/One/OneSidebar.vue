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
  @apply fixed ml-3 bg-gray-100 rounded;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20%, 90%);
  overflow: auto;
  .one-sidebar-div {
    @include w-h(100%, 100%);

    .one-sidebar-describe {
      width: 97%;

      @apply mb-2 m-auto;
      @apply shadow rounded bg-white text-center;

      .one-sidebar-describe-text {
        p {
          @apply text-base px-2 py-4 m-1 cursor-pointer;
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
