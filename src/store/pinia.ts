import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  //  id: 必须的，在所有 Store 中唯一
  id: 'app',
  // state: 返回对象的函数
  state: () => ({
    // 设置页面是否新窗口打开
    setPage: false,
    // 角色
    roles: 'Roles',
    count: 0
  })
})
