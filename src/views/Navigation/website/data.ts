/*
 * @Author: your name
 * @Date: 2021-10-15 14:57:28
 * @LastEditTime: 2021-10-15 15:50:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\svideo\data.ts
 */

import { reactive } from 'vue'

interface State {
  resultData: any
  page: number
  pagesize: number
  count: number
  current: number
}
const state: State = reactive({
  resultData: [],
  page: 1,
  pagesize: 9,
  count: 0,
  current: 1
})

export { state }
