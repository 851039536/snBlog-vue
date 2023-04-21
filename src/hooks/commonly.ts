import { rRouter } from '@/router/data'
import { storage } from '@/utils/storage/storage'
import { routers } from './Routers'

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
export const clearUser = () => {
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
/**
 * 判断是否是当前用户
 * @param uid 用户id
 * @returns bool
 */
export const isUserId = (uid: number) => {
  if (Number(storage.get(hUser.ID)) === uid) return true
  return false
}

/**
 * 读取当前用户id
 * @returns id
 */
export const getUserId = () => {
  return Number(storage.get(hUser.ID))
}
