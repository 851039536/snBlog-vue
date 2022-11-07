const columns: any = [
  {
    title: '标题',
    width: 100,
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '用户',
    dataIndex: 'user',
    align: 'center',
    width: 55
  },
  {
    title: '链接',
    dataIndex: 'url',
    align: 'center',
    width: 20
  },
  {
    title: '描述',
    dataIndex: 'describe',
    width: 120,
    ellipsis: true // 超过宽度将自动省略
  },
  {
    title: '类别',
    dataIndex: 'type',
    align: 'center',
    width: 60
  },

  {
    title: '创建',
    dataIndex: 'timeCreate',
    align: 'center',
    width: 80
  },
  {
    title: '更新',
    dataIndex: 'timeModified',
    align: 'center',
    width: 80
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
