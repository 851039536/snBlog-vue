import { articleApi } from '@/api/index'
import { tool } from '@/utils/common/tool'
import { state } from './data'

class method {
  static async GetCount(identity: number, type: string) {
    state.count = await (await articleApi.GetCountAsync(identity, type, true)).data
  }

  static async GetFy() {
    await articleApi
      .GetFy(state.identity, state.typeStr, state.current, state.pagesize, 'id', true, true)
      .then((res: any) => {
        state.resData = res.data
      })
  }

  static async CurrentChange(val: number) {
    state.current = val
    await method.GetFy()
    tool.BackTop()
  }
}

export { method }
