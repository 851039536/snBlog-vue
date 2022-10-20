import { INav } from '@/api/data/interData'

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
  },
  {
    title: '用户',
    dataIndex: 'user',
    width: 55
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
  },

  {
    title: '创建',
    dataIndex: 'timeCreate',
    width: 80
  },
  {
    title: '更新',
    dataIndex: 'timeModified',
    width: 80
  },

  {
    title: '操作',
    dataIndex: 'edit',
    key: '编辑',
    width: 40
  },
  {
    title: '操作',
    dataIndex: 'del',
    key: '删除',
    width: 40
  }
]

const formState: INav = reactive({
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
