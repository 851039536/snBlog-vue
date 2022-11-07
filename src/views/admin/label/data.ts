interface State {
  resData: any
  resLabel: any
  resSort: any
  labelStr: string
  order: boolean
}
const state: State = reactive({
  resData: [],
  resLabel: [],
  resSort: [],
  labelStr: 'ALL',
  order: true
})

const columns: any = [
  {
    title: '标题',
    width: 130,
    dataIndex: 'title',
    align: 'center',
    key: 'title'
  },

  {
    title: '用户',
    dataIndex: 'user.name',
    width: 55
  },
  {
    title: '分类',
    dataIndex: 'sort.name',
    width: 60
  },
  {
    title: '标签',
    dataIndex: 'label.name',
    width: 60
  },

  {
    title: '更新时间',
    dataIndex: 'timeModified',
    width: 80
  },
  {
    title: '创建时间',
    dataIndex: 'timeCreate',
    width: 80
  },

  {
    title: '阅读量',
    dataIndex: 'read',
    width: 35
  },
  {
    title: '点赞',
    dataIndex: 'give',
    width: 35
  },

  {
    title: '操作',
    key: '编辑',
    width: 40
  },
  {
    title: '操作',
    key: '删除',
    width: 40
  }
]

export { columns, state }
