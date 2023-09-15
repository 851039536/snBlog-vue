<script lang="ts" setup>
import { snippet } from '@hooksHttp/model/Snippet'
import { MdPreview } from 'md-editor-v3'
import { useThemeSetting } from '@store/modules/themeSetting'
const id = 'preview-only'
const theme = useThemeSetting()

onMounted(async () => {})
</script>
<template>
  <div class="h750px w1100px">
    <div class="text-2xl">
      {{ snippet.name }}
    </div>
    <div>
      <select class="h-32px w-30 rounded text-base">
        <option v-for="res in snippetTag" :key="res.id" :value="res.name" class="bg-blue-50">
          {{ res.name }}
        </option>
      </select>
    </div>
    <div class="mt-1 h720px overflow-auto">
      <MdPreview
        :show-code-row-number="true"
        :editor-id="id"
        :model-value="snippet.text"
        :preview-theme="theme.previewTheme"
        :code-theme="theme.codeTheme" />
    </div>
  </div>
</template>
