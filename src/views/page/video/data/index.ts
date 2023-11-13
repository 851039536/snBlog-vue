import { useApi } from '@/api/useApi'
import { state } from './data'

const { VideoApi } = useApi()

class method {
  static async currentchange(val: number) {
    state.page = val
    const ret = await VideoApi.getPaging(0, '0', state.page, state.pagesize, true, true)
    state.rData = ret.data.data
  }
}
export { method }
