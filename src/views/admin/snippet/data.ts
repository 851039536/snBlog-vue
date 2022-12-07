export const rSnippetTag: any = ref([])
export const rSnippetType: any = ref([])
export const rSnippetLabel: any = ref([])

const columns: any = [
  {
    title: '主键',
    width: 30,
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '标题',
    width: 100,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '用户',
    dataIndex: 'user',
    align: 'center',
    width: 60
  },
  {
    title: '类别',
    dataIndex: 'type',
    align: 'center',
    width: 60
  },
  {
    title: '子类别',
    dataIndex: 'label',
    align: 'center',
    width: 60
  },
  {
    title: '标签',
    dataIndex: 'tag',
    align: 'center',
    width: 60
  },

  {
    title: '操作',
    dataIndex: 'edit',
    align: 'center',
    key: '编辑',
    fixed: 'right',
    width: 40
  },
  {
    title: '操作',
    dataIndex: 'del',
    align: 'center',
    key: '删除',
    fixed: 'right',
    width: 40
  }
]

export { columns }
