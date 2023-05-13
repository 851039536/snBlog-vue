<script setup lang="ts">
import { method, state } from './index'

onMounted(async () => {
  await method.Count()
  await method.getOne()
})
</script>

<template>
  <div class="diary">
    <diary-sidebar></diary-sidebar>
    <div class="diary-cont">
      <OneTop :title="state.dataOne.title" :text="state.dataOne.text" :read="state.dataOne.read"></OneTop>
      <OneContent :result-data="state.rData"></OneContent>
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
.diary {
  .diary-cont {
    @apply rounded shadow overflow-auto;

    .paging {
      @apply rounded-none p-2 shadow mt-2 bg-white;
    }
  }
}
</style>
