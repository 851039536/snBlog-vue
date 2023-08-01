import { rRouter } from '@/router/routerInfo'
import { useStorage } from '@hooks/useStorage'
import { useRouter } from '@hooks/useRouter'
const { routers } = useRouter()
const { storage } = useStorage()

export function useUserInfo() {
  /**
   * 清除用户storage信息
   */
  function removeUserStorage() {
    storage.remove(userInfo.ROLE)
    storage.remove(userInfo.ID)
    storage.remove(userInfo.NAME)
    storage.remove(userInfo.TOKEN)
  }
  /**
   * 判断token是否存在
   */
  const isAdminToken = () => {
    if (storage.get(userInfo.TOKEN) === userInfo.TOKEN) {
      return false
    }
    return true
  }

  /**
   * 判断是否是当前用户
   * @param uid 用户id
   * @returns bool
   */
  const isUserId = (uid: number) => {
    if (Number(storage.get(userInfo.ID)) === uid) return true
    return false
  }

  /**
   * 判断用户是否登录
   */
  const isUserLogin = () => {
    if (storage.get(userInfo.NAME) === userInfo.NAME) {
      return false
    }
    return true
  }

  /**
   * 读取当前用户id
   * @returns id
   */
  const getUserId = () => {
    return storage.get<number>(userInfo.ID)
  }

  /**
   * 获取当前登录用户的名称
   * @returns string
   */
  const getUserName = () => {
    return storage.get<string>(userInfo.NAME)
  }

  /**
   * 用户信息
   */
  enum userInfo {
    ROLE = 'role',
    TOKEN = 'token',
    ID = 'id',
    NAME = 'name'
  }

  /**
   * 存入用户信息
   * @param role
   * @param token
   * @param userId
   * @param userName
   */
  const setUserInfo = (role: string, token: string, userId: number, userName: string) => {
    removeUserStorage()
    storage.set(userInfo.ROLE, role) // 角色名
    storage.set(userInfo.TOKEN, `Bearer ${token}`) // token
    storage.set(userInfo.ID, userId) // 用户主键
    storage.set(userInfo.NAME, userName) // 用户名
  }
  return {
    removeUserStorage,
    isUserId,
    getUserId,
    getUserName,
    userInfo,
    setUserInfo,
    isUserLogin,
    isAdminToken
  }
}
