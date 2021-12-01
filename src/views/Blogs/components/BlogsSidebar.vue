<script lang="ts" setup>
import { article, userTalk } from '@/api/index'
import { resolve, winUrl } from '@/hooks/routers'
import { blogsSiList } from '../data/sidebar'

const SearchTitle = async (name: string) => {
  blogsSiList.searchData = await article.GetContainsAsync(1, '转载', name, true)
}
const skip = async (id: any) => {
  const { href } = await resolve('/VmdHtml', id)
  await winUrl(href)
}
const GetApi = async () => {
  await article.GetFyAsync(0, 'null', 1, 1, 'data', true, true).then((res: { data: { timeCreate: string }[] }) => {
    blogsSiList.articledata = res.data[0].timeCreate
  })
  blogsSiList.talk = await (await userTalk.GetUserTalkFirst()).data
  blogsSiList.ArticleCount = await (await article.GetCountAsync(1, '转载', true)).data
  blogsSiList.ArticleCount = String(blogsSiList.ArticleCount)
  blogsSiList.textCount = await (await article.GetSumAsync(1, 1, '转载', true)).data
  blogsSiList.textCount = String(blogsSiList.textCount)
  blogsSiList.readCount = await (await article.GetSumAsync(1, 2, '转载', true)).data
  blogsSiList.readCount = String(blogsSiList.readCount)
}

GetApi()
</script>

<template>
  <div id="blogssidebar">
    <div class="blogssidebar_main">
      <s-ico></s-ico>
      <!-- 内容搜索 -->
      <div class="blogssidebar_input">
        <div>
          <a-select
            show-search
            v-model:value="blogsSiList.sntitle"
            placeholder="input search text"
            style="width: 200px"
            :show-arrow="false"
            :filter-option="false"
            @search="SearchTitle"
            @select="skip"
          >
            >
            <a-select-option v-for="res in blogsSiList.searchData.data" :key="res.id">{{ res.title }}</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- end 内容搜索 -->

      <s-describe :userTalk="blogsSiList.talk"></s-describe>

      <!-- 站点统计 -->
      <station-text
        title="站点统计"
        title1="文章数量"
        title2="总字符数"
        title3="热度"
        title4="最近更新"
        :res1="blogsSiList.ArticleCount"
        :res2="blogsSiList.textCount"
        :res3="blogsSiList.readCount"
        :res4="blogsSiList.articledata.substring(0, 10)"
      ></station-text>
      <!-- end 站点统计 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#blogssidebar {
  @apply fixed bg-gray-100 shadow;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20.4%, 93%);
  @apply ml-3 overflow-auto;

  .blogssidebar_main {
    @include w-h;

    .blogssidebar_count {
      @apply p-1 mb-2 m-auto shadow rounded;

      width: 97%;

      @apply bg-white cursor-pointer;
    }

    .blogssidebar_input {
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
#blogssidebar::-webkit-scrollbar {
  display: none;
}

.icon {
  @include w-h(1.5em, 1.5em);

  overflow: hidden;
  vertical-align: -0.1em;
  fill: currentColor;
}

// @screen xp {
//   #blogssidebar {
//     display: none;
//   }
//}
</style>
