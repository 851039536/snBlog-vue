<script lang="ts" setup>
import { ArticleApi } from '@/api/index'
import { Tool } from '@/utils/common/common-tool'
import { debounce } from '@/utils/dethrottle'
import { articleForm } from '@/api/data/model/ArtileModel'

const ArticleContentMdModule = defineAsyncComponent(() => {
  return import('@/views/page/article/components/content/ArticleContentMd.vue')
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
  articleForm.give += 1
  ArticleApi.updatePortion(articleForm, 'Give')
}, 1000)

async function upRead(data: any) {
  if (data === null) return
  data.read += 1
  await ArticleApi.updatePortion(data, 'Read')
}
onMounted(async () => {
  const data = await ArticleApi.getById(aid.id)
  const entity = data.data.data
  upRead(entity)
  articleForm.name = entity.name
  articleForm.text = entity.text
  articleForm.give = entity.give
  articleForm.read = entity.read
  articleForm.timeCreate = entity.timeCreate
  labelName.value = entity.tag.name
  sortName.value = entity.type.name
  spinning.value = false
  Tool.backTop()
})
</script>

<template>
  <div class="article-content">
    <div class="text-center">
      <div class="p-3 text-2xl font-semibold">
        <div i-flat-color-icons-previous mt-1 class="float-left cursor-pointer" @click="router.back()"></div>
        <div class="">{{ articleForm.name }}</div>
      </div>
      <div class="pt-1 text-sm text-cool-gray-500">
        <span class="mr-2">{{ sortName }}</span>
        <span class="mr-2">{{ labelName }}</span>
        <span class="mr-2">{{ articleForm.read }} ℃</span>
        <span class="mr-2">赞 {{ articleForm.give }}</span>
        <span class="mr-2">{{ articleForm.timeCreate.substring(0, 10) }}</span>
        <span class="mr-2">编辑</span>
        <span class="mr-1">收藏</span>
      </div>
    </div>
    <ArticleContentMdModule :loading="spinning" :result="articleForm.text"></ArticleContentMdModule>
    <div class="icont-ft">
      <div class="icont-ft-title">
        <p>本文链接：原创文章转载请注明</p>
      </div>
      <div class="icont-cont">
        <div class="flex items-center" @click="upGive">
          <div i-fxemoji-beating-heart h-5 w-5></div>
          {{ articleForm.give }}
        </div>

        <div>{{ articleForm.read }} ℃</div>
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
  @apply bg-white rounded;

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
