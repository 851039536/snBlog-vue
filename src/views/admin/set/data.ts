const columns: any = [
  {
    title: '主键',
    dataIndex: 'id',
    align: 'center',
    width: 40
  },
  {
    title: '标题',
    dataIndex: 'name',
    align: 'center',
    width: 70
  },

  {
    title: '路径',
    dataIndex: 'path',
    align: 'center',
    width: 80
  },
  {
    title: '启用',
    dataIndex: 'identity',
    align: 'center',
    width: 50
  },
  {
    title: '类别',
    dataIndex: 'type',
    align: 'center',
    width: 40
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
    fixed: 'right',
    width: 30
  },
  {
    title: '删除',
    dataIndex: 'del',
    align: 'center',
    fixed: 'right',
    width: 30
  }
]

export { columns }
