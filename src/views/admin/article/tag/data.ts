export const editVisible = ref(false)
export const addVisible = ref(false)
const columns: any = [
  {
    title: '主键',
    width: 120,
    dataIndex: 'id'
  },
  {
    title: '标题',
    width: 120,
    dataIndex: 'name'
  },
  {
    title: '描述',
    width: 120,
    dataIndex: 'description'
  },

  {
    title: '操作',
    dataIndex: 'edit',
    align: 'center',
    fixed: 'right',
    width: 40
  },
  {
    title: '操作',
    dataIndex: 'del',
    align: 'center',
    fixed: 'right',
    width: 40
  }
]

export { columns }
