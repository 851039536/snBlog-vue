<script setup lang="ts">
import { ArticleApi } from '@/api/index'
import { hSide } from '@/hooks/CommonData'

const route = useRoute()
const state: any = reactive({
  blog: [],
  id: route.query.id,
  titles: []
})

const GetAll = async () => {
  await ArticleApi.getById(state.id).then((res: any) => {
    const { name, text } = res.data
    state.blog = { name, text }
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
  hSide.value = false
  await GetAll()
  const anchors = proxy.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
  const titles = Array.from(anchors).filter((title: any) => {
    return !!title.innerText.trim()
  })
  if (!titles.length) {
    state.titles = []
    return
  }
  const hTags = Array.from(
    new Set(
      titles.map((title: any) => {
        return title.tagName
      })
    )
  ).sort()
  state.titles = titles.map((el: any) => {
    return {
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName)
    }
  })
})
</script>
<template>
  <div m-auto w="[80%]">
    <c-back-top />
    <div class="vmd">
      <a-page-header style="border: 1px solid rgb(235 237 240)" :title="state.blog.name" />
      <v-md-preview ref="preview" :text="state.blog.text" />
    </div>
    <div class="anchor h-800px overflow-auto">
      <div v-for="anchor in state.titles" :key="anchor" class="anchor-tag" @click="handleAnchorClick(anchor)">
        {{ anchor.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vmd {
  --at-apply: bg-white mt-20 mb-800px ml-[3%] w-[75%];
}

.anchor {
  --at-apply: rounded top-[8%] right-[12%] w-[14%] z-10 fixed mb-20;

  .anchor-tag {
    --at-apply: rounded bg-white cursor-pointer m-1 text-base p-2;
    --at-apply: hover:bg-blue-400 hover:text-white;
  }
}
</style>
