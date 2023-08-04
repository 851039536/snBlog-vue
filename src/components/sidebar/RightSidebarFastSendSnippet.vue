<script lang="ts" setup>
import { ident } from './data'
import { snippet, removeSnippet } from '@hooksHttp/model/Snippet'
import { MdEditor } from 'md-editor-v3'
import { SnippetApi } from '@/api'
import { debounce } from '@/utils/dethrottle'
import { useUserInfo } from '@/hooks/useUserInfo'
import { message } from 'ant-design-vue'
import { useSnippetTagApi, useSnippetTypeApi, useSnippetTypeSubApi } from '@/hooks/http'
const { getUserId } = useUserInfo()
const { getAll: getSnippetTypeAll } = useSnippetTypeApi()
const { getAll: getSnippetTagAll } = useSnippetTagApi()
const { getCondition: getSnippetTypeSubCondition } = useSnippetTypeSubApi()
const snippetTag: any = ref([])
const snippetType: any = ref([])
const snippetTypeSub: any = ref([])

const createPost = debounce(async () => {
  snippet.userId = getUserId() as number
  const ret = await SnippetApi.add(snippet)
  if (ret.data.statusCode === 200) {
    removeSnippet()
    return message.success(ret.data.message)
  }
  if (ret.data.statusCode === 404) {
    message.warning(ret.data.message)
  }
}, 800)

const getTypeSub = async () => {
  const ret = await getSnippetTypeSubCondition(snippet.typeId)
  snippetTypeSub.value = ret.data.data
}

const typeEvent = async (id: number) => {
  snippet.typeId = id
  console.log('[ snippet.typeId ]-37', snippet.typeId)
  await getTypeSub()
}
onMounted(async () => {
  const [tag, type] = await axios.all([await getSnippetTagAll(false), await getSnippetTypeAll(false)])
  snippetTag.value = tag.data.data
  snippetType.value = type.data.data
})
</script>
<template>
  <div class="post">
    <form v-if="ident === 4" @submit.prevent="createPost">
      <div class="h700px w1200px">
        <div class="mb-1">
          <input v-model="snippet.name" class="h-full w-250px rounded py-1 text-base outline-none" />

          <select v-model="snippet.typeId" class="mx-2 h-32px w-30 rounded" @change="getTypeSub()">
            <option v-for="ret in snippetType" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
              {{ ret.name }}
            </option>
          </select>

          <select v-model="snippet.typeSubId" class="mr-2 h-32px w-30 rounded">
            <option v-for="ret in snippetTypeSub" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
              {{ ret.name }}
            </option>
          </select>
          <select v-model="snippet.tagId" class="mr-2 h-32px w-30 rounded">
            <option v-for="ret in snippetTag" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
              {{ ret.name }}
            </option>
          </select>
        </div>
        <div class="mb-1 text-base">
          <div class="my-6px flex flex-wrap rounded shadow">
            <div class="p-1 pl-7px">分类:</div>
            <div v-for="ret in snippetType" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
              <span @click="typeEvent(ret.id)">{{ ret.name }}</span>
            </div>
          </div>

          <div class="my-6px flex flex-wrap rounded shadow">
            <div class="p-1 pl-7px">子分类:</div>
            <div v-for="ret in snippetTypeSub" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
              <span @click="snippet.typeSubId = ret.id">{{ ret.name }}</span>
            </div>
          </div>

          <div class="my-6px flex flex-wrap rounded shadow">
            <div class="p-1 pl-7px">标签:</div>
            <div v-for="ret in snippetTag" :key="ret.id" class="cursor-pointer p-1 pl-7px hover:text-blue-500">
              <span @click="snippet.tagId = ret.id">{{ ret.name }}</span>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <MdEditor v-model="snippet.text" preview-theme="github" code-theme="github" />
        </div>
      </div>
      <button type="submit">发布</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.post form button[type='submit'] {
  display: block;
  margin: 0 auto;
  padding: 5px 18px;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  background-color: #536cdd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.post form button[type='submit']:hover {
  background-color: #3e95cf;
}
</style>
