export const rTag: any = ref([])
export const rType: any = ref([])

const columns: any = [
  {
    title: '标题',
    width: 120,
    dataIndex: 'name'
  },
  {
    title: '用户',
    dataIndex: 'user',
    align: 'center',
    width: 50
  },
  {
    title: '分类',
    dataIndex: 'type',
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
    title: '更新时间',
    dataIndex: 'timeModified',
    align: 'center',
    width: 78
  },
  {
    title: '创建时间',
    dataIndex: 'timeCreate',
    align: 'center',
    width: 78
  },

  {
    title: '阅读量',
    dataIndex: 'read',
    align: 'center',
    width: 35
  },
  {
    title: '点赞',
    dataIndex: 'give',
    align: 'center',
    width: 35
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
