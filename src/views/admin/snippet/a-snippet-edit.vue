<script lang="ts" setup>
import { SnippetApi, SnippetLabelApi, SnippetTagApi, SnippetTypeApi } from '@/api'
import { snippetForm } from '@/api/data/model/SnippetMode'
import { getUserId } from '@/utils/user/user-info'
import { debounce } from '@/utils/dethrottle'
import { message } from 'ant-design-vue'
import { aData } from '../data'
import { snippetLabelData, snippetTagData, snippetTypeData } from './data'
// const reload: any = inject('reload')
const update = debounce(async () => {
  snippetForm.userId = getUserId()
  const res = await SnippetApi.update(snippetForm)
  if (res.data) {
    // reload()
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
  snippetTagData.value = tag.data
  snippetTypeData.value = type.data
  snippetLabelData.value = label.data
})
</script>
<template>
  <div class="h750px w1300px">
    <div class="mb-1">
      <input v-model="snippetForm.name" />
    </div>
    <div class="mb-1 text-base">
      <select v-model="snippetForm.typeId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in snippetTypeData" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
      <select v-model="snippetForm.labelId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in snippetLabelData" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
      <select v-model="snippetForm.tagId" class="mr-2 h-32px w-30 border-gray-400 rounded">
        <option v-for="res in snippetTagData" :key="res.id" :value="res.id" class="rounded bg-blue-50">
          {{ res.name }}
        </option>
      </select>
    </div>
    <div class="mt-2">
      <v-md-editor
        v-model="snippetForm.text"
        left-toolbar="undo redo | emoji | clear | h | code"
        height="610px"></v-md-editor>
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
  padding: 0;
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
