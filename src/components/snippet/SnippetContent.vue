<script lang="ts" setup>
import { snippetApi, snippetTagApi } from '@/api'
import { debounce } from '@/utils/common/dethrottle'
import { message } from 'ant-design-vue'
const rName = ref('')
const rSnippet: any = ref([])
const rSnippetTag: any = ref([])
const radioValue = ref<string>('ALL')
const selectValue: any = ref('ALL')
const QueryTitle = debounce(async () => {
  rSnippet.value = await (await snippetApi.GetContains(4, 'null', rName.value, false)).data
}, 600)
const sQuery = async () => {
  if (rName.value === '') return
  switch (radioValue.value) {
    case 'ALL':
      rSnippet.value = await (await snippetApi.GetContains(0, 'null', rName.value, false)).data
      break
    case 'title':
      rSnippet.value = await (await snippetApi.GetContains(0, 'null', rName.value, false)).data
      break
    case 'type':
      message.warning('待补充')
      // rSnippet.value = await (await snippetApi.GetContains(1, selectValue.value, rName.value, false)).data
      break
    case 'tag':
      rSnippet.value = await (await snippetApi.GetContains(2, selectValue.value, rName.value, false)).data
      break
    case 'text':
      await QueryTitle()
      break
    default:
      break
  }
}
const visible = ref(false)
const RadioFun = async () => {
  switch (radioValue.value) {
    case 'tag':
      rSnippetTag.value = await (await snippetTagApi.GetAll(true)).data
      break

    default:
      break
  }
}
const cliEdit = () => {
  visible.value = true
}
</script>
<template>
  <div class="w60% m-auto sncont">
    <a-radio-group v-model:value="radioValue" @change="RadioFun">
      <a-radio value="ALL">默认</a-radio>
      <a-radio value="title">标题</a-radio>
      <a-radio value="text">内容</a-radio>
      <a-radio value="type">分类</a-radio>
      <a-radio value="tag">标签</a-radio>
    </a-radio-group>
    <select v-model="selectValue" class="w-30 h-32px border-gray-400 rounded">
      <option class="bg-blue-50 rounded">ALL</option>
      <option v-for="res in rSnippetTag" :key="res.id" :value="res.name" class="bg-blue-50 rounded">
        {{ res.name }}
      </option>
    </select>
    <input v-model="rName" type="text " class="mt-2" @input="sQuery()" />
  </div>

  <div class="w-full modal-cont overflow-auto">
    <div class="test">
      <div v-for="(item, index) in rSnippet" :key="index" class="item">
        <c-highlightText
          :h-text="rName"
          color="red"
          :text="item.name"
          class="text-xl font-medium text-center bg-green-100 mx-8 rounded"></c-highlightText>
        <div class="mx-8 py-1">
          <span mr-2 ml-1 class="bg-yellow-200 p-1px rounded">{{ item.type.name }}</span>
          <span mr-2 class="bg-blue-200 p-1px rounded">{{ item.tag.name }}</span>
          <span class="cursor-pointer hover:text-blue-400" @click="cliEdit()">编辑</span>
        </div>
        <!-- <v-md-preview :text="item.text" mode="preview" class="mx-2" /> -->
        <v-md-editor v-model="item.text" mode="preview"></v-md-editor>
      </div>
    </div>
  </div>

  <c-modal-dialog :visible="visible" title="code" @close-model="visible = false">
    <template #snippetEditModel>
      <div class="w1000px h700px">
        <div class="mb-1">
          <input />
        </div>
        <div class="mb-1">
          <select v-model="selectValue" class="w-30 h-32px border-gray-400 rounded mr-2">
            <option class="bg-blue-50 rounded">ALL</option>
            <option v-for="res in rSnippetTag" :key="res.id" :value="res.name" class="bg-blue-50 rounded">
              {{ res.name }}
            </option>
          </select>
          <select v-model="selectValue" class="w-30 h-32px border-gray-400 rounded">
            <option class="bg-blue-50 rounded">ALL</option>
            <option v-for="res in rSnippetTag" :key="res.id" :value="res.name" class="bg-blue-50 rounded">
              {{ res.name }}
            </option>
          </select>
        </div>
        <!-- <div class="mt-2">
          <v-md-editor
            v-model="rSnippet[0].text"
            left-toolbar="undo redo | emoji | clear | h | code"
            height="610px"></v-md-editor>
        </div> -->
        <div class="mt-1 mx-1">
          <a-button>更新</a-button>
        </div>
      </div>
    </template>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.test {
  margin: 0 auto;
  column-count: 2;
  column-gap: 2px;
  counter-reset: count;

  @apply mt-5 bg-white;

  .item {
    page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
  }
}

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

@media screen and (min-width: 1367px) {
  .modal-cont {
    height: 750px;
  }
}

@media screen and (max-width: 1367px) {
  .modal-cont {
    height: 600px;
  }
}
</style>
