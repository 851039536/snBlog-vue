<script setup lang="ts">
import { uiSettings } from '@store/modules/uiSettings'
import { useThemeSetting } from '@store/modules/themeSetting'
import { useApi } from '@api/useApi'
const { ArticleApi } = useApi()
const theme = useThemeSetting()
const ui = uiSettings()
import { MdPreview, MdCatalog } from 'md-editor-v3'

const id = 'preview-only'
const scrollElement = document.documentElement

const route = useRoute()
const state: any = reactive({
  blog: [],
  id: route.query.id,
  titles: []
})

const GetAll = async () => {
  await ArticleApi.getById(state.id).then((res: any) => {
    const { name, text } = res.data.data
    state.blog = { name, text }
  })
}

onMounted(async () => {
  ui.leftSidebar = false
  ui.rightSidebar = false
  await GetAll()
})
</script>
<template>
  <div>
    <base-top />
    <div class="md-content">
      <div class="py-2 text-center text-2xl">{{ state.blog.name }}</div>
      <MdPreview
        :show-code-row-number="true"
        :editor-id="id"
        :model-value="state.blog.text"
        :preview-theme="theme.previewTheme"
        :code-theme="theme.codeTheme" />
    </div>
    <div class="md-sidebar">
      <div class="md-sidebar-tag">
        <MdCatalog :scroll-element-offset-top="280" :editor-id="id" :scroll-element="scrollElement" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-content {
  @apply bg-white mt-3 rounded w-[75%];
}

.md-sidebar {
  @apply h-820px overflow-auto;

  --at-apply: rounded top-[8%] right-[14.5%] w-[13%] z-10 fixed mb-20;

  .md-sidebar-tag {
    --at-apply: rounded bg-white cursor-pointer m-1 text-base p-1;
  }
}
</style>
