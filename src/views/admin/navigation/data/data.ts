import { IntNav } from '@/api/data/interData'

interface ResData {
  resData: any
  resNavType: any
  navStr: string
}
const state: ResData = reactive({
  resData: [],
  resNavType: [],
  navStr: 'ALL'
})

const columns = [
  { title: '标题', width: 100, dataIndex: 'title', key: 'title', fixed: 'left' },

  {
    title: '用户',
    dataIndex: 'user.name',
    width: 55,
    align: 'center'
  },
  {
    title: 'img',
    dataIndex: 'img',
    width: 50,
    ellipsis: true // 超过宽度将自动省略
  },
  {
    title: '描述',
    dataIndex: 'describe',
    width: 150,
    ellipsis: true // 超过宽度将自动省略
  },
  {
    title: '类别',
    dataIndex: 'type.title',
    width: 60,
    align: 'center'
  },

  {
    title: '创建',
    dataIndex: 'timeCreate',
    width: 80,
    align: 'center'
  },
  {
    title: '更新',
    dataIndex: 'timeModified',
    width: 80,
    align: 'center'
  },

  {
    title: '操作',
    key: '编辑',
    width: 40,
    fixed: 'right',
    align: 'center',
    slots: { customRender: 'ed' } // 绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    fixed: 'right',
    width: 40,
    align: 'center',
    slots: { customRender: 'de' } // 绑定插槽
  }
]

const formState: IntNav = reactive({
  id: 0,
  title: '',
  describe: '',
  img: '',
  typeId: 0,
  userId: 0,
  url: 'www.xxx.com'
})
export const resType: any = ref([])

export async function formNull() {
  formState.id = 0
  formState.title = 'title'
  formState.describe = 'describe'
  formState.img = ''
  formState.typeId = 3
  formState.userId = 0
  formState.url = 'www.xxx.com'
}

export { columns, state, formState }
