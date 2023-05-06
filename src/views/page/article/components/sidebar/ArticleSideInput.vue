<script lang="ts" setup>
import { searchVisible } from '@/utils/common/visible-data'
import { searchName } from '../../data'

function onSearch() {
  if (searchName.value === '') {
    searchVisible.value = false
    return
  }
  searchVisible.value = true //显示元素内容
}
</script>
<template>
  <c-right-sidebar-container>
    <div class="side-input">
      <input v-model="searchName" type="text" @input="onSearch()" />
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.side-input {
  @apply p-2;

  input {
    @apply border-gray-500 w-full;

    padding: 6px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline-style: none;
  }

  input:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 7.5%), 0 0 8px rgb(102 175 233 / 60%);
  }
}
</style>
