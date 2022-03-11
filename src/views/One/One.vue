<script setup lang="ts">
import { method, state } from './data/index'

onMounted(async () => {
  await method.Count()
  await method.getOne()
})
</script>

<template>
  <div class="one">
    <s-header></s-header>
    <l-sidebar></l-sidebar>
    <OneSidebar></OneSidebar>
    <div class="one-div">
      <OneTop :title="state.dataOne.title" :text="state.dataOne.text" :read="state.dataOne.read"></OneTop>
      <OneContent :resultData="state.resultData"></OneContent>
      <!-- 分页 -->
      <div class="paging">
        <a-pagination
          size="small"
          @change="method.currentchange"
          :total="state.count"
          :pageSize="state.pagesize"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.one {
  @apply h-full w-full fixed;

  .one-div {
    @apply h-[90%] mt-[4.5%] ml-[25%] w-2/4;
    @apply rounded shadow overflow-auto;

    .paging {
      @apply rounded h-7 m-2 shadow mt-3;
    }
  }

  .one-div::-webkit-scrollbar {
    display: none;
  }
}
// @screen xp {
//   .oneSidebar {
//     @apply hidden;
//   }

//   .one .one-div {
//     @apply mb-14 ml-0 w-full;
//   }

//   .one .one-div .one-list .one-list-div {
//     @apply ml-0 w-full;
//   }
// }
</style>
