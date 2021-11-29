import { reactive } from 'vue'
import { article } from '@/api'
import { throttle } from '@/utils/common/dethrottle'

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
  static async UpRead(res: any) {
    if (res == null) {
    } else {
      res.read++
      await article.UpdatePortionAsync(res, 'Read')
    }
  }

  static UpGive = throttle(() => {
    state.resultData.give++
    article.UpdatePortionAsync(state.resultData, 'Give')
  }, 1000)
}
