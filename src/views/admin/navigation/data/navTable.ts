import { message } from 'ant-design-vue'
import { navigation, TOKEN } from '@/api'
import { tool } from '@/utils/common/tool'
import { resData } from './data'
import { navName } from '../../utils/data'

export class method {
  static async GetFy() {
    if (resData.navStr === 'ALL') {
      navigation.GetFyAsync(0, resData.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        resData.resultData = res.data
      })
    } else {
      navigation.GetFyAsync(1, resData.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        resData.resultData = res.data
      })
    }
  }

  static async SelectNav() {
    message.info(resData.navStr)
    if (resData.navStr === 'ALL') {
      navigation.GetFyAsync(0, resData.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        resData.resultData = res.data
      })
    } else {
      navigation.GetFyAsync(1, resData.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        resData.resultData = res.data
      })
    }
  }

  /**
   * @description: 搜素框模糊查询
   * @param {string} name 名称
   */
  static async SearchTitle(name: string) {
    if (name === '') {
      return
    }
    if (resData.navStr === 'ALL') {
      await navigation.GetContainsAsync(0, 'null', name, false).then((res) => {
        resData.resultData = res.data
      })
    } else {
      await navigation.GetContainsAsync(1, resData.navStr, name, false).then((res) => {
        resData.resultData = res.data
      })
    }
  }

  static async cancel() {
    message.info('已取消')
  }

  static async GetApi() {
    await TOKEN()
    await this.GetFy()
    await navigation.GetSnNavigationTypeSAllAsync(false).then((res) => {
      resData.navTypeData = res.data
    })

    navName.name = '内容分享'
    navName.name2 = '导航列表'
  }
}
