<script lang="ts" setup>
import { useDirective } from '@hooks/useDirective'
import { rArticle } from '../../data'
import { useApi } from '@/api/useApi'

const { ArticleTypeApi, ArticleApi } = useApi()
const { throttle } = useDirective()

const searchName = ref('')
const search = () => {
  throttle(async () => {
    if (searchName.value === '') return
    rArticle.value = await (await ArticleApi.getContains(0, 'null', searchName.value)).data.data
  }, 300)()
}

const rTag = ref([])
onMounted(async () => {
  let tags: any = await ArticleTypeApi.getAll(true)
  rTag.value = tags.data.data
})
</script>
<template>
  <div class="search">
    <div class="my-1 w-[30%] px-2">
      <input v-model="searchName" placeholder="内容搜索.." type="text" @input="search()" />
    </div>
    <article2-sidebar-tag :r-data="rTag"></article2-sidebar-tag>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply pt-1 px-1;

  input {
    @apply border-gray-500 w-full h-9;

    padding: 6px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline-style: none;
  }

  input:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 7.5%), 0 0 8px rgb(102 175 233 / 60%);
  }
}
</style>
