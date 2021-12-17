<script lang="ts" setup>
import { article, userTalk } from '@/api/index'
import { resolve, winUrl } from '@/hooks/routers'
import { resData } from '../data/sidebar'

const SearchTitle = async (name: string) => {
  resData.searchData = await article.GetContainsAsync(1, '转载', name, true)
}
const skip = async (id: any) => {
  const { href } = await resolve('/VmdHtml', id)
  await winUrl(href)
}
const GetApi = async () => {
  await article.GetFyAsync(0, 'null', 1, 1, 'data', true, true).then((res: { data: { timeCreate: string }[] }) => {
    resData.articledata = res.data[0].timeCreate
  })
  resData.talk = await (await userTalk.GetUserTalkFirst()).data
  resData.ArticleCount = await (await article.GetCountAsync(1, '转载', true)).data
  resData.ArticleCount = String(resData.ArticleCount)
  resData.textCount = await (await article.GetSumAsync(1, 1, '转载', true)).data
  resData.textCount = String(resData.textCount)
  resData.readCount = await (await article.GetSumAsync(1, 2, '转载', true)).data
  resData.readCount = String(resData.readCount)
}

onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <div id="blogs-sidebar">
    <div class="blogs-sidebar_main">
      <!-- 内容搜索 -->
      <div class="blogs-sidebar_input">
        <div>
          <a-select
            show-search
            v-model:value="resData.title"
            placeholder="input search text"
            style="width: 200px"
            :show-arrow="false"
            :filter-option="false"
            @search="SearchTitle"
            @select="skip"
          >
            >
            <a-select-option v-for="res in resData.searchData.data" :key="res.id">{{ res.title }}</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- end 内容搜索 -->

      <s-describe :userTalk="resData.talk"></s-describe>

      <!-- 站点统计 -->
      <station-text
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="resData.ArticleCount"
        :res2="resData.textCount"
        :res3="resData.readCount"
        :res4="resData.articledata.substring(0, 10)"
      ></station-text>
      <!-- end 站点统计 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#blogs-sidebar {
  @apply fixed bg-gray-100 shadow;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20.4%, 93%);
  @apply ml-3 overflow-auto;

  .blogs-sidebar_main {
    @include w-h;

    .blogs-sidebar_count {
      @apply p-1 mb-2 m-auto shadow rounded;

      width: 97%;

      @apply bg-white cursor-pointer;
    }

    .blogs-sidebar_input {
      @apply flex p-2 mt-1 mb-2 shadow rounded m-auto;

      width: 97%;

      @apply bg-white;

      div > input {
        @apply ml-1 rounded bg-gray-100;

        height: 30px;
      }

      div > button {
        @apply text-base font-medium ml-3;

        height: 30px;
      }
    }
  }
}
// 隐藏滚动条
#blogs-sidebar::-webkit-scrollbar {
  display: none;
}

.icon {
  @include w-h(1.5em, 1.5em);

  overflow: hidden;
  vertical-align: -0.1em;
  fill: currentColor;
}

// @screen xp {
//   #blogs-sidebar {
//     display: none;
//   }
//}
</style>
