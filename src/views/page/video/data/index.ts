import { VideoApi } from '@/api'
import { state } from './data'

class method {
  static async currentchange(val: number) {
    state.page = val
    await VideoApi.getPaging(0, '0', state.page, state.pagesize, true, true).then((r: any) => {
      state.rData = r.data
      console.log('%c [ state.rData ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', state.rData)
    })
  }
}

export { method }
