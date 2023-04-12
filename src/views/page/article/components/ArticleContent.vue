<script lang="ts" setup>
import { articleApi } from '@/api/index'
import { tool } from '@/utils/common/tool'
import { debounce } from '@/utils/common/dethrottle'
import { articleForm } from '@/api/data/model/artileModel'

const md = defineAsyncComponent(() => {
  return import('@/views/page/article/components/content/mdContent.vue')
})
const route = useRoute()
const router = useRouter()
const aid: any = reactive({
  id: route.query.id
})
const labelName = ref('')
const sortName = ref('')
const spinning = ref(true)

const UpGive = debounce(() => {
  articleForm.give += 1
  articleApi.UpdatePortion(articleForm, 'Give')
}, 1000)

async function UpRead(res: any) {
  if (res === null) return
  res.read += 1
  await articleApi.UpdatePortion(res, 'Read')
}
onMounted(async () => {
  await articleApi.GetById(aid.id, true).then((r: any) => {
    const rData = r.data
    UpRead(rData)
    articleForm.name = rData.name
    articleForm.text = rData.text
    articleForm.give = rData.give
    articleForm.read = rData.read
    articleForm.timeCreate = rData.timeCreate
    labelName.value = rData.tag.name
    sortName.value = rData.type.name
    spinning.value = false
  })
  tool.BackTop()
})
</script>

<template>
  <div class="icont">
    <div class="text-center">
      <div class="text-2xl p-3 font-semibold">
        <div i-flat-color-icons-previous mt-1 class="cursor-pointer float-left" @click="router.back()"></div>
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
    <md :loading="spinning" :result="articleForm.text"></md>
    <div class="icont-ft">
      <div class="icont-ft-title">
        <p>本文链接：原创文章转载请注明</p>
      </div>
      <div class="icont-cont">
        <div class="flex" @click="UpGive">
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
.icont {
  @apply bg-white;

  .icont-ft {
    .icont-ft-title {
      @apply p-1;

      p {
        border-bottom: 1.5px dashed #afa6a6;

        @apply font-light m-1 text-sm py-1 pb-2;
      }
    }

    .icont-cont {
      @apply flex mb-150 p-2 text-sm text-cool-gray-500;

      div {
        @apply mx-1 cursor-pointer rounded;
      }
    }
  }
}
</style>
