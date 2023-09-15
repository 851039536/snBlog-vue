<script lang="ts" setup>
import { snippet } from '@hooksHttp/model/Snippet'
import { snippetVersion } from '@hooksHttp/model/SnippetVersion'
import { MdPreview } from 'md-editor-v3'
import { useThemeSetting } from '@store/modules/themeSetting'
import { useSnippetVersionApi } from '@/hooks/http'
const id = 'preview-only'
const theme = useThemeSetting()
const { bySnId, byId: byIdSnVer } = useSnippetVersionApi()
const snippetVer: any = ref()
const verId = ref(0)
const name = async () => {
  const retVer = await byIdSnVer(verId.value)
  snippetVersion.text = retVer.data.text
}
onMounted(async () => {
  const ret = await bySnId(snippet.id, false)
  snippetVer.value = ret.data
})
</script>
<template>
  <div class="h750px w1300px">
    <div class="text-2xl">
      {{ snippet.name }}
    </div>
    <div>
      <select v-model="verId" class="h-32px w-20 rounded text-base" @change="name()">
        <option v-for="ret in snippetVer" :key="ret.id" :value="ret.id" class="bg-blue-50">v_{{ ret.count }}</option>
      </select>
    </div>
    <div class="flex bg-emerald-100">
      <div class="h720px w-5/10 overflow-auto m-1">
        <div>新</div>
        <MdPreview
          :show-code-row-number="true"
          :editor-id="id"
          :model-value="snippet.text"
          :preview-theme="theme.previewTheme"
          :code-theme="theme.codeTheme" />
      </div>

      <div class="h720px w-5/10 overflow-auto m-1">
        <div>旧</div>
        <MdPreview
          :show-code-row-number="true"
          :editor-id="id"
          :model-value="snippetVersion.text"
          :preview-theme="theme.previewTheme"
          :code-theme="theme.codeTheme" />
      </div>
    </div>
  </div>
</template>
