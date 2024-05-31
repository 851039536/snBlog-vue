<script lang="ts" setup>
import { snippet } from '@api/model/Snippet'
import { useDirective } from '@/hooks/useDirective'
import { message } from 'ant-design-vue'
import { MdEditor } from 'md-editor-v3'
import { useUserInfo } from '@hooks/useUserInfo'
import { snippetTypeSub, snippetTag, snippetType } from './data'
import { useApi } from '@/api/useApi'

const { SnippetAPI, SnippetTagAPI, SnippetTypeAPI, SnippetTypeSubAPI } = useApi()

const reload: any = inject('reload')
const { getUserId } = useUserInfo()
const { debounce } = useDirective()
const add = debounce(async () => {
  snippet.userId = getUserId() as number
  const ret = await SnippetAPI.add(snippet)
  if (ret.data.statusCode === 200) {
    reload()
    return message.success(ret.data.message)
  }
  if (ret.data.statusCode === 404) {
    message.warning(ret.data.message)
  }
}, 1000)
onMounted(async () => {
  const [tag, type, label] = await axios.all([
    await SnippetTagAPI.getAll(false),
    await SnippetTypeAPI.getAll(false),
    await SnippetTypeSubAPI.getAll(false)
  ])
  snippetTag.value = tag.data.data
  snippetType.value = type.data.data
  snippetTypeSub.value = label.data.data
})
</script>
<template>
  <div class="h750px w1300px">
    <div class="mb-1">
      <input v-model="snippet.name" />
    </div>
    <div class="mb-1 text-base">
      <select v-model="snippet.typeId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetType" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
      <select v-model="snippet.typeSubId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetTypeSub" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
      <select v-model="snippet.tagId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetTag" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
    </div>
    <div class="mt-2">
      <MdEditor v-model="snippet.text" preview-theme="github" code-theme="github" />
    </div>
    <div class="mx-1 mt-1">
      <a-button @click="add">新增</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  border: 1.2px solid #c0c4cc;
  border-radius: 5px;
  outline-style: none;

  &:focus {
    border-color: #a39e98;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 7.5%), #9e9b98;
  }
}
</style>
