<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { listContent } from '@/api'

const state: any = reactive({
  listTitle: [],
  listHref: []
})
const info = () => {
  message.info('功能进行中...')
}
const GetApi = () => {
  listContent.Cnblogs().then(res => {
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
    <l-sidebar></l-sidebar>
    <s-header></s-header>
    <div class="list-content">
      <div class="list-content-title">
        <p>最新内容 / 总 计 10</p>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        <div class="list-content-div">
          <div class="list-content-text">
            <div class="list-content-t-title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div v-for="(res, index) in state.listTitle" :key="index" class="list-content-t-content">
              <a :href="state.listHref[index]" target="-blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="list-content-div">
          <div class="list-content-text">
            <div class="list-content-t-title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div v-for="(res, index) in state.listTitle" :key="index" class="list-content-t-content">
              <a :href="state.listHref[index]" target="-blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="list-content-div">
          <div class="list-content-text">
            <div class="list-content-t-title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div v-for="(res, index) in state.listTitle" :key="index" class="list-content-t-content">
              <a :href="state.listHref[index]" target="-blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="list-content-div">
          <div class="list-content-text">
            <div class="list-content-t-title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div v-for="(res, index) in state.listTitle" :key="index" class="list-content-t-content">
              <a :href="state.listHref[index]" target="-blank">
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
.list-content {
  @apply mt-[4.5%] ml-[22%] w-[69%];
  @apply rounded-md shadow;

  .list-content-title {
    @include underline;

    margin-bottom: 6px;

    p {
      @apply font-medium m-2 text-lg py-2 px-1;
    }
  }

  .list-content-div {
    @apply m-3;
    @apply rounded shadow;

    .list-content-text {
      @apply bg-white rounded text-base p-2;

      .list-content-t-title {
        @apply rounded flex bg-gray-100 justify-between;

        div {
          @apply p-1;
        }
      }

      .list-content-t-content {
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
  .list-content {
    @apply mt-[7.3%];
  }
}
</style>
