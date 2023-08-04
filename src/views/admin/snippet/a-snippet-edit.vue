<script lang="ts" setup>
import { SnippetApi } from '@/api'
import { snippet } from '@hooksHttp/model/Snippet'
import { debounce } from '@/utils/dethrottle'
import { message } from 'ant-design-vue'
import { aData } from '../data'
import { MdEditor } from 'md-editor-v3'
import { snippetTypeSub, snippetTag, snippetType } from './data'
import { useUserInfo } from '@hooks/useUserInfo'
import { useSnippetTypeSubApi, useSnippetTagApi } from '@/hooks/http'
const { getUserId } = useUserInfo()
const { getCondition: snippetTypeSubCondition } = useSnippetTypeSubApi()
const { getById: snippetTagId } = useSnippetTagApi()
const update = debounce(async () => {
  snippet.userId = getUserId() as number
  const ret = await SnippetApi.update(snippet)
  if (ret.data) {
    return message.success(aData.SUCCESS)
  }
  message.warning(aData.FAIL)
}, 1000)

const getTypeSub = async () => {
  const ret = await snippetTypeSubCondition(snippet.typeId)
  snippetTypeSub.value = ret.data.data
}
const tagName = ref('')

const tagEvent = async (id: number) => {
  snippet.tagId = id
  const ret = await snippetTagId(id)
  tagName.value = ret.data.data.name
}

onMounted(async () => {
  await getTypeSub()
})

// onUpdated(async () => {
//   const [tag, type] = await axios.all([await getSnippetTagAll(false), await getSnippetTypeAll(false)])
//   snippetTag.value = tag.data.data
//   snippetType.value = type.data.data

//   await getTypeSub()
// })
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
      <input v-model="tagName" class="mr-2 h-32px w-100 border-gray-400 rounded" />
    </div>
    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">子分类:</div>
      <div v-for="ret in snippetTypeSub" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
        <span @click="snippet.typeSubId = ret.id">{{ ret.name }}</span>
      </div>
    </div>

    <div class="my-6px flex flex-wrap rounded shadow">
      <div class="p-1 pl-7px font-semibold">标签:</div>
      <div v-for="ret in snippetTag" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
        <span @click="tagEvent(ret.id)">{{ ret.name }}</span>
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
