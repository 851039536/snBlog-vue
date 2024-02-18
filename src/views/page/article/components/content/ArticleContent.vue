<script lang="ts" setup>
import { useDirective } from '@hooks/useDirective'
import { article } from '@api/model/Article'
import { useApi } from '@/api/useApi'

const { ArticleApi } = useApi()
const { debounce } = useDirective()
const ArticleContentMdModule = defineAsyncComponent(() => {
  return import('@views/page/article/components/content/ArticleContentMd.vue')
})
const route = useRoute()
const router = useRouter()
const aid: any = reactive({
  id: route.query.id
})
const labelName = ref('')
const sortName = ref('')
const spinning = ref(true)

const upGive = debounce(() => {
  article.give += 1
  ArticleApi.updatePortion(article, 'Give')
}, 1000)

async function upRead(data: any) {
  if (data === null) return
  data.read += 1
  await ArticleApi.updatePortion(data, 'Read')
}
onMounted(async () => {
  const data = await ArticleApi.getById(aid.id)
  const ret = data.data.data
  await upRead(ret)
  article.name = ret.name
  article.text = ret.text
  article.give = ret.give
  article.read = ret.read
  article.timeCreate = ret.timeCreate
  labelName.value = ret.tag.name
  sortName.value = ret.type.name
  spinning.value = false
})
</script>

<template>
  <div class="article-content">
    <div class="text-center">
      <div class="p-15px text-2xl font-semibold">
        <div
          i-bytesize-chevron-left
          class="float-left mt-1 cursor-pointer hover:text-blue-500"
          @click="router.back()"></div>
        <div class="">{{ article.name }}</div>
      </div>
      <div class="pt-1 text-sm text-cool-gray-500">
        <span class="mr-2">{{ sortName }}</span>
        <span class="mr-2">{{ labelName }}</span>
        <span class="mr-2">{{ article.read }} ℃</span>
        <span class="mr-2">赞 {{ article.give }}</span>
        <span class="mr-2">{{ article.timeCreate.substring(0, 10) }}</span>
        <span class="mr-2">编辑</span>
        <span class="mr-1">收藏</span>
      </div>
    </div>
    <ArticleContentMdModule :loading="spinning" :result="article.text"></ArticleContentMdModule>
    <div class="icont-ft">
      <div class="icont-ft-title">
        <p>本文链接：原创文章转载请注明</p>
      </div>
      <div class="icont-cont">
        <div class="flex items-center" @click="upGive">
          <div i-fxemoji-beating-heart h-5 w-5></div>
          {{ article.give }}
        </div>

        <div>{{ article.read }} ℃</div>
        <div>{{ sortName }}</div>
        <div>
          {{ labelName }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-content {
  @apply bg-white rounded  h-[99.78vh] overflow-y-scroll;

  .icont-ft {
    .icont-ft-title {
      @apply p-1 text-base;

      p {
        border-bottom: 1.2px dashed #afa6a6;

        @apply font-light m-1 py-1 pb-2;
      }
    }

    .icont-cont {
      @apply flex mb-150 p-2 text-base text-cool-gray-600;

      div {
        @apply mx-1 cursor-pointer rounded;
        @apply hover:text-red-400;
      }
    }
  }
}
</style>
