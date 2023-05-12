<script setup lang="ts">
import { ArticleApi } from '@/api/index'
import { sideVisible } from '@/utils/common/visible-data'

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
  sideVisible.value = false
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
  <div m-auto>
    <base-top />
    <div class="md-content">
      <div class="py-2 text-center text-2xl">{{ state.blog.name }}</div>
      <v-md-preview ref="preview" :text="state.blog.text" />
    </div>
    <div class="md-sidebar">
      <div v-for="anchor in state.titles" :key="anchor" class="md-sidebar-tag" @click="handleAnchorClick(anchor)">
        {{ anchor.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../design/md-base';

.md-content {
  @apply bg-white mt-20 mb-800px ml-[3%];
}

.md-sidebar {
  @apply h-820px overflow-auto;

  --at-apply: rounded top-[8%] right-[14.5%] w-[13%] z-10 fixed mb-20;

  .md-sidebar-tag {
    --at-apply: rounded bg-white cursor-pointer m-1 text-base p-1;
    --at-apply: hover:bg-blue-400 hover:text-white;
  }
}
</style>
