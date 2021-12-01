import { reactive } from 'vue'
import { interfaces } from '@/api/http/interfaces'
import { Routers } from '@/hooks/routers'

export const resData: any = reactive({
  resultData: []
})

export class method {
  /**
   * @description: 读取侧边栏数据
   */
  static async GetType() {
    await interfaces.GetTypeAsync(0, 'kai', 'sidebar', true).then((res: any) => {
      resData.resultData = res.data
    })
  }

  /**
   * @description: 路由跳转
   * @param {string} path 路径
   */
  static async skip(path: string) {
    await Routers(path)
  }
}
