<script lang="ts" setup>
import { snippet } from '@hooksHttp/model/Snippet'
import { useDirective } from '@hooks/useDirective'
import { MdEditor } from 'md-editor-v3'
import { useThemeSetting } from '@store/modules/themeSetting'
import { useSnippetTypeApi, useSnippetTypeSubApi, useSnippetVersionApi } from '@/hooks/http'
import { useSnippetPack } from '@/hooks/http/pack/useSnippetPack'
import { snippetVersion } from '@/hooks/http/model/SnippetVersion'

const { getAll: snippetTypeAll } = useSnippetTypeApi()
const { adds: addSnippetVer, sum: snVerSum } = useSnippetVersionApi()
const { getCondition: snippetTypeSubCondition } = useSnippetTypeSubApi()
const { upSnippet } = useSnippetPack()
const { debounce } = useDirective()
const theme = useThemeSetting()
const snippetType: any = ref([])
const snippetTypeSub: any = ref([])

const update = debounce(async () => {
  //先存入旧版内容
  await addSnippetVer(snippetVersion)
  //更新片段之前,更新版本次数
  const sums = await snVerSum(1, snippet.id, false)
  snippet.snippetVersionId = sums.data
  //更新片段
  await upSnippet(snippet)
}, 600)
const getTypeSub = async (id: number) => {
  snippet.typeId = id
  const ret = await snippetTypeSubCondition(snippet.typeId)
  console.log(ret.data.data)
  snippetTypeSub.value = ret.data.data
}
onMounted(async () => {
  snippetType.value = await (await snippetTypeAll(true)).data.data
  await getTypeSub(snippet.typeId)
})
</script>
<template>
  <div class="h-[80%] w1300px">
    <div class="mb-1">
      <input v-model="snippet.name" class="w-full" />
    </div>
    <div class="mb-1">
      <select v-model="snippet.typeId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in snippetType" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
      <select v-model="snippet.typeSubId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in snippetTypeSub" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
    </div>

    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">分类:</div>
      <div v-for="ret in snippetType" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
        <span @click="getTypeSub(ret.id)">{{ ret.name }}</span>
      </div>
    </div>

    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">子分类:</div>
      <div v-for="ret in snippetTypeSub" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
        <span @click="snippet.typeSubId = ret.id">{{ ret.name }}</span>
      </div>
    </div>
    <div class="mt-2">
      <MdEditor v-model="snippet.text" :preview-theme="theme.previewTheme" :code-theme="theme.codeTheme" />
    </div>
    <div class="mx-1 mt-1">
      <a-button @click="update">更新</a-button>
    </div>
  </div>
</template>
