import { rRouter } from '@/router/data'
import { storage } from '@/utils/storage/storage'
import { routers } from './routers'

/**
 * 用户信息
 */
export enum hUser {
  ROLE = 'role',
  TOKEN = 'token',
  ID = 'id',
  NAME = 'name'
}
/**
 * 清除用户storage信息
 */
export const ClearUser = () => {
  storage.remove(hUser.ROLE)
  storage.remove(hUser.ID)
  storage.remove(hUser.NAME)
  storage.remove(hUser.TOKEN)
}

/**
 * 判断token是否存在否则跳转登录界面
 */
export const isToken = async () => {
  if (storage.get(hUser.TOKEN) === hUser.TOKEN) {
    await routers(rRouter.Login)
  } else {
    await routers(rRouter.articleTable)
  }
}
