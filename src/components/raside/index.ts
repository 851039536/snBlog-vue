/*
 * @Author: header类及data
 * @Date: 2021-09-17 12:09:00
 * @LastEditTime: 2021-11-09 17:03:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\header\index.ts
 */
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
