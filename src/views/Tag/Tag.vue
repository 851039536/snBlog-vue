<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { article, labels } from '@/api'
import { state } from './data/data'

const route = useRoute()

const name: any = reactive({
  name: route.query.id
})

async function GetApi() {
  state.labels = await (await labels.GetAllAsync(true)).data
  if (name.id === '') {
    name.id = 'vue'
  }
  state.newinfo = await (await article.GetTypeAsync(2, name.id, true)).data
}

async function Search(names: string) {
  if (names === '') {
    return
  }
  state.newinfo = await (await article.GetContainsAsync(0, 'null', name, true)).data
}
onMounted(async () => {
  await GetApi()
})
</script>
<template>
  <s-header></s-header>
  <div class="animate__animated" :class="[state.tag, state.fadeIn]">
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
      <TagHead :result-data="state.labels"></TagHead>
      <TagContent></TagContent>
    </div>
  </div>
</template>

<style lang="scss">
.tag {
  @apply fixed w-full h-full;

  .tag-main {
    @apply absolute shadow;

    top: 9%;
    left: 0%;
    width: 100%;
    height: 100%;
  }
}

.tag_search {
  @include initialize(94%, 92%, null, null, 3%, null, #ffffff);
  @apply relative rounded-sm  shadow;

  height: 45px;

  div {
    @apply absolute left-1/2;
    top: 90%;
    width: 40%;
    transform: translate(-50%, -50%);
  }
}
</style>
