<script lang="ts" setup>
import { snippet } from '@api/model/Snippet'
import { snippetVersion } from '@api/model/SnippetVersion'
import { useApi } from '@/api/useApi'
import { CodeDiff } from 'v-code-diff'
const { SnippetVersionAPI } = useApi()
const snippetVer: any = ref()
const verId = ref(0)
const name = async () => {
  const retVer = await SnippetVersionAPI.getById(verId.value)
  snippetVersion.text = retVer.data.data.text
}
onMounted(async () => {
  const ret = await SnippetVersionAPI.getSnippetId(snippet.id, false)
  snippetVer.value = ret.data.data
})
</script>
<template>
  <div class="h-[75%] w1320px">
    <div class="m-a w100 text-center text-3xl">
      {{ snippet.name }}
    </div>
    <div>
      <select v-model="verId" class="mt-2 h-32px w-20 rounded pl-3" text="base" @change="name()">
        <option v-for="ret in snippetVer" :key="ret.id" :value="ret.id">v{{ ret.count }}</option>
      </select>
    </div>

    <div class="h740px flex">
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
