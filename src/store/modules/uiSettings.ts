import { defineStore } from 'pinia'

/**
 * 网站UI界面统一设置属性
 */
export const useUiSetStore = defineStore('uiSet', {
  state: () => {
    return {
      uiRightVisible: true,
      uiLeftVisible: true,
      uiHeadVisible: true,
      uiLoadingVisible: false,
      uiSearchVisible: false,
      loginVisible: false,
      sideIndex: -1 //选中后变色并且效果不消失
    }
  },
  persist: true //开启数据缓存
})
