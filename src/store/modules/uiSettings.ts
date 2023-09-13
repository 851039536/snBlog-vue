import { defineStore } from 'pinia'

/**
 * 网站UI界面统一设置属性
 */
export const useUiSetStore = defineStore('uiSet', {
  state: () => {
    return {
      rightSidebar: true,
      rightSidebarFastSend: false,
      leftSidebar: true,
      header: true,
      loading: false, //加载中
      searchArticle: false,
      loginUi: false, //登录弹窗
      fTools: false, //底部工具栏
      fToolsModal: false,
      fToolsQR: false,
      snippet: false,
      sideIndex: -1
    }
  },
  persist: {
    // 在这里进行自定义配置
    key: 'uiSet', //将被持久化存储在 localStorage 中的 my-custom-key key 中
    paths: ['rightSidebar', 'header', 'sideIndex'] // 未设置的不会被持久化。
  }
})
