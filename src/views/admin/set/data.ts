interface State {
  resData: any
}
const state: State = reactive({
  resData: []
})

const columns = [
  {
    title: '主键',
    dataIndex: 'id',
    width: 40
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 70
  },

  {
    title: '路径',
    dataIndex: 'path',
    width: 100
  },
  {
    title: '是否启用',
    dataIndex: 'identity',
    width: 50
  },
  {
    title: '类别',
    dataIndex: 'type',
    width: 50
  },
  {
    title: '用户',
    dataIndex: 'user',
    width: 50
  },
  {
    title: '编辑',
    dataIndex: 'edit',
    width: 30
  },
  {
    title: '删除',
    dataIndex: 'del',
    width: 30
  }
]

const stateArray: any = reactive({
  labelResult: [],
  sortResult: []
})
const stateStr: any = reactive({
  labelStr: 'ALL'
})
export { columns, state, stateArray, stateStr }
