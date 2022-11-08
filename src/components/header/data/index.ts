import { interfacesApi } from '@/api/index'
import { routers, winUrl } from '@/hooks/routers'
import { sideIndex } from '@/hooks/data'
import { storage } from '@/utils/storage/storage'
import { hUser } from '@/hooks/commonly'

const rData: any = ref([])
/**
 * @description: 导出header类
 */
class method {
  static async GetType() {
    await interfacesApi.GetType(0, storage.get(hUser.NAME), 'header', false).then((res: any) => {
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
