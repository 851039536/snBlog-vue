import { rRouter } from '@/router/route-info'
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
   * 判断token是否存在否则跳转登录界面
   */
  const isToken = async () => {
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
  const isUserId = (uid: number) => {
    if (Number(storage.get(userInfo.ID)) === uid) return true
    return false
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
    isToken,
    isUserId,
    getUserId,
    getUserName,
    userInfo,
    setUserInfo
  }
}
