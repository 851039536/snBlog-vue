<script lang="ts" setup>
import { article, labels } from '@/api'
import { resData } from './data/data'

const route = useRoute()
const resId: any = reactive({
  id: route.query.id
})

async function GetApi() {
  resData.arrayLabel = await (await labels.GetAll(true)).data
  if (resId.id === '') resId.id = 'vue'
  resData.resultData = await (await article.GetType(2, resId.id, true)).data
}

async function Search(names: string) {
  if (names === '') return
  resData.resultData = await (await article.GetContains(0, 'null', names, true)).data
}
onMounted(async () => {
  await GetApi()
})
</script>
<template>
  <div class="tindex">
    <l-sidebar></l-sidebar>
    <s-header></s-header>

    <TagHead :array-label="resData.arrayLabel"></TagHead>
    <div class="tag-search">
      <a-select
        show-search
        placeholder="标题搜索"
        style="width: 100%; height: 100%"
        :default-active-first-option="false"
        :show-arrow="false"
        :filter-option="false"
        :not-found-content="null"
        @search="Search"></a-select>
    </div>
    <TagContent></TagContent>
  </div>
</template>

<style lang="scss" scoped>
.tindex {
  // @apply h-[92%] w-[78%] absolute bg-yellow-500;
  // @apply top-[8%] left-[16%];
  // @apply rounded;

  @apply h-[92%] w-[70%] mt-[4.6%] ml-[22%] relative;
  @apply bg-white;
}
</style>
