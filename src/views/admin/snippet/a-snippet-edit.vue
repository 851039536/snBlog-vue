<script lang="ts" setup>
import { snippet } from '@hooksHttp/model/Snippet'
import { snippetVersion } from '@hooksHttp/model/SnippetVersion'
import { snippetTag as tagMo } from '@hooksHttp/model/SnippetTag'
import { useDirective } from '@hooks/useDirective'
import { message } from 'ant-design-vue'
import { MdEditor } from 'md-editor-v3'
import { snippetTypeSub, snippetType, tagName, snippetTag, edVisible } from './data'
import { useUserInfo } from '@hooks/useUserInfo'
import { useSnippetTypeSubApi, useSnippetTagApi, useSnippetVersionApi } from '@/hooks/http'
import { useSnippetPack } from '@hooksHttp/pack/useSnippetPack'
const { getUserId } = useUserInfo()
const { debounce } = useDirective()
const { getCondition: snippetTypeSubCondition } = useSnippetTypeSubApi()
const { updates: upTag, adds: addTag, getByTitle } = useSnippetTagApi()
const { adds: addSnippetVersion, sum: snVerSum } = useSnippetVersionApi()
const { upSnippet } = useSnippetPack()
const reload: any = inject('reload')
const update = debounce(async () => {
  snippet.userId = getUserId() as number

  await addSnippetVersion(snippetVersion)

  const sums = await snVerSum(1, snippet.id, false)
  snippet.snippetVersionId = sums.data
  if (await upSnippet(snippet)) {
    edVisible.value = false
    reload()
  }
}, 1000)

const getTypeSub = async () => {
  const ret = await snippetTypeSubCondition(snippet.typeId)
  snippetTypeSub.value = ret.data.data
}

const tagEvent = async () => {
  //更新标签内容
  tagMo.id = snippet.tagId
  tagMo.name = tagName.value
  const ret = await upTag(tagMo)
  if (ret.data.statusCode === 200) message.success(ret.data.message)
}

const tagAccumulate = (name: string) => {
  if (tagName.value !== '') {
    tagName.value += `,${name}`
    return
  }
  tagName.value += `${name}`
}

//更新完记得删除
const updates = debounce(async () => {
  tagMo.name = tagName.value
  await addTag(tagMo)
  const tid = await getByTitle(tagMo.name)

  snippet.tagId = tid.data.data.id
  snippet.userId = getUserId() as number
  await upSnippet(snippet)
}, 1000)
onMounted(async () => {
  await getTypeSub()
})
</script>
<template>
  <div class="h750px w1300px">
    <div class="mb-1">
      <input v-model="snippet.name" class="inputs" />
    </div>
    <div class="mb-1 text-base">
      <select v-model="snippet.typeId" class="mr-2 h-32px w-30 border-gray-400 rounded" @change="getTypeSub()">
        <option v-for="ret in snippetType" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
      <select v-model="snippet.typeSubId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetTypeSub" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>

      <input v-if="tagName !== '待分配'" v-model="tagName" class="mr-2 h-32px w-100 border-gray-400 rounded" />
      <span
        v-if="tagName !== '待分配'"
        class="mr-1 cursor-pointer rounded bg-blue-400 p-1 px-2 shadow"
        @click="tagEvent()">
        更新
      </span>
      <select v-model="tagName" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetTag" :key="ret.id" :value="ret.name" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
      <input v-model="tagName" />
      <span class="mx-1 cursor-pointer rounded bg-blue-400 p-1 px-2 shadow" @click="updates()">新增,待删除</span>
    </div>

    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">分类:</div>
      <div v-for="ret in snippetType" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
        <span @click=";(snippet.typeId = ret.id), getTypeSub()">{{ ret.name }}</span>
      </div>
    </div>
    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">子分类:</div>
      <div v-for="ret in snippetTypeSub" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
        <span @click="snippet.typeSubId = ret.id">{{ ret.name }}</span>
      </div>
    </div>

    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">常用标签:</div>

      <div class="cursor-pointer p-1 pl-7px">
        <span class="pr-1 hover:text-blue-500" @click="tagAccumulate('测试')">测试</span>
        <span class="pr-1 hover:text-blue-500" @click="tagAccumulate('插件')">插件</span>
        <span class="pr-1 hover:text-blue-500" @click="tagAccumulate('DOM')">DOM</span>
        <span class="pr-1 hover:text-blue-500" @click="tagAccumulate('格式')">格式</span>
        <span class="pr-1 hover:text-blue-500" @click="tagAccumulate('监听')">监听</span>
        <span class="pr-1 hover:text-blue-500" @click="tagAccumulate('响应式')">响应式</span>
        <span class="pr-1 hover:text-blue-500" @click="tagAccumulate('缓存')">缓存</span>
      </div>
    </div>

    <div class="mt-2">
      <MdEditor v-model="snippet.text" />
    </div>
    <div class="mx-1 mt-1">
      <a-button @click="update">更新</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inputs {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  border: 1.2px solid #c0c4cc;
  border-radius: 5px;
  outline-style: none;

  &:focus {
    border-color: #f07b00;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 7.5%), #f07b00;
  }
}
</style>
