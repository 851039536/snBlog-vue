import { createStore } from 'vuex'

export default createStore({
  state: {
    // 设置页面是否新窗口打开
    SetPage: false,
    // 角色
    Roles: 'Roles'
  },

  mutations: {
    // 修改token，并将token存入localStorage
  },
  actions: {},
  modules: {}
})
