import { article } from '@/api/index'
import { tool } from '@/utils/common/tool'
import { state } from './data'

export class method {
  static async GetCount(identity: number, type: string) {
    state.count = await (await article.GetCountAsync(identity, type, true)).data
  }

  static async GetFy() {
    await article
      .GetFyAsync(state.identity, state.typeStr, state.current, state.pagesize, 'id', true, true)
      .then((res: any) => {
        state.resData = res.data
      })
  }

  static async CurrentChange(val: number) {
    console.log('%c [ val ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', val)
    state.current = val
    await method.GetFy()
    tool.BackTop()
  }
}
