import { interfaces } from '@/api/index'
import { Routers, winUrl } from '@/hooks/routers'

const resData: any = reactive({
  resultData: []
})

/**
 * @description: 导出header类
 */
class method {
  static async GetType() {
    await interfaces.GetTypeAsync(0, 'kai', 'header', true).then((res: any) => {
      resData.resultData = res.data
    })
  }

  static async skip(num: any) {
    switch (num) {
      case 13:
        winUrl('https://www.cnblogs.com/ouyangkai/')
        break
      case 14:
        winUrl('https://gitee.com/kaiouyang-sn')
        break
      default:
        await Routers(num)
        break
    }
  }
}
export { method, resData }
