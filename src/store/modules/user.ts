// user.ts
import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserInfo = defineStore('userInfo', {
  // 其他配置...
  // state: 返回对象的函数
  state: () => {
    return {
      login: false
    }
  },
  persist: true //开启数据缓存
})
