import { message } from 'ant-design-vue'
import { navigation, TOKEN } from '@/api'
import { tool } from '@/utils/common/tool'
import { state } from './data'
import { navName } from '../../utils/data'

export class method {
  static async GetFy() {
    if (state.navStr === 'ALL') {
      await navigation.GetFyAsync(0, state.navStr, 1, 1000, 'id', true, false).then(async res => {
        await tool.MomentTimeList(res)
        state.resData = res.data
      })
    } else {
      await navigation.GetFyAsync(1, state.navStr, 1, 1000, 'id', true, false).then(async res => {
        await tool.MomentTimeList(res)
        state.resData = res.data
      })
    }
  }

  static async SelectNav() {
    if (state.navStr === 'ALL') {
      await navigation.GetFyAsync(0, state.navStr, 1, 1000, 'id', true, false).then(async res => {
        await tool.MomentTimeList(res)
        state.resData = res.data
      })
    } else {
      await navigation.GetFyAsync(1, state.navStr, 1, 1000, 'id', true, false).then(async res => {
        await tool.MomentTimeList(res)
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
      await navigation.GetContains(0, 'null', name, false).then(res => {
        state.resData = res.data
      })
    } else {
      await navigation.GetContains(1, state.navStr, name, false).then(res => {
        state.resData = res.data
      })
    }
  }

  static cancel() {
    message.info('已取消')
  }

  static async GetApi() {
    await TOKEN()
    await method.GetFy()
    await navigation.GetNavTypeAll(false).then(res => {
      state.resNavType = res.data
    })

    navName.name = '内容分享'
    navName.name2 = '导航列表'
  }
}
