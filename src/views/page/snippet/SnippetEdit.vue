<script lang="ts" setup>
import { SnippetApi, SnippetLabelApi, SnippetTagApi, SnippetTypeApi } from '@/api'
import { snippetForm } from '@/api/data/model/SnippetMode'
import { debounce } from '@/utils/common/Dethrottle'
import { message } from 'ant-design-vue'

const rSnippetTag: any = ref([])
const rSnippetType: any = ref([])
const rSnippetLabel: any = ref([])

const update = debounce(async () => {
  await SnippetApi.update(snippetForm).then(r => {
    if (r.data) {
      message.success('更新成功')
    } else {
      message.warning('更新失败')
    }
  })
}, 1000)
onMounted(async () => {
  rSnippetTag.value = await (await SnippetTagApi.getAll(true)).data
  rSnippetType.value = await (await SnippetTypeApi.getAll(true)).data
  rSnippetLabel.value = await (await SnippetLabelApi.getAll(true)).data
})
</script>
<template>
  <div class="w1000px h700px">
    <div class="mb-1">
      <input v-model="snippetForm.name" />
    </div>
    <div class="mb-1">
      <select v-model="snippetForm.typeId" class="w-30 h-32px border-gray-400 rounded mr-2">
        <option v-for="res in rSnippetType" :key="res.id" :value="res.id" class="bg-blue-50 rounded">
          {{ res.name }}
        </option>
      </select>
      <select v-model="snippetForm.labelId" class="w-30 h-32px border-gray-400 rounded mr-2">
        <option v-for="res in rSnippetLabel" :key="res.id" :value="res.id" class="bg-blue-50 rounded">
          {{ res.name }}
        </option>
      </select>
      <select v-model="snippetForm.tagId" class="w-30 h-32px border-gray-400 rounded mr-2">
        <option v-for="res in rSnippetTag" :key="res.id" :value="res.id" class="bg-blue-50 rounded">
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
    <div class="mt-1 mx-1">
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
