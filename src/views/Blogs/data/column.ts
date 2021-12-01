import { reactive } from 'vue'
import { article } from '@/api'

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
}
