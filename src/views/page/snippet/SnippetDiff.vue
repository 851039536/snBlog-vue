<script lang="ts" setup>
import { snippet } from '@api/model/Snippet'
import { snippetVersion } from '@api/model/SnippetVersion'
import { useSnippetVersionApi } from '@/hooks/http'
import { CodeDiff } from 'v-code-diff'
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
  <div class="h-[80%] w1350px">
    <div class="text-2xl">
      {{ snippet.name }}
    </div>
    <div>
      <select
        v-model="verId"
        class="mt-2 h-32px w-15 rounded border-none bg-blue-400 pl-3 outline-none"
        text="base white"
        @change="name()">
        <option v-for="ret in snippetVer" :key="ret.id" :value="ret.id">v{{ ret.count }}</option>
      </select>
    </div>

    <div class="h760px flex">
      <code-diff
        :old-string="snippetVersion.text"
        :new-string="snippet.text"
        output-format="side-by-side"
        :draw-file-list="true"
        :context="10"
        :render-nothing-when-empty="true" />
    </div>
  </div>
</template>
