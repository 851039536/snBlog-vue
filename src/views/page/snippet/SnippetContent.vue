<script lang="ts" setup>
import { useUserInfo } from '@hooks/useUserInfo'
import { snippet, Snippet } from '@api/model/Snippet'
import { useDirective } from '@hooks/useDirective'
import { message } from 'ant-design-vue'
import { MdPreview } from 'md-editor-v3'
import { useThemeSetting } from '@store/modules/themeSetting'
import { uiSettings } from '@store/modules/uiSettings'
import { useIndex } from './index'
import { snippetVersion } from '@api/model/SnippetVersion'
import { useApi } from '@api/useApi'
const { onScroll, refScroll } = useIndex()

const { isUserId } = useUserInfo()
const { debounce } = useDirective()
const theme = useThemeSetting()
const ui = uiSettings()
const { SnippetAPI, SnippetTypeAPI } = useApi()
const id = 'preview-only'

// 定义触发底部函数
const handleScroll = async () => {
  const containerEl = refScroll.value
  if (containerEl) {
    const isAtBottom = containerEl.scrollHeight - containerEl.scrollTop === containerEl.clientHeight
    console.log(isAtBottom + containerEl.clientHeight)
    if (isAtBottom && containerEl.clientHeight > 300) {
      pageSize.value += 5
      await scrollSnippet()
    }
  }
}

// 监听函数
watchEffect(() => {
  handleScroll()
})
const name = ref('')
const charSum = ref('')
const sum = ref('')
const rSnippet: any = ref([] as Snippet[])
const snippetTag: any = ref([])
const radios = ref<string>('ALL')
const sltValue: any = ref('ALL')
const pageSize: any = ref(2)

/**
 * 判断是否是全数子
 * @param str 字符串
 */
const isNumeric = (str: string) => {
  return /^\d+$/.test(str)
}
const QSnippet = debounce(async () => {
  if (name.value === '') {
    rSnippet.value = []
    return
  }
  pageSize.value = 5
  await getSnippet()
  onScroll('top')
}, 600)

const getSnippet = async () => {
  if (name.value === '' || isNumeric(name.value)) return

  switch (radios.value) {
    case 'ALL':
      await contains(0)
      break
    case 'title':
      await contains(5)
      break
    case 'type':
      await contains(1, sltValue.value)
      break
    case 'text':
      await contains(4)
      break
    default:
      await contains(0)
      break
  }
}

const contains = async (idex: number, types = 'null') => {
  const ret = await SnippetAPI.contains(idex, types, name.value, false, 1, pageSize.value)
  if (ret.status === 200) {
    rSnippet.value = ret.data.data
  } else {
    message.info('无数据')
  }
}
const scrollSnippet = debounce(async () => {
  await getSnippet()
}, 600)

const visible = ref(false)
const diffVisible = ref(false)

const radioFuns = async () => {
  switch (radios.value) {
    case 'type':
      name.value = ''
      snippetTag.value = await (await SnippetTypeAPI.getAll(true)).data
      if (snippetTag.value === null) {
        snippetTag.value = []
      } else {
        snippetTag.value = snippetTag.value.data
      }
      break

    default:
      name.value = ''
      break
  }
}
/**
 * @description: 通过id获取snippet
 * @param {number} id 主键id
 * @param uid 当前用户id
 */
const cliEdit = async (id: number, uid: number): Promise<any> => {
  if (!isUserId(uid)) {
    message.error('无权限!')
    return
  }

  //1.通过主键获取snippet内容
  const ret = await (await SnippetAPI.getById(id, false)).data
  snippet.id = ret.data.id
  snippet.name = ret.data.name
  snippet.text = ret.data.text
  snippet.tagId = ret.data.tag.id
  snippet.typeId = ret.data.type.id
  snippet.userId = ret.data.user.id
  snippet.typeSubId = ret.data.typeSub.id

  //2.更新之前存入旧版内容
  snippetVersion.name = snippet.name
  snippetVersion.text = snippet.text
  snippetVersion.snippetId = snippet.id
  visible.value = true
}

