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
      articleFastVisible: false,
      sideIndex: -1 //选中后变色并且效果不消失
    }
  },
  persist: {
    // 在这里进行自定义配置
    key: 'uiSet', //将被持久化存储在 localStorage 中的 my-custom-key key 中
    paths: ['uiRightVisible', 'uiHeadVisible'] // 未设置的不会被持久化。
  }
})
