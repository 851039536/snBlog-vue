<script lang="ts" setup>
import { articleApi, navigationApi, userTalk } from '@/api'
import { IArticle } from '@/api/data/interData'
import { hSearch } from '@/hooks/data'
import { winUrl } from '@/hooks/routers'

const annunciate = ref('') //通告
const articleTime = ref()
const articleCount = ref('')
const rName = ref('')
const textCount = ref('')
const readCount = ref('')
const rNav = ref([]) //导航
const rArticle = ref([] as IArticle[])

async function search() {
  rArticle.value = await (await articleApi.GetContains(0, 'null', rName.value, false)).data
}

async function skip(id: number) {
  await winUrl(`/c-mdContent?id=${id}`)
}
async function onSearch() {
  if (rName.value === '') {
    hSearch.value = false
    return
  }
  hSearch.value = true //显示元素内容
  await search()
}
onMounted(async () => {
  hSearch.value = false //
  annunciate.value = await (await userTalk.GetUserTalkFirst()).data
  rNav.value = await (await navigationApi.GetTypeAsync(1, '常用工具', true)).data
  articleTime.value = await (await articleApi.GetFy(0, 'null', 1, 1, 'id', true, true)).data[0].timeCreate
  articleCount.value = await (await articleApi.GetSum(0, 'null', true)).data
  articleCount.value = String(articleCount.value)
  textCount.value = await (await articleApi.GetStrSum(0, 1, 'null', true)).data
  textCount.value = String(textCount.value)
  readCount.value = await (await articleApi.GetStrSum(0, 2, 'null', true)).data
  readCount.value = String(readCount.value)
})
</script>
<template>
  <div class="side">
    <div class="side-main">
      <CTime></CTime>
      <div ref="ipu" class="side-input">
        <a-input-search
          v-model:value="rName"
          placeholder="内容搜索"
          style="width: 100%"
          @search="onSearch()"
          @change="onSearch()" />
      </div>
      <SidebarAnnunciate :user-talk="annunciate"></SidebarAnnunciate>
      <SidebarTool :res-data="rNav" tag-name="常用工具"></SidebarTool>
      <CStatistics
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="articleCount"
        :res2="textCount"
        :res3="readCount"
        :res4="articleTime"></CStatistics>
    </div>
  </div>

  <div id="sear"></div>
  <c-search @close-model="hSearch = false">
    <template #searchArticle>
      <div class="m-1">
        <input
          v-model="rName"
          class="rounded h-10 w-full text-xl outline-none border-0 bg-gray-200"
          placeholder="搜索..."
          @input="search()" />
      </div>
      <div class="h-full overflow-auto">
        <div
          v-for="res in rArticle"
          :key="res.id"
          class="bg-slate-50 p-2 m-1 rounded hover:bg-blue-400 hover:text-white shadow-sm">
          <div class="text-lg flex items-center">
            <div i-fxemoji-lightbulb h-5 w-6></div>
            <div class="cursor-pointer font-medium" @click="skip(res.id)">{{ res.name }}</div>
          </div>
          <div class="text-cool-gray-500">{{ res.sketch }}</div>
        </div>
      </div>
    </template>
  </c-search>
</template>

<style lang="scss" scoped>
.side {
  @apply h-[92%] top-[8.4%] right-[11%] w-[17%] fixed;

  .side-main {
    @apply h-full w-full;

    .side-input {
      @include center-children;
      @apply flex flex-nowrap;
      @apply m-auto mt-1 mb-2 p-2 w-[97%];
      @apply bg-white rounded shadow-sm;
    }
  }
}

.side::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 768px) {
  .side {
    display: none;
  }
}

@media screen and (min-width: 1366px) {
  .side {
    @apply h-[90%] top-[9.9%] overflow-auto;
  }
}

@media screen and (min-width: 1536px) {
  .side {
    @apply h-[90%] top-[8.2%];
  }
}
</style>
