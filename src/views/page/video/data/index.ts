import { videoApi } from '@/api'
import { state } from './data'

class method {
  static async currentchange(val: number) {
    state.page = val
    await videoApi.GetFyAsync(0, '0', state.page, state.pagesize, 'id', true, true).then((res: any) => {
      state.resultData = res.data
    })
  }
}

export { method }
