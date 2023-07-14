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
    <div class="article-side-input">
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path
            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
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
    padding: 0 1rem;
    padding-left: 2.5rem;
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
    left: 1rem;
    width: 1rem;
    height: 1rem;
    fill: #8d8d94;
  }
}
</style>
