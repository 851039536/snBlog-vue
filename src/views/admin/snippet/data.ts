export const snippetTag: any = ref([])
export const snippetType: any = ref([])
export const snippetTypeSub: any = ref([])
export const addVisible = ref(false)
export const edVisible = ref(false)
export const tagName = ref('')

const columns: any = [
  {
    title: '主键',
    width: 18,
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '标题',
    width: 80,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '用户',
    dataIndex: 'user',
    align: 'center',
    width: 30
  },
  {
    title: '类别',
    dataIndex: 'type',
    align: 'center',
    width: 30
  },
  {
    title: '子类别',
    dataIndex: 'typeSub',
    align: 'center',
    width: 30
  },
  {
    title: '标签',
    dataIndex: 'tag',
    align: 'center',
    width: 30
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
