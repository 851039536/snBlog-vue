import { reactive } from 'vue'
import { article } from '@/api/index'
import { tool } from '@/utils/common/tool'

interface State {
  resultData: any
  page: number
  pagesize: number
  count: number
}
const state: State = reactive({
  resultData: [],
  page: 1,
  pagesize: 8,
  count: 0
})

class method {
  static async GetCount() {
    state.count = await (await article.GetCountAsync(0, 'da', true)).data
  }

  static async GetFy() {
    await article.GetFyAsync(0, 'NULL', state.page, state.pagesize, 'id', true, true).then((result: any) => {
      state.resultData = result.data
    })
  }

  static async CurrentChange(val: number) {
    state.page = val
    await method.GetFy()
    await tool.BackTop()
  }
}
export { state, method }
