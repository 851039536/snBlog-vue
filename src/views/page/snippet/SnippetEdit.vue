<script lang="ts" setup>
import { SnippetApi } from '@/api'
import { snippet } from '@hooksHttp/model/Snippet'
import { debounce } from '@/utils/dethrottle'
import { message } from 'ant-design-vue'
import { MdEditor } from 'md-editor-v3'
import { useThemeSetting } from '@store/modules/themeSetting'
import { useSnippetTagApi, useSnippetTypeApi, useSnippetTypeSubApi } from '@/hooks/http'

const { getAll: snippetTypeAll } = useSnippetTypeApi()
const { getAll: snippetTagAll } = useSnippetTagApi()
const { getAll: snippetTypeSubAll } = useSnippetTypeSubApi()
const theme = useThemeSetting()
const rSnippetTag: any = ref([])
const rSnippetType: any = ref([])
const rSnippetTypeSub: any = ref([])

const update = debounce(async () => {
  await SnippetApi.update(snippet).then(r => {
    if (r.data) {
      message.success('更新成功')
    } else {
      message.warning('更新失败')
    }
  })
}, 1000)
onMounted(async () => {
  rSnippetTag.value = await (await snippetTagAll(true)).data.data
  rSnippetType.value = await (await snippetTypeAll(true)).data.data
  rSnippetTypeSub.value = await (await snippetTypeSubAll(true)).data.data
})
</script>
<template>
  <div class="h720px w1100px">
    <div class="mb-1">
      <input v-model="snippet.name" />
    </div>
    <div class="mb-1">
      <select v-model="snippet.typeId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in rSnippetType" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
      <select v-model="snippet.typeSubId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in rSnippetTypeSub" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
      <select v-model="snippet.tagId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in rSnippetTag" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
    </div>
    <div class="mt-2">
      <MdEditor v-model="snippet.text" :preview-theme="theme.previewTheme" :code-theme="theme.codeTheme" />
    </div>
    <div class="mx-1 mt-1">
      <a-button @click="update">更新</a-button>
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
    border-color: #f07b00;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 7.5%), #f07b00;
  }
}
</style>
