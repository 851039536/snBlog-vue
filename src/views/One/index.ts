/*
 * @Author: your name
 * @Date: 2021-09-28 17:28:24
 * @LastEditTime: 2021-11-24 10:59:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\index.ts
 */

import { message } from 'ant-design-vue'
import { reactive } from 'vue'
import { one } from '@/api/index'

interface State {
  resultData: any
  dataOne: any
  text: any
  modal2Visible: boolean
  page: number
  pagesize: number
  count: number
}

const state: State = reactive({
  resultData: [],
  dataOne: [],
  text: [],
  modal2Visible: false,
  page: 1,
  pagesize: 6,
  count: 0
})

class method {
  static async setModal1Visible(modal2Visible: boolean, id: number) {
    state.modal2Visible = modal2Visible
    await one.GetByIdAsync(id, true).then((res: any) => {
      state.text = res.data
      if (res.data == null) {
      } else {
        res.data.oneRead++
        one.UpdatePortionAsync(state.text, 'read')
      }
    })
  }

  static async currentchange(val: number) {
    state.page = val
    await one.GetFyAsync(0, '0', state.page, state.pagesize, 'id', true, true).then((res: any) => {
      state.resultData = res.data
    })
  }

  static async Count() {
    await one.CountAsync(0, '', true).then((result: any) => {
      state.count = result.data
    })
  }

  static async getOne() {
    await one.GetFyAsync(0, '0', state.page, state.pagesize, 'id', true, true).then((res: any) => {
      state.resultData = res.data
    })
    await one.GetFyAsync(0, '0', 1, 1, 'id', true, true).then((res: any) => {
      state.dataOne = res.data[0]
    })
  }

  static async give(id: any) {
    message.info('已点赞')
    await one.GetByIdAsync(id, true).then((res: any) => {
      if (res.data == null) {
      } else {
        res.data.oneGive++
        one.UpdatePortionAsync(res.data, 'give')
      }
    })
  }
}

export { state, method }
