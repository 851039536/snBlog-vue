import { rRouter } from '@/router/route-info'
import { storage } from '@/utils/storage/storage'
import { routers } from '../route'

/**
 * 用户信息
 */
export enum userInfo {
  ROLE = 'role',
  TOKEN = 'token',
  ID = 'id',
  NAME = 'name'
}
/**
 * 清除用户storage信息
 */
export const removeUserStorage = () => {
  storage.remove(userInfo.ROLE)
  storage.remove(userInfo.ID)
  storage.remove(userInfo.NAME)
  storage.remove(userInfo.TOKEN)
}

/**
 * 判断token是否存在否则跳转登录界面
 */
export const isToken = async () => {
  if (storage.get(userInfo.TOKEN) === userInfo.TOKEN) {
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
  if (Number(storage.get(userInfo.ID)) === uid) return true
  return false
}

/**
 * 读取当前用户id
 * @returns id
 */
export const getUserId = () => {
  return Number(storage.get(userInfo.ID))
}
