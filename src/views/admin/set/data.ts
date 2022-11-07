interface State {
  resData: any
}
const state: State = reactive({
  resData: []
})

const columns: any = [
  {
    title: '主键',
    dataIndex: 'id',
    align: 'center',
    width: 40
  },
  {
    title: '标题',
    dataIndex: 'title',
    align: 'center',
    width: 70
  },

  {
    title: '路径',
    dataIndex: 'path',
    align: 'center',
    width: 100
  },
  {
    title: '是否启用',
    dataIndex: 'identity',
    align: 'center',
    width: 50
  },
  {
    title: '类别',
    dataIndex: 'type',
    align: 'center',
    width: 50
  },
  {
    title: '用户',
    dataIndex: 'user',
    align: 'center',
    width: 50
  },
  {
    title: '编辑',
    dataIndex: 'edit',
    align: 'center',
    width: 30
  },
  {
    title: '删除',
    dataIndex: 'del',
    align: 'center',
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
