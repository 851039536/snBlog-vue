<script lang="ts" setup>
import { SnippetApi, SnippetTagApi, SnippetTypeApi, TOKEN } from '@/api'
import { snippetForm } from '@/api/data/model/SnippetMode'
import { isUserId } from '@/utils/user/user-info'
import { debounce } from '@/utils/dethrottle'
import { message } from 'ant-design-vue'
import { MdPreview } from 'md-editor-v3'
import { useThemeSetting } from '@store/modules/themeSetting'

const theme = useThemeSetting()
const id = 'preview-only'
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
      pageSize.value += 5
      await ScrollSnippet()
    }
  }
}

// 监听函数
watchEffect(() => {
  handleScroll()
})
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
      rSnippet.value = await (await SnippetApi.getContains(0, 'null', rName.value, false, 1, pageSize.value)).data
      break
    case 'title':
      rSnippet.value = await (await SnippetApi.getContains(5, 'null', rName.value, false, 1, pageSize.value)).data
      break
    case 'type':
      rSnippet.value = await (
        await SnippetApi.getContains(1, selectValue.value, rName.value, false, 1, pageSize.value)
      ).data
      break
    case 'tag':
      rSnippet.value = await (
        await SnippetApi.getContains(2, selectValue.value, rName.value, false, 1, pageSize.value)
      ).data
      break
    case 'text':
      rSnippet.value = await (await SnippetApi.getContains(4, 'null', rName.value, false, 1, pageSize.value)).data
      break
    default:
      return null
  }
}
const ScrollSnippet = debounce(async () => {
  await GetSnippet()
}, 600)

const visible = ref(false)

const RadioFun = async () => {
  switch (radioValue.value) {
    case 'tag':
      rName.value = ''
      rSnippetTag.value = await (await SnippetTagApi.getAll(true)).data
      if (rSnippetTag.value === null) {
        rSnippetTag.value = []
      } else {
        rSnippetTag.value = rSnippetTag.value.data
      }
      break

    case 'type':
      rName.value = ''
      rSnippetTag.value = await (await SnippetTypeApi.getAll(true)).data
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
  if (!isUserId(uid)) {
    message.error('无权限!')
    return
  }
  const ret = await SnippetApi.getById(id, false)
  snippetForm.id = ret.data.id
  snippetForm.name = ret.data.name
  snippetForm.text = ret.data.text
  snippetForm.tagId = ret.data.tag.id
  snippetForm.typeId = ret.data.type.id
  snippetForm.userId = ret.data.user.id
  snippetForm.labelId = ret.data.label.id
  visible.value = true
}

onMounted(async () => {
  await SnippetApi.getStrSum(0, 'null', true).then(r => {
    rCharSun.value = r.data
  })
})
</script>

<template>
  <div class="sn-content">
    <div class="m-auto w65% text-base">
      <a-radio-group v-model:value="radioValue" @change="RadioFun">
        <a-radio value="ALL">默认</a-radio>
        <a-radio value="title">标题</a-radio>
        <a-radio value="text">内容</a-radio>
        <a-radio value="type">分类</a-radio>
        <a-radio value="tag">标签</a-radio>
      </a-radio-group>
      <button
        class="mr-1 rounded-sm border-none bg-white px-2 hover:bg-blue-400 hover:text-light-50"
        @click="onScroll('top')">
        顶部
      </button>
      <button
        class="mr-1 rounded-sm border-none bg-white px-2 hover:bg-blue-400 hover:text-light-50"
        @click="onScroll('bottom')">
        底部
      </button>
      <select v-model="selectValue" class="h-32px w-30 rounded text-base">
        <option class="rounded bg-blue-50">ALL</option>
        <option v-for="res in rSnippetTag" :key="res.id" :value="res.name" class="bg-blue-50">
          {{ res.name }}
        </option>
      </select>

      <input v-model="rName" type="text" class="mt-2" @input="QSnippet()" />
    </div>

    <div class="bor"></div>

    <!-- ref标识 -->
    <div ref="scrollContainer" class="modal-cont w-full overflow-auto scroll-smooth" @scroll="handleScroll">
      <div class="test">
        <div v-for="(item, index) in rSnippet" :key="index" class="item">
          <custom-highlight-text
            :h-text="rName"
            color="red"
            :text="item.name"
            class="mx-6 text-2xl font-medium"></custom-highlight-text>
          <div class="ml-5 pt-1 text-base">
            <span ml-1 mr-1>{{ item.type.name }}</span>
            <span mr-1>{{ item.label.name }}</span>
            <span mr-1>{{ item.tag.name }}</span>
            <span mr-1>{{ item.user.nickname }}</span>
            <span class="cursor-pointer hover:text-blue-400" @click="cliEdit(item.id, item.user.id)">编辑</span>
          </div>
          <MdPreview
            :show-code-row-number="true"
            :editor-id="id"
            :model-value="item.text"
            :preview-theme="theme.previewTheme"
            :code-theme="theme.codeTheme" />
        </div>
      </div>
      <div class="absolute left-0 top-0 rounded bg-green-50 p-2 text-cool-gray-700">已生成 ：{{ rCharSun }}字</div>
    </div>

    <!-- 编辑模块 -->
    <c-modal-dialog :visible="visible" title="code" @close-model="visible = false">
      <SnippetEdit></SnippetEdit>
    </c-modal-dialog>
  </div>
</template>

<style lang="scss" scoped>
.bor {
  @apply mt-3;

  border-bottom: 1.8px solid #a0a3aa;
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
