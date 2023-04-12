<script lang="ts" setup>
import { snippetApi, snippetTagApi, snippetTypeApi, TOKEN } from '@/api'
import { snippetForm } from '@/api/data/model/snippetMode'
import { isUserId } from '@/hooks/commonly'
import { debounce } from '@/utils/common/dethrottle'
import { message } from 'ant-design-vue'
// JS
import { ref, nextTick } from 'vue'
// 创建节点 ref
const scrollContainer = ref()

const onScroll = (type: any) => {
  //下一次 DOM 更新周期时再执行
  nextTick(() => {
    //根据 type 参数的值计算出要滚动到的位置  确保在模板中将其赋值给对应的 DOM 元素，如 <div ref="snippetRef"></div>。
    const distance = type === 'top' ? 0 : scrollContainer.value.scrollHeight
    scrollContainer.value.scrollTop = distance
  })
}

// 定义触发底部函数
const handleScroll = async () => {
  const containerEl = scrollContainer.value
  if (containerEl) {
    const isAtBottom = containerEl.scrollHeight - containerEl.scrollTop === containerEl.clientHeight
    console.log(isAtBottom + containerEl.clientHeight)
    if (isAtBottom && containerEl.clientHeight > 300) {
      console.log('%c [  ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', '调用GetAll')
      pageSize.value += 5
      await ScrollSnippet()
    }
  }
}

// 监听函数
watchEffect(() => {
  handleScroll()
})
watchEffect
const rName = ref('')
const rCharSun = ref('')
const rSnippet: any = ref([])
const rSnippetTag: any = ref([])
const radioValue = ref<string>('ALL')
const selectValue: any = ref('ALL')
const pageSize: any = ref(2)

/**
 * 判断是否是全数子
 * @param str 字符串
 */
const isNumeric = (str: string) => {
  return /^\d+$/.test(str)
}
const QSnippet = debounce(async () => {
  pageSize.value = 5
  await GetSnippet()
  onScroll('top')
}, 600)

const GetSnippet = async () => {
  if (rName.value === undefined || rName.value === '' || isNumeric(rName.value)) return

  switch (radioValue.value) {
    case 'ALL':
      rSnippet.value = await (await snippetApi.GetContains(0, 'null', rName.value, false, 1, pageSize.value)).data
      break
    case 'title':
      rSnippet.value = await (await snippetApi.GetContains(0, 'null', rName.value, false, 1, pageSize.value)).data
      break
    case 'type':
      rSnippet.value = await (
        await snippetApi.GetContains(1, selectValue.value, rName.value, false, 1, pageSize.value)
      ).data
      break
    case 'tag':
      rSnippet.value = await (
        await snippetApi.GetContains(2, selectValue.value, rName.value, false, 1, pageSize.value)
      ).data
      break
    case 'text':
      rSnippet.value = await (await snippetApi.GetContains(4, 'null', rName.value, false, 1, pageSize.value)).data
      break
    default:
      return null
  }
}
// This code debounces the call to GetSnippet() until there has been no
// scrolling for 600 milliseconds. This is to prevent the function from being
// called multiple times while scrolling.
const ScrollSnippet = debounce(async () => {
  await GetSnippet()
}, 600)

const visible = ref(false)

const RadioFun = async () => {
  switch (radioValue.value) {
    case 'tag':
      rName.value = ''
      rSnippetTag.value = await snippetTagApi.GetAll(true)
      if (rSnippetTag.value === null) {
        rSnippetTag.value = []
      } else {
        rSnippetTag.value = rSnippetTag.value.data
      }
      break

    case 'type':
      rName.value = ''
      rSnippetTag.value = await snippetTypeApi.GetAll(true)
      if (rSnippetTag.value === null) {
        rSnippetTag.value = []
      } else {
        rSnippetTag.value = rSnippetTag.value.data
      }
      break

    default:
      rName.value = ''
      break
  }
}
/**
 * @description: 通过id获取snippet
 * @param {number} id 主键id
 * @return {*}
 */

const cliEdit = async (id: number, uid: number): Promise<any> => {
  await TOKEN()
  if (!isUserId(uid)) {
    message.error('无权限!')
    return
  }
  await snippetApi.GetById(id, false).then((r: any) => {
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

onMounted(async () => {
  await snippetApi.GetStrSum(0, 'null', true).then(r => {
    rCharSun.value = r.data
  })
})
</script>

<template>
  <div class="w65% m-auto">
    <a-radio-group v-model:value="radioValue" @change="RadioFun">
      <a-radio value="ALL">默认</a-radio>
      <a-radio value="title">标题</a-radio>
      <a-radio value="text">内容</a-radio>
      <a-radio value="type">分类</a-radio>
      <a-radio value="tag">标签</a-radio>
    </a-radio-group>
    <button @click="onScroll('top')">顶部</button>
    <button @click="onScroll('bottom')">底部</button>
    <select v-model="selectValue" class="w-30 h-32px rounded text-base">
      <option class="bg-blue-50 rounded">ALL</option>
      <option v-for="res in rSnippetTag" :key="res.id" :value="res.name" class="bg-blue-50">
        {{ res.name }}
      </option>
    </select>

    <input v-model="rName" type="text" class="mt-2" @input="QSnippet()" />
  </div>

  <div class="bor"></div>

  <!-- ref标识 -->
  <div ref="scrollContainer" class="w-full modal-cont overflow-auto scroll-smooth" @scroll="handleScroll">
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
    <div class="absolute top-0 left-0 text-cool-gray-600 text-sm bg-yellow-100 p-3 rounded">{{ rCharSun }}字</div>
  </div>

  <c-modal-dialog :visible="visible" title="code" @close-model="visible = false">
    <template #snippetEditModel>
      <SnippetEdit></SnippetEdit>
    </template>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.bor {
  @apply mt-3;

  border-bottom: 1.8px solid #d8dce4;
}

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
  width: 65%;
  height: 100%;
  padding: 0;
  padding: 10px 15px;
  border: 1.2px solid #c2d0ec;
  border-radius: 5px;
  outline-style: none;

  @apply text-base;

  &:focus {
    border-color: #eed3b6;
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
