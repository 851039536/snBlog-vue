import { articleApi } from '@/api'
import { throttle } from '@/utils/common/dethrottle'

interface State {
  resData: any
  labelName: string
  sortName: string
  time: any
  spinning: boolean
}
export const state: State = reactive({
  resData: [],
  labelName: '',
  sortName: '',
  time: '',
  spinning: true
})
export class method {
  static async UpRead(res: any) {
    if (res !== null) {
      res.read += 1
      await articleApi.UpdatePortion(res, 'Read')
    }
  }

  static UpGive = throttle(() => {
    state.resData.give += 1
    articleApi.UpdatePortion(state.resData, 'Give')
  }, 1000)
}
