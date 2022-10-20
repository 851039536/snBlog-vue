import { interfaces } from '@/api/index'
import { routers, winUrl } from '@/hooks/routers'
import { sideIndex } from '@/hooks/data'

const rData: any = ref([])
/**
 * @description: 导出header类
 */
class method {
  static async GetType() {
    await interfaces.GetType(0, 'kai', 'header', false).then((res: any) => {
      rData.value = res.data
    })
  }

  static async skip(num: number) {
    sideIndex.value = -1
    switch (num) {
      case 13:
        winUrl('https://www.cnblogs.com/ouyangkai/')
        break
      case 14:
        winUrl('/Admin-index/ArticleTable')
        break
      default:
        await routers(num)
        break
    }
  }
}
export { method, rData }
