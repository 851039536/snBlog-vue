import { interfaces } from '@/api/http/interfaces'
import { routers } from '@/hooks/routers'

export const resData: any = ref([])

export class method {
  /**
   * @description: 读取侧边栏数据
   */
  static async GetType() {
    await interfaces.GetTypeAsync(0, 'kai', 'sidebar', true).then((res: any) => {
      resData.value = res.data
    })
  }

  /**
   * @description: 路由跳转
   * @param {string} path 路径
   */
  static async skip(path: string) {
    await routers(path)
  }
}
