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
    <div class="ListContent animate__animated animate__fadeIn">
      <div class="ListContent_title">
        <p>最新内容 / 总计 10</p>
      </div>
      <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
@import './index.scss';
</style>
