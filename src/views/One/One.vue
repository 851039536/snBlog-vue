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
      <div class="one_div_paging">
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
  position: fixed;

  @include w-h(100%, 100%);

  .one-div {
    @include initialize($w, 90%, 4.5%, null, $ml, null, #ffffff);

    @apply shadow-sm rounded-sm overflow-auto;

    .one-recommend {
      @include w-h(100%, 30px);

      @apply px-2 my-1 mt-1 shadow bg-gray-100;

      .one-recommend-l {
        @apply float-left;
        @apply text-lg;
      }

      .one-recommend-r {
        @apply float-right;
        @apply text-lg;
      }
    }

    .one_div_paging {
      @apply h-7 m-2 mt-3 shadow rounded;
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
//     @apply w-full ml-0 mb-14;
//   }

//   .one .one-div .one-list .one-list-div {
//     @apply w-full ml-0;
//   }
// }
</style>
