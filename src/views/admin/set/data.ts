/*
 * @Author: your name
 * @Date: 2021-10-18 16:19:58
 * @LastEditTime: 2021-11-04 08:24:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\index\data.ts
 */

import { reactive } from 'vue'
import { IntArticle } from '@/api/data/interData'

interface State {
  dataResult: any
}
const state: State = reactive({
  dataResult: []
})

const columns = [
  {
    title: '主键',
    dataIndex: 'id',
    width: 100
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 250
  },

  {
    title: '路径',
    dataIndex: 'path'
  },
  {
    title: 'typeId',
    dataIndex: 'typeId'
  },
  {
    title: 'userId',
    dataIndex: 'userId'
  },

  {
    title: '是否启用',
    key: 'identity',
    width: 100,
    slots: { customRender: 'identity' } // 绑定插槽
  },
  {
    title: '操作',
    key: '编辑',
    width: 80,
    slots: { customRender: 'ed' } // 绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    width: 80,
    slots: { customRender: 'de' } // 绑定插槽
  }
]

const formState: IntArticle = reactive({
  labelId: 1,
  sortId: 1,
  urlImg: 'img',
  userId: 1,
  id: 0,
  title: '标题',
  sketch: '简述',
  text: '',
  read: 0,
  img: 'img',
  commentId: 0,
  give: 0,
  timeCreate: '2090-10-01',
  timeModified: '2090-10-01',
  label: [],
  sort: [],
  user: []
})
const stateArray: any = reactive({
  labelResult: [],
  sortResult: []
})
const stateStr: any = reactive({
  labelStr: 'ALL'
})
export { columns, state, formState, stateArray, stateStr }
