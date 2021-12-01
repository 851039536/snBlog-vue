import { navigation } from '@/api'
import { resData } from './data'

class method {
  static async currentchange(val: number) {
    resData.current = val
    await navigation.GetFyAsync(1, resData.name, val, resData.pagesize, 'id', true, true).then((res: any) => {
      resData.text = res.data
    })
  }

  static async GetApi(name: string) {
    resData.current = 1
    resData.name = name
    resData.count = await (await navigation.GetCountAsync(1, resData.name, true)).data
    resData.type = await (await navigation.GetSnNavigationTypeSAllAsync(true)).data
    await navigation.GetFyAsync(1, name, resData.page, resData.pagesize, 'id', true, true).then((res) => {
      resData.text = res.data
    })
  }
}
export { method }