const cliDiff = async (id: number, uid: number): Promise<any> => {
  if (!isUserId(uid)) {
    message.error('无权限!')
    return
  }
  const ret = await (await SnippetAPI.getById(id, false)).data
  snippet.id = ret.data.id
  console.log('[ snippet.id ]-153', snippet.id)
  snippet.name = ret.data.name
  snippet.text = ret.data.text
  snippetVersion.text = ret.data.text
  snippet.tagId = ret.data.tag.id
  snippet.typeId = ret.data.type.id
  snippet.userId = ret.data.user.id
  snippet.typeSubId = ret.data.typeSub.id
  diffVisible.value = true
}

onMounted(async () => {
  const [strSum, sums] = await axios.all([
    await SnippetAPI.getStrSum(0, 'null', true),
    await SnippetAPI.getStrSum(0, '', true)
  ])
  charSum.value = strSum.data.data
  sum.value = sums.data.data
})
</script>

<template>
  <SnippetModal :visible="ui.snippet" @close-model="ui.snippet = false">
    <div class="sn-content">
      <div class="m-auto w65% p-2 text-base">
        <a-radio-group v-model:value="radios" @change="radioFuns">
          <a-radio value="ALL">默认</a-radio>
          <a-radio value="title">标题</a-radio>
          <a-radio value="text">内容</a-radio>
          <a-radio value="type">分类</a-radio>
        </a-radio-group>
        <n-button type="info" class="mr-1" @click="onScroll('top')">顶部</n-button>
        <n-button type="info" class="mr-1" @click="onScroll('bottom')">底部</n-button>
        <select v-model="sltValue" class="h-34px w-30 rounded text-base">
          <option class="rounded bg-blue-50">ALL</option>
          <option v-for="ret in snippetTag" :key="ret.id" :value="ret.name" class="bg-blue-50">
            {{ ret.name }}
          </option>
        </select>

        <input v-model="name" v-focus type="search" placeholder="片段搜索" class="mt-2" @input="QSnippet()" />
      </div>

      <!-- ref标识 -->
      <div ref="refScroll" class="modal-cont" @scroll="handleScroll">
        <div class="cont-item">
          <div v-for="(item, index) in rSnippet" :key="index" class="item">
            <custom-highlight-text
              :h-text="name"
              color="red"
              :text="item.name"
              class="mx-5 text-2xl"></custom-highlight-text>
            <div class="ml-5 pt-1 text-white">
              <n-tag :bordered="false" type="error" mr-1>{{ item.user.nickname }}</n-tag>
              <n-tag :bordered="false" mr-1>{{ item.type.name }}</n-tag>
              <n-tag :bordered="false" type="success" mr-1>{{ item.typeSub.name }}</n-tag>
              <n-tag :bordered="false" type="warning" mr-1>{{ item.tag.name }}</n-tag>
              <n-tag :bordered="false" mr-1 type="info" @click="cliDiff(item.id, item.user.id)">
                v_{{ item.snippetVersionId }}
              </n-tag>
              <span class="cursor-pointer text-gray-800 hover:text-blue-400" @click="cliEdit(item.id, item.user.id)">
                编辑
              </span>
            </div>
            <MdPreview
              :show-code-row-number="true"
              :editor-id="id"
              :model-value="item.text"
              :preview-theme="theme.previewTheme"
              :code-theme="theme.codeTheme" />
          </div>
        </div>
        <div class="absolute left-0 top-0 rounded bg-green-200 p-2 text-cool-gray-700">
          <div>{{ sum }} 条片段</div>
          <div>{{ charSum }} 个字符</div>
        </div>
      </div>
    </div>
  </SnippetModal>
  <!-- 编辑模块 -->
  <c-modal-dialog :visible="visible" title="code" @close-model="visible = false">
    <SnippetEdit></SnippetEdit>
  </c-modal-dialog>
  <!-- 版本差异模块 -->
  <c-modal-dialog :visible="diffVisible" title="codeDiff" @close-model="diffVisible = false">
    <SnippetDiff></SnippetDiff>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.modal-cont {
  @apply mt-4 w-full overflow-auto;

  .cont-item {
    margin: 0 auto;
    column-count: 2;
    column-gap: 1px;
    counter-reset: count;

    @apply mt-5 bg-white;

    .item {
      page-break-inside: avoid;
      -webkit-column-break-inside: avoid;
    }
  }
}

input {
  width: 65%;
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
@/api/model/Snippet@/api/model/SnippetVersion
