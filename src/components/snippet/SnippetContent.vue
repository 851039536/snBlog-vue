<script lang="ts" setup>
import { snippetApi, snippetTagApi, snippetTypeApi, TOKEN } from '@/api'
import { snippetForm } from '@/api/data/model/snippetMode'
import { isUserId } from '@/hooks/commonly'
import { debounce } from '@/utils/common/dethrottle'
import { message } from 'ant-design-vue'
const rName = ref('')
const rSnippet: any = ref([])
const rSnippetTag: any = ref([])
const radioValue = ref<string>('ALL')
const selectValue: any = ref('ALL')
const QSnippet = debounce(async () => {
  if (rName.value === undefined || rName.value === '') return
  switch (radioValue.value) {
    case 'ALL':
      rSnippet.value = await (await snippetApi.GetContains(0, 'null', rName.value, true)).data
      break
    case 'title':
      rSnippet.value = await (await snippetApi.GetContains(0, 'null', rName.value, true)).data
      break
    case 'type':
      rSnippet.value = await (await snippetApi.GetContains(1, selectValue.value, rName.value, false)).data
      break
    case 'tag':
      rSnippet.value = await (await snippetApi.GetContains(2, selectValue.value, rName.value, false)).data
      break
    case 'text':
      rSnippet.value = await (await snippetApi.GetContains(4, 'null', rName.value, true)).data
      break
    default:
      return null
  }
}, 1000)

const visible = ref(false)
const RadioFun = async () => {
  switch (radioValue.value) {
    case 'tag':
      rSnippetTag.value = await (await snippetTagApi.GetAll(true)).data
      break
    case 'type':
      rSnippetTag.value = await (await snippetTypeApi.GetAll(true)).data
      break

    default:
      break
  }
}
const cliEdit = async (id: number, uid: number) => {
  await TOKEN()
  if (!isUserId(uid)) {
    message.error('无权限!')
    return
  }
  await snippetApi.GetById(id, false).then(r => {
    snippetForm.id = r.data.id
    snippetForm.name = r.data.name
    snippetForm.text = r.data.text
    snippetForm.tagId = r.data.tag.id
    snippetForm.typeId = r.data.type.id
    snippetForm.userId = r.data.user.id
    snippetForm.labelId = r.data.label.id
  })
  visible.value = true
}
</script>

<template>
  <div class="w60% m-auto">
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

    <!-- <button class="py-2px px-3 ml-2" @click="all()">全部</button> -->
    <input v-model="rName" type="text " class="mt-2" @input="QSnippet()" />
  </div>

  <div class="w-full modal-cont overflow-auto">
    <div class="test">
      <div v-for="(item, index) in rSnippet" :key="index" class="item">
        <c-highlightText
          :h-text="rName"
          color="red"
          :text="item.name"
          class="text-xl font-semibold text-center bg-green-300 mx-8 rounded"></c-highlightText>
        <div class="mx-8 py-1">
          <span mr-2 ml-1 class="bg-emerald-200 p-1px rounded">{{ item.type.name }}</span>
          <span mr-2 ml-1 class="bg-yellow-100 p-1px rounded">{{ item.label.name }}</span>
          <span mr-2 class="bg-blue-100 p-1px rounded">{{ item.tag.name }}</span>
          <span mr-2 class="bg-rose-100 p-1px rounded">{{ item.user.nickname }}</span>
          <span class="cursor-pointer hover:text-blue-400" @click="cliEdit(item.id, item.user.id)">编辑</span>
        </div>
        <v-md-editor v-model="item.text" mode="preview"></v-md-editor>
      </div>
    </div>

    <div class="absolute top-1 left-1 text-cool-gray-500 text-base">已产生:21421字符</div>
  </div>

  <c-modal-dialog :visible="visible" title="code" @close-model="visible = false">
    <template #snippetEditModel>
      <SnippetEdit></SnippetEdit>
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
    height: 770px;
  }
}

@media screen and (max-width: 1367px) {
  .modal-cont {
    height: 600px;
  }
}
</style>
