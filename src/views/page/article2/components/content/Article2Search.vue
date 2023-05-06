<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { throttle } from '@/utils/dethrottle'
import { rArticle } from '../../data'

const searchName = ref('')
const search = () => {
  throttle(async () => {
    if (searchName.value === '') return
    rArticle.value = await (await ArticleApi.getContains(0, 'null', searchName.value)).data
  }, 300)()
}
</script>
<template>
  <div class="search">
    <input v-model="searchName" placeholder="标题搜索" type="text" @input="search()" />
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply p-1 shadow rounded;

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
