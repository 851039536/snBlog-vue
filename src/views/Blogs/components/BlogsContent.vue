<script lang="ts" setup>
import { article } from '@/api/index'
import { tool } from '@/utils/common/tool'
import { state, method } from '../data/content'

const VmdContent = defineAsyncComponent(() => {
  return import('@/components/editor/VmdContent.vue')
})
const route = useRoute()
const router = useRouter()
const roId: any = reactive({
  id: route.query.id
})

const GetApi = async () => {
  await article.GetById(roId.id, true).then((res: any) => {
    const result = res.data[0]
    method.UpRead(result)
    state.resultData = result
    state.time = tool.MomentTime(result.timeCreate)
    state.labelName = result.label.name
    state.sortName = result.sort.name
    state.spinning = false
  })
}
onMounted(async () => {
  await GetApi()
  await tool.BackTop()
})
</script>

<template>
  <div class="blogs-content">
    <!--标题-->
    <div class="blogs-content-title">
      <a-page-header :title="state.resultData.title" @back="() => router.back()" />
    </div>
    <!-- end 标题 -->

    <!--内容-->
    <VmdContent :loading="state.spinning" :result="state.resultData.text"></VmdContent>
    <!-- end 内容 -->

    <!--底部信息-->
    <div class="blogs-copyright">
      <div class="blogs-copyright-title">
        <!-- <div>版权属于：少年</div> -->
        <div class="text">本文链接：原创文章转载请注明</div>
      </div>
      <div class="blogs-comment">
        <div class>
          <a @click="method.UpGive">
            {{ state.resultData.give }}
          </a>
        </div>
        <div>{{ state.resultData.read }} ℃</div>
        <div class="blogs-comment-text">{{ state.sortName }}</div>
        <div class="blogs-comment-text">
          {{ state.labelName }}
        </div>
        <div class>{{ state.time }}</div>
      </div>
    </div>
  </div>
  <!-- end 底部信息 -->
</template>

<style lang="scss" scoped>
.blogs-content {
  .blogs-copyright {
    .blogs-copyright-title {
      @apply p-1;

      div {
        border-bottom: 1px dashed #f1f1f1;

        @apply font-light m-1 text-sm p-1;
      }
    }

    .blogs-comment {
      @apply flex;

      .blogs-comment-text {
        @apply rounded-sm bg-blue-200 shadow;
      }

      div {
        @apply font-light m-2 text-sm text-center py-1 px-1;
      }
    }
  }

  /* 返回上一页 */
  .blogs-content-title {
    @apply rounded cursor-pointer shadow relative;

    .ant-page-header-heading-title {
      @apply text-lg;
      @include line-one;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .ant-page-header {
      @apply shadow-sm;
    }

    .ant-page-header-back {
      @apply mt-0;
    }
  }
}

@screen <lg {
  .blogs-content {
    @apply mt-[6%] mb-[20%] ml-0 w-full;
  }
}
</style>
