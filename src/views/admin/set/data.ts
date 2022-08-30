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
    width: 120
  },

  {
    title: '路径',
    dataIndex: 'path',
    width: 150
  },
  {
    title: '类别',
    align: 'center',
    dataIndex: 'type.name',
    width: 50
  },
  {
    title: '用户',
    align: 'center',
    dataIndex: 'user.name',
    width: 50
  },

  {
    title: '是否启用',
    key: 'identity',
    align: 'center',
    width: 80,
    slots: { customRender: 'identity' } // 绑定插槽
  },
  {
    title: '操作',
    key: '编辑',
    fixed: 'right',
    align: 'center',
    width: 70,
    slots: { customRender: 'ed' } // 绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    fixed: 'right',
    align: 'center',
    width: 70,
    slots: { customRender: 'de' } // 绑定插槽
  }
]

const stateArray: any = reactive({
  labelResult: [],
  sortResult: []
})
const stateStr: any = reactive({
  labelStr: 'ALL'
})
export {
  columns, state, stateArray, stateStr
}
