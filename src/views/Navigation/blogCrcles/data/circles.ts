import { navigation } from '@/api/index'

interface Res {
  resultData: any
  page: number
  pagesize: number
  count: number
  current: number
}
const resData: Res = reactive({
  resultData: [],
  page: 1,
  pagesize: 15,
  count: 0,
  current: 1
})

class method {
  static async GetTypeOrder() {
    await navigation.GetFyAsync(1, '博客圈', resData.page, resData.pagesize, 'id', true, true).then((res: any) => {
      resData.resultData = res.data
    })
    await navigation.GetCountAsync(1, '博客圈', true).then((res: any) => {
      resData.count = res.data
    })
  }

  static UrlSkip(url: string) {
    window.open(url)
  }

  static async currentchange(val: number) {
    resData.current = val
    await navigation.GetFyAsync(1, '博客圈', val, resData.pagesize, 'id', true, true).then((res: any) => {
      resData.resultData = res.data
    })
  }
}

export { method, resData }
