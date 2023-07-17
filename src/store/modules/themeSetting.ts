import { defineStore } from 'pinia'

/**
 * 网站UI界面统一设置属性
 */
export const useThemeSetting = defineStore('useThemeSetting', {
  state: () => {
    return {
      previewTheme: 'github',
      codeTheme: 'gradient'
    }
  }
  // persist: true //开启数据缓存
})
