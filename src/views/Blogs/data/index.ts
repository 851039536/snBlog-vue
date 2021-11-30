import { reactive } from 'vue'
import { article } from '@/api/index'

import { throttle } from '@/utils/common/dethrottle'

interface FyData {
  resultData: any
  page: number
  pagesize: number
  count: number
}

export const fyData: FyData = reactive({
  resultData: [],
  page: 1,
  pagesize: 8,
  count: 0
})
interface State {
  resultData: any
  labelName: string
  sortName: string
  time: any
  spinning: boolean
}
export const state: State = reactive({
  resultData: [],
  labelName: '',
  sortName: '',
  time: '',
  spinning: true
})
export class method {
  static async GetFy() {
    await article.GetFyAsync(1, '转载', fyData.page, fyData.pagesize, 'id', true, true).then((res: any) => {
      fyData.resultData = res.data
    })
  }

  static async GetCount() {
    await article.GetCountAsync(1, '转载', true).then((result: any) => {
      fyData.count = result.data
    })
  }

  static async GetApi() {
    await method.GetCount()
    await method.GetFy()
  }

  static async UpRead(res: any) {
    if (res !== null) {
      res.read += 1
      await article.UpdatePortionAsync(res, 'Read')
    }
  }

  static UpGive = throttle(() => {
    state.resultData.give += 1
    article.UpdatePortionAsync(state.resultData, 'Give')
  }, 1000)
}
