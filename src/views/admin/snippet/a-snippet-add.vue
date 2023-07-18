<script lang="ts" setup>
import { SnippetApi, SnippetLabelApi, SnippetTagApi, SnippetTypeApi } from '@/api'
import { snippetForm } from '@/api/data/model/SnippetMode'
import { getUserId } from '@/utils/user/user-info'
import { debounce } from '@/utils/dethrottle'
import { message } from 'ant-design-vue'
import { aData } from '../data'
import { MdEditor } from 'md-editor-v3'
import { snippetLabelData, snippetTagData, snippetTypeData } from './data'
const reload: any = inject('reload')

const add = debounce(async () => {
  snippetForm.userId = getUserId()
  const res = await SnippetApi.add(snippetForm)
  if (res.data) {
    reload()
    return message.success(aData.SUCCESS)
  }
  message.warning(aData.FAIL)
}, 1000)
onMounted(async () => {
  const [tag, type, label] = await axios.all([
    await SnippetTagApi.getAll(false),
    await SnippetTypeApi.getAll(false),
    await SnippetLabelApi.getAll(false)
  ])
  snippetTagData.value = tag.data.data
  snippetTypeData.value = type.data.data
  snippetLabelData.value = label.data.data
})
</script>
<template>
  <div class="h750px w1300px">
    <div class="mb-1">
      <input v-model="snippetForm.name" />
    </div>
    <div class="mb-1 text-base">
      <select v-model="snippetForm.typeId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetTypeData" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
      <select v-model="snippetForm.labelId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetLabelData" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
      <select v-model="snippetForm.tagId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="ret in snippetTagData" :key="ret.id" :value="ret.id" class="rounded bg-blue-50">
          {{ ret.name }}
        </option>
      </select>
    </div>
    <div class="mt-2">
      <MdEditor v-model="snippetForm.text" preview-theme="github" code-theme="github" />
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
