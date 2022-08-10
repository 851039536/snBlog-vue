<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { listContent } from '@/api'

const state: any = reactive({
  listTitle: [],
  listHref: []
})
const info = async () => {
  message.info('功能进行中...')
}
const GetApi = async () => {
  listContent.Cnblogs().then((res) => {
    const str = res.data
    for (let index = 0; index < str.length; index += 1) {
      const element = str[index].split('-')
      // eslint-disable-next-line prefer-destructuring
      state.listTitle[index] = element[0]
      // eslint-disable-next-line prefer-destructuring
      state.listHref[index] = element[1]
    }
  })
}
onMounted(async () => {
  await GetApi()
  await info()
})
</script>
<template>
  <div>
    <s-header></s-header>
    <div class="ListContent">
      <div class="ListContent_title">
        <p>最新内容 / 总 计 10</p>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div class="ListContent_t_content" v-for="(res, index) in state.listTitle" :key="index">
              <a :href="state.listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div class="ListContent_t_content" v-for="(res, index) in state.listTitle" :key="index">
              <a :href="state.listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div class="ListContent_t_content" v-for="(res, index) in state.listTitle" :key="index">
              <a :href="state.listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div class="ListContent_t_content" v-for="(res, index) in state.listTitle" :key="index">
              <a :href="state.listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @import './index.scss';
.ListContent {
  @apply mt-[4.5%] ml-[8%] w-[84%];
  @apply rounded-md shadow;

  .ListContent_title {
    @include underline;
    margin-bottom: 6px;
    p {
      @apply font-medium m-2 text-lg py-2 px-1;
    }
  }

  .ListContent_div {
    @apply m-3;
    @apply rounded shadow;

    .ListContent_text {
      @apply bg-white rounded text-base p-2;

      .ListContent_t_title {
        @apply rounded flex bg-gray-100 justify-between;
        div {
          @apply p-1;
        }
      }

      .ListContent_t_content {
        @apply p-1;
        a {
          span {
            @apply rounded bg-gray-200 px-1;
          }
        }
      }
    }
  }
}

@screen <xp {
  .ListContent {
    @apply mt-[7.3%];
  }
}
</style>
