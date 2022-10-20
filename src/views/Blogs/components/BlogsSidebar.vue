<script lang="ts" setup>
import { articleApi, userTalk } from '@/api/index'
import { resolve, winUrl } from '@/hooks/routers'
import { resData } from '../data/sidebar'

const SearchTitle = async (name: string) => {
  resData.searchData = await articleApi.GetContains(1, '转载', name, true)
}
const skip = async (id: any) => {
  const { href } = await resolve('/VmdHtml', id)
  await winUrl(href)
}
const GetApi = async () => {
  await articleApi.GetFy(0, 'null', 1, 1, 'data', true, true).then((res: { data: { timeCreate: string }[] }) => {
    resData.articledata = res.data[0].timeCreate
  })
  resData.talk = await (await userTalk.GetUserTalkFirst()).data
  resData.ArticleCount = await (await articleApi.GetCountAsync(1, '转载', true)).data
  resData.ArticleCount = String(resData.ArticleCount)
  resData.textCount = await (await articleApi.GetSum(1, 1, '转载', true)).data
  resData.textCount = String(resData.textCount)
  resData.readCount = await (await articleApi.GetSum(1, 2, '转载', true)).data
  resData.readCount = String(resData.readCount)
}

onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <div id="blogs-sidebar">
    <div class="blogs-sidebar-main">
      <!-- 内容搜索 -->
      <div class="blogs-sidebar-input">
        <div>
          <a-select
            v-model:value="resData.title"
            show-search
            placeholder="input search text"
            style="width: 100%"
            :show-arrow="false"
            :filter-option="false"
            @search="SearchTitle"
            @select="skip">
            >
            <a-select-option v-for="res in resData.searchData.data" :key="res.id">{{ res.title }}</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- end 内容搜索 -->

      <s-describe :user-talk="resData.talk"></s-describe>

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
        :res4="resData.articledata.substring(0, 10)"></station-text>
      <!-- end 站点统计 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#blogs-sidebar {
  @apply h-[93%] ml-3 top-[9%] right-[12%] w-[18%] fixed;
  @apply bg-gray-50 shadow overflow-auto;

  .blogs-sidebar-main {
    @apply h-full w-full;

    .blogs-sidebar-input {
      @include center-children;
      @apply flex flex-nowrap;
      @apply m-auto mt-1 mb-2 p-2 w-[97%];
      @apply bg-white rounded shadow;

      & > div {
        width: 100%;
      }
    }
  }
}

// 隐藏滚动条
#blogs-sidebar::-webkit-scrollbar {
  display: none;
}

@screen <lg {
  #blogs-sidebar {
    display: none;
  }
}

@screen <xp {
  #blogs-sidebar {
    @apply h-[88%] ml-3 top-[11%];
  }
}
</style>
