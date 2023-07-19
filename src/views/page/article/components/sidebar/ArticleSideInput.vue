<script lang="ts" setup>
import { searchName } from '../../data'
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
function onSearch() {
  if (searchName.value === '') {
    ui.uiSearchVisible = false
    return
  }
  ui.uiSearchVisible = true //显示元素内容
}
</script>
<template>
  <c-right-sidebar-container>
    <div class="article-side-input">
      <div class="icon text-gray-500" i-bytesize-search></div>
      <input v-model="searchName" placeholder="Search" type="search" class="input" @input="onSearch()" />
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.article-side-input {
  position: relative;
  display: flex;
  align-items: center;
  line-height: 28px;

  @apply border-gray-500 max-w-full text-base;

  .input {
    width: 100%;
    height: 40px;
    padding: 0 1rem 0 2.5rem;
    color: #0d0c22;
    line-height: 28px;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    background-color: #fff;
    border-color: rgb(211 209 210 / 40%);
    outline: none;
    box-shadow: 0 0 0 2px rgb(194 176 183 / 10%);
  }

  .icon {
    position: absolute;
    left: 1.1rem;
    width: 1.1rem;
    height: 1.1rem;
    fill: #8d8d94;
  }
}
</style>
