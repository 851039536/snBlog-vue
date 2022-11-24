// import { storage } from '@/utils/storage/storage'
// import { message } from 'ant-design-vue'
// import { routers } from './routers'

/**
 * 角色权限
 */
// export enum hRole {
//   AUDIT = 0,
//   ADD = 0,
//   DEL = 0,
//   QUERY = 0,
//   EDIT = 0,
//   SUPER = 1
// }

/**
 * 清除用户登录信息
 * @param identity 0:不跳转 1:跳转后台
 */
// export function hClearUser(identity: Number) {
//   storage.remove(hUser.TOKEN)
//   storage.remove(hUser.ID)
//   storage.remove(hUser.NAME)
//   if (
//     storage.get(hUser.TOKEN) === hUser.TOKEN &&
//     storage.get(hUser.ID) === hUser.ID &&
//     storage.get(hUser.NAME) === hUser.NAME
//   ) {
//     message.info('用户已退出!', 6)
//     if (identity === 1) routers(hRouter.LOGIN)
//   }
// }
/**
 * 路由路径
 */
export enum rRouter {
  //后台管理路由
  articleAdd = '/Admin-index/ArticleAdd',
  articleEdit = '/Admin-index/ArticleEdit',
  articleTable = '/Admin-index/ArticleTable',
  labelTable = '/Admin-index/LabelTable',
  navTable = '/Admin-index/NavTable',
  navAdd = '/Admin-index/NavAdd',
  pageSet = '/Admin-index/PageSet',
  Login = '/Login',
  userTable = '/Admin-index/userTable',
  sqlBackups = '/Admin-index/SqlBackups'
}
