<script lang="ts" setup>
import { articleApi } from '@/api/index'
import { tool } from '@/utils/common/tool'
import xin from '@assets/svg/page/p-xin.svg?component'
import { throttle } from '@/utils/common/dethrottle'
import { articleForm } from '@/api/data/model/artileModel'

const VmdContent = defineAsyncComponent(() => {
  return import('@/components/editor/VmdContent.vue')
})
const route = useRoute()
const router = useRouter()
const aid: any = reactive({
  id: route.query.id
})

const time = ref()
const labelName = ref()
const sortName = ref()
const spinning = ref(true)
const UpGive = throttle(() => {
  articleForm.give += 1
  articleApi.UpdatePortion(articleForm, 'Give')
}, 1000)

async function UpRead(res: any) {
  if (res === null) return
  res.read += 1
  await articleApi.UpdatePortion(res, 'Read')
}

onMounted(async () => {
  await articleApi.GetById(aid.id, true).then((res: any) => {
    const rData = res.data[0]
    UpRead(rData)
    articleForm.title = rData.title
    articleForm.text = rData.text
    articleForm.give = rData.give
    articleForm.read = rData.read
    time.value = tool.MomentTime(rData.timeCreate)
    labelName.value = rData.label.name
    sortName.value = rData.sort.name
    spinning.value = false
  })
  tool.BackTop()
})
</script>

<template>
  <div class="icont">
    <div class="icont-title">
      <a-page-header :title="articleForm.title" @back="() => router.back()" />
    </div>
    <VmdContent :loading="spinning" :result="articleForm.text"></VmdContent>
    <div class="icont-ft">
      <div class="icont-ft-title">
        <p>本文链接：原创文章转载请注明</p>
      </div>
      <div class="icont-cont">
        <div class="flex" @click="UpGive">
          <xin />
          <div>
            {{ articleForm.give }}
          </div>
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

  .icont-title {
    @apply cursor-pointer bg-white relative;

    .ant-page-header-heading-title {
      @apply text-lg overflow-hidden overflow-ellipsis whitespace-nowrap;
    }

    .ant-page-header {
      @apply shadow-sm;
    }

    .ant-page-header-back {
      @apply mt-0;
    }
  }

  .icont-ft {
    .icont-ft-title {
      @apply p-1;

      p {
        border-bottom: 1.5px dashed #afa6a6;

        @apply font-light m-1 text-sm py-1 pb-2;
      }
    }

    .icont-cont {
      @apply flex mb-150 p-2;

      div {
        @apply mx-1 cursor-pointer rounded;
      }
    }
  }
}
</style>
