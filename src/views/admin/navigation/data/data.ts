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
  {
    title: '标题',
    width: 100,
    dataIndex: 'title',
    key: 'title'
    // fixed: 'left'
  },
  {
    title: '用户',
    dataIndex: 'user',
    width: 55
    // align: 'center'
  },
  {
    title: '链接',
    dataIndex: 'url',
    width: 20
  },
  {
    title: '描述',
    dataIndex: 'describe',
    width: 150,
    ellipsis: true // 超过宽度将自动省略
  },
  {
    title: '类别',
    dataIndex: 'type',
    width: 60
    // align: 'center'
  },

  {
    title: '创建',
    dataIndex: 'timeCreate',
    width: 80
    // align: 'center'
  },
  {
    title: '更新',
    dataIndex: 'timeModified',
    width: 80
    // align: 'center'
  },

  {
    title: '操作',
    dataIndex: 'edit',
    key: '编辑',
    width: 40
    // fixed: 'right',
    // align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'del',
    key: '删除',
    // fixed: 'right',
    width: 40
    // align: 'center'
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

export function formNull() {
  formState.id = 0
  formState.title = 'title'
  formState.describe = 'describe'
  formState.img = ''
  formState.typeId = 3
  formState.userId = 0
  formState.url = 'www.xxx.com'
}

export { columns, state, formState }
