import { message } from 'ant-design-vue'
import { navigation, TOKEN } from '@/api'
import { tool } from '@/utils/common/tool'
import { state } from './data'
import { navName } from '../../utils/data'

export class method {
  static GetFy() {
    if (state.navStr === 'ALL') {
      navigation.GetFyAsync(0, state.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        state.resData = res.data
      })
    } else {
      navigation.GetFyAsync(1, state.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        state.resData = res.data
      })
    }
  }

  static SelectNav() {
    message.info(state.navStr)
    if (state.navStr === 'ALL') {
      navigation.GetFyAsync(0, state.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        state.resData = res.data
      })
    } else {
      navigation.GetFyAsync(1, state.navStr, 1, 1000, 'id', true, false).then((res) => {
        tool.MomentTimeList(res)
        state.resData = res.data
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
    if (state.navStr === 'ALL') {
      await navigation.GetContainsAsync(0, 'null', name, false).then((res) => {
        state.resData = res.data
      })
    } else {
      await navigation.GetContainsAsync(1, state.navStr, name, false).then((res) => {
        state.resData = res.data
      })
    }
  }

  static cancel() {
    message.info('已取消')
  }

  static async GetApi() {
    await TOKEN()
    method.GetFy()
    await navigation.GetSnNavigationTypeSAllAsync(false).then((res) => {
      state.resNavType = res.data
    })

    navName.name = '内容分享'
    navName.name2 = '导航列表'
  }
}
