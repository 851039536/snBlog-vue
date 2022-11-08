<script lang="ts" setup>
import { articleApi, navigationApi, userTalk } from '@/api'
import { IArticle, INav } from '@/api/data/interData'
import { winUrl } from '@/hooks/routers'
const annunciate = ref('') //通告
const articleTime = ref()
const articleCount = ref('')
const name = ref('')
const textCount = ref('')
const readCount = ref('')
const rNav = ref([] as INav[]) //导航
const rArticle = ref([] as IArticle[])

async function search(name: string) {
  rArticle.value = await (await articleApi.GetContains(0, 'null', name, false)).data
}
async function skip(id: number) {
  await winUrl(`/VmdHtml?id=${id}`)
}
onMounted(async () => {
  annunciate.value = await (await userTalk.GetUserTalkFirst()).data
  rNav.value = await (await navigationApi.GetTypeAsync(1, '常用工具', true)).data
  articleTime.value = await (await articleApi.GetFy(0, 'null', 1, 1, 'id', true, true)).data[0].timeCreate
  articleCount.value = await (await articleApi.GetCountAsync(0, 'null', true)).data
  articleCount.value = String(articleCount.value)
  textCount.value = await (await articleApi.GetSum(0, 1, 'null', true)).data
  textCount.value = String(textCount.value)
  readCount.value = await (await articleApi.GetSum(0, 2, 'null', true)).data
  readCount.value = String(readCount.value)
})
</script>
<template>
  <div class="side">
    <div class="side-main">
      <s-time></s-time>
      <div class="side-input">
        <a-select
          v-model:value="name"
          show-search
          style="width: 100%"
          :show-arrow="false"
          :filter-option="false"
          @search="search"
          @select="skip">
          >
          <a-select-option v-for="res in rArticle" :key="res.id">{{ res.title }}</a-select-option>
        </a-select>
      </div>
      <s-describe :user-talk="annunciate"></s-describe>
      <index-tool :res-data="rNav" tag-name="常用工具"></index-tool>
      <station-text
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="articleCount"
        :res2="textCount"
        :res3="readCount"
        :res4="articleTime"></station-text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side {
  @apply s-side;

  .side-main {
    @apply h-full w-full;

    .side-input {
      @include center-children;
      @apply flex flex-nowrap;
      @apply m-auto mt-1 mb-2 p-2 w-[97%];
      @apply bg-white rounded shadow;
    }
  }
}

.side::-webkit-scrollbar {
  display: none;
}

@screen <lg {
  .side {
    display: none;
  }
}

@screen <xp {
  .side {
    @apply h-[90%] top-[11%];
  }
}
</style>
