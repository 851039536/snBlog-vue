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
    <div class="one-cont">
      <OneTop :title="state.dataOne.title" :text="state.dataOne.text" :read="state.dataOne.read"></OneTop>
      <OneContent :result-data="state.resultData"></OneContent>
      <div class="paging">
        <a-pagination
          size="small"
          :total="state.count"
          :page-size="state.pagesize"
          show-quick-jumper
          @change="method.currentchange" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.one {
  @apply h-[92%] mt-[4.6%] ml-[22%] w-[47%] relative;

  .one-cont {
    // @apply h-[90%] ml-[22%] w-[47%];
    @apply rounded shadow overflow-auto;

    .paging {
      @apply rounded h-7 m-2 shadow mt-3;
    }
  }

  .one-cont::-webkit-scrollbar {
    display: none;
  }
}

@screen xp {
  .one {
    .one-cont {
      @apply mt-[6.3%];
    }
  }
}
</style>
