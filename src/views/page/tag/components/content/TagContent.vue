<script lang="ts" setup>
import { articleApi } from '@/api'
import { ref, nextTick } from 'vue'
import { rArticle } from '../../data'
/**
 * 选中后变色并且效果不消失
 */
const sideIndex = ref(0)
const blog = ref('')
async function GetApi(id: number) {
  onScroll('top')
  sideIndex.value = id
  blog.value = await (await articleApi.GetById(id, true)).data.text
}
const xxxRef = ref()
const onScroll = (type: string) => {
  nextTick(() => {
    const distance = type === 'top' ? 0 : xxxRef.value.scrollHeight
    xxxRef.value.scrollTop = distance
  })
}
const onScroll2 = (type: number) => {
  nextTick(() => {
    xxxRef.value.scrollTop += type
  })
}
const onScroll3 = (type: number) => {
  nextTick(() => {
    xxxRef.value.scrollTop -= type
  })
}
onMounted(async () => {
  // await GetApi(147)
})
</script>
<template>
  <div class="cont">
    <div class="cont-side">
      <div v-for="res in rArticle" :key="res.id" class="cont-side-form">
        <div class="form-1" :class="sideIndex == res.id ? 'active' : ''" @click="GetApi(res.id)">
          <span>{{ res.name }}</span>
        </div>
        <div class="form-2">
          <span>{{ res.read }}℃</span>
          <span>{{ res.timeCreate.substring(0, 10) }}</span>
          <span>编辑</span>
        </div>
      </div>
    </div>

    <div ref="xxxRef" class="cont-text">
      <v-md-preview :text="blog" model="preview" />
    </div>
  </div>
  <div fixed class="right-80 bottom-5 cursor-pointer z-1">
    <button p-1 @click="onScroll('top')">顶部</button>
    <button p-1 @click="onScroll('bottom')">底部</button>
    <button p-1 @click="onScroll2(200)">下滑</button>
    <button p-1 @click="onScroll3(200)">上划</button>
  </div>
</template>

<style lang="scss" scoped>
.cont {
  @apply flex flex-nowrap;
  @apply rounded h-840px shadow mt-1;

  .cont-side {
    @apply cursor-pointer shadow w-[25%] overflow-auto;

    .cont-side-form {
      @apply m-1 shadow p-1;

      .form-1 {
        @apply p-1 text-base;
        @apply bg-blue-50 rounded;
        @apply hover:text-blue-400;
      }

      .form-1.active {
        @apply bg-blue-400 text-cool-gray-50;
      }

      .form-2 {
        @apply text-cool-gray-500 text-sm mt-1;

        span {
          @apply ml-1 rounded;
        }
      }
    }
  }

  // 内容
  .cont-text {
    @apply mt-1 w-[75%] overflow-auto;

    scroll-behavior: smooth;
  }
}
</style>
