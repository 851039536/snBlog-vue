<script lang="ts" setup>
import { reactive, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { article } from '@/api/index'
import { tool } from '@/utils/common/tool'
import SAspin from '@/components/aspin/sAspin.vue'
import { state, method } from '../../data/content'

const VmdContent = defineAsyncComponent(() => import('@/components/editor/VmdContent.vue'))
const route = useRoute()
const router = useRouter()

const roId: any = reactive({
  id: route.query.id
})

const GetApi = async () => {
  await article.GetByIdAsync(roId.id, true).then((res: any) => {
    state.time = tool.MomentTime(res.data[0].timeCreate)
    state.resultData = res.data[0]
    state.labelName = res.data[0].label.name
    state.sortName = res.data[0].sort.name
    method.UpRead(state.resultData)
    state.spinning = false
  })
}
GetApi()
tool.BackTop()
</script>

<template>
  <!-- 通用组件 -->

  <SAspin></SAspin>
  <!-- end 通用组件 -->

  <div class="indextext">
    <!--标题-->
    <div class="indexText_title">
      <a-page-header :title="state.resultData.title" @back="() => router.back()" />
    </div>
    <!-- end 标题 -->

    <!--内容-->
    <VmdContent :loading="state.spinning" :result="state.resultData.text"></VmdContent>
    <!-- end 内容 -->

    <!--底部信息-->
    <div class="indextest_copyright">
      <div class="indextest_copyright_title">
        <!-- <div>版权属于：少年</div> -->
        <div class="text">本文链接：原创文章转载请注明</div>
      </div>
      <div class="indextest_comment">
        <div class>
          <a @click="method.UpGive">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-qinggan
"
              />
            </svg>
            {{ state.resultData.give }}
          </a>
        </div>
        <div>{{ state.resultData.read }} ℃</div>
        <div class="indextest_comment_text">{{ state.sortName }}</div>
        <div class="indextest_comment_text">
          {{ state.labelName }}
        </div>
        <div class>{{ state.time }}</div>
      </div>
    </div>
  </div>
  <!-- end 底部信息 -->
</template>

<style lang="scss">
@import '@/design/methodCss';
@import '@/design/uitl';

.indextext {
  @include initialize(50%, 92%, 4.5%, null, 25%, null, #ffffff);
  @apply bg-red-100;
  /* 底部信息 */
  .indextest_copyright {
    @apply shadow rounded;
    @apply cursor-pointer bg-white text-black;

    .indextest_copyright_title {
      @apply p-1;

      div {
        border-bottom: 1px dashed #f1f1f1;

        @apply p-1 m-1 text-sm font-light;
      }
    }

    .indextest_comment {
      @apply flex;

      .indextest_comment_text {
        @apply bg-blue-200 shadow rounded-sm;
      }

      div {
        @apply px-1 py-1 m-2 text-sm font-light text-center;
      }
    }
  }

  .icons {
    @include w-h(1.5em, 1.5em);
  }

  /* 返回上一页 */
  .indexText_title {
    position: relative;

    @include initialize(null, 40px, 6.5%, null, null, null, #ffffff);

    @apply shadow rounded cursor-pointer;

    .ant-page-header-heading-title {
      @apply text-lg;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .ant-page-header {
      @apply shadow-sm rounded-sm;
    }

    .ant-page-header-back {
      @apply mt-0;
    }
  }

  //  .blog {
  //    @include blogs;
  //  }
}

@screen xp {
  .indextext {
    width: 100%;

    @apply ml-0;
  }
}
</style>
