<!--
 * @Author: your name
 * @Date: 2020-12-10 11:40:02
 * @LastEditTime: 2021-11-16 15:36:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\tag\Tag.vue
-->
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { article, labels } from '@/api'
import { state } from './data'
import TagHead from './components/TagHead.vue'
import TagContent from './components/TagContent.vue'

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
@import './index.scss';

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
