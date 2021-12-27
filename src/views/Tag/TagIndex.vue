<script lang="ts" setup>
import { article, labels } from '@/api'
import { resData } from './data/data'

const route = useRoute()
const resId: any = reactive({
  id: route.query.id
})

async function GetApi() {
  resData.arrayLabel = await (await labels.GetAllAsync(true)).data
  if (resId.id === '') {
    resId.id = 'vue'
  }
  resData.resultData = await (await article.GetTypeAsync(2, resId.id, true)).data
}

async function Search(names: string) {
  if (names === '') {
    return
  }
  resData.resultData = await (await article.GetContainsAsync(0, 'null', names, true)).data
}
onMounted(async () => {
  await GetApi()
})
</script>
<template>
  <s-header></s-header>
  <div class="">
    <div class="tag-main">
      <div class="tag_search">
        <div>
          <a-select
            show-search
            placeholder="标题搜索"
            style="width: 200px"
            :default-active-first-option="false"
            :show-arrow="false"
            :filter-option="false"
            :not-found-content="null"
            @search="Search"
          >
          </a-select>
        </div>
      </div>
      <TagHead :array-label="resData.arrayLabel"></TagHead>
      <TagContent></TagContent>
    </div>
  </div>
</template>

<style lang="scss">
.tag {
  .tag-main {
    @apply absolute;
    top: 9.5%;
    left: 0%;
    width: 100%;
    height: 100%;
  }
}

.tag_search {
  @include initialize(94%, null, null, null, 3%, null, #ffffff);
  @apply relative rounded-sm  shadow;

  height: 48px;

  div {
    @apply absolute left-1/2;
    top: 90%;
    width: 40%;
    transform: translate(-50%, -50%);
  }
}
</style>
