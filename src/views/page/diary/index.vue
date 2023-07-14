<script setup lang="ts">
import { method, state } from './index'

onMounted(async () => {
  await method.Count()
  await method.getPagingDiary()
})
</script>

<template>
  <div class="diary">
    <diary-sidebar></diary-sidebar>
    <div class="diary-cont">
      <diary-top :title="state.dataOne.title" :text="state.dataOne.text" :read="state.dataOne.read"></diary-top>
      <diary-content :result-data="state.rData"></diary-content>
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
    .paging {
      @apply p-2  mt-2;
    }
  }
}
</style>
