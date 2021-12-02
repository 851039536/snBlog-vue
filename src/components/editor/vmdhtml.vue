<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, onMounted, ref, getCurrentInstance } from 'vue'
import { article } from '@/api/index'

const route = useRoute()

const state: any = reactive({
  blog: [],
  id: route.query.id,
  titles: []
})

const GetAll = async () => {
  await article.GetByIdAsync(state.id, true).then((res: any) => {
    const { title, text } = res.data[0]
    state.blog = { title, text }
  })
}

const { proxy }: any = getCurrentInstance()
const preview = ref()
function handleAnchorClick(anchor: any) {
  const { lineIndex } = anchor
  const heading = preview.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)
  if (heading) {
    preview.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60
    })
  }
}

onMounted(async () => {
  await GetAll()
  const anchors = proxy.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
  const titles = Array.from(anchors).filter((title: any) => !!title.innerText.trim())
  if (!titles.length) {
    state.titles = []
    return
  }
  const hTags = Array.from(new Set(titles.map((title: any) => title.tagName))).sort()
  state.titles = titles.map((el: any) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName)
  }))
})
</script>
<template>
  <section>
    <a-back-top />
    <div class="anchor">
      <div class="anchor_tag" v-for="anchor in state.titles" :key="anchor" @click="handleAnchorClick(anchor)">
        {{ anchor.title }}
      </div>
    </div>
    <div class="vmd">
      <a-page-header style="border: 1px solid rgb(235, 237, 240)" :title="state.blog.title" />
      <v-md-preview :text="state.blog.text" ref="preview" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vmd {
  width: 77%;
  @apply bg-white  mt-12;
  margin-left: 3%;
}
.anchor {
  width: 16%;
  z-index: 10;
  @apply fixed  bg-gray-100 rounded;
  top: 7%;
  right: 3%;
  .anchor_tag {
    @apply bg-white m-1 p-2 cursor-pointer  text-lg text-gray-600 font-semibold;
  }
}
</style>
