/*
 * @Author: your name
 * @Date: 2021-10-15 15:15:13
 * @LastEditTime: 2021-11-10 08:58:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\svideo\index.ts
 */

import { navigation } from '@/api'
import { state } from './data'

class method {
  static async currentchange(val: number) {
    state.page = val
    await navigation.GetFyAsync(1, '网站', state.page, state.pagesize, 'id', true, true).then((res: any) => {
      state.resultData = res.data
    })
  }
}

export { method }
