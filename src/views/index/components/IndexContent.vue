<script lang="ts" setup>
import { articleApi } from '@/api/index'
import { tool } from '@/utils/common/tool'
import { state, method } from '../data/content'
import xin from '@assets/svg/page/p-xin.svg?component'

const VmdContent = defineAsyncComponent(() => {
  return import('@/components/editor/VmdContent.vue')
})
const route = useRoute()
const router = useRouter()

const aid: any = reactive({
  id: route.query.id
})
const GetApi = async () => {
  await articleApi.GetById(aid.id, true).then((res: any) => {
    const rData = res.data[0]
    method.UpRead(rData)
    state.resData = rData
    state.time = tool.MomentTime(rData.timeCreate)
    state.labelName = rData.label.name
    state.sortName = rData.sort.name
    state.spinning = false
  })
}

onMounted(async () => {
  await GetApi()
  tool.BackTop()
})
</script>

<template>
  <div class="icont">
    <div class="icont-title">
      <a-page-header :title="state.resData.title" @back="() => router.back()" />
    </div>
    <VmdContent :loading="state.spinning" :result="state.resData.text"></VmdContent>
    <div class="icont-ft">
      <div class="icont-ft-title">
        <p>本文链接：原创文章转载请注明</p>
      </div>
      <div class="icont-cont">
        <div class="flex" @click="method.UpGive">
          <xin />
          <div>
            {{ state.resData.give }}
          </div>
        </div>

        <div>{{ state.resData.read }} ℃</div>
        <div>{{ state.sortName }}</div>
        <div>
          {{ state.labelName }}
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
