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
      <div class="paging">
        <a-pagination size="small" @change="method.currentchange" :total="state.count" :pageSize="state.pagesize"
          show-quick-jumper />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.one {
  @apply h-full w-full fixed;

  .one-div {
    @apply h-[90%] ml-[26%] w-[47%];
    @apply rounded shadow overflow-auto;

    .paging {
      @apply rounded h-7 m-2 shadow mt-3;
    }
  }

  .one-div::-webkit-scrollbar {
    display: none;
  }
}

@screen xp {
  .one {
    .one-div {
      @apply mt-[6.3%];
    }
  }
}
</style>
