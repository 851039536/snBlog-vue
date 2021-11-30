import { video } from '@/api'
import { state } from './data'

class method {
  static async currentchange(val: number) {
    state.page = val
    await video.GetFyAsync(0, '0', state.page, state.pagesize, 'id', true, true).then((res: any) => {
      state.resultData = res.data
      console.log('%c [  state.resultData ]', 'font-size:13px; background:pink; color:#bf2c9f;', state.resultData)
    })
  }
}

export { method }
