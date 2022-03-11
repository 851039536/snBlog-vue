import { storage } from '@/utils/storage/storage'
import { routers } from './routers'

/**
 * 清除用户storage信息
 */
export const removeStorage = () => {
  storage.remove('rolres')
  storage.remove('id')
  storage.remove('user')
  storage.remove('token')
}

/**
 * 当前登录用户id
 */
export const userId: any = ref(storage.get('id'))

/**
 * 判断token是否存在否则跳转登录界面
 */
export const isToken = async () => {
  if (storage.get('token') === 'token') {
    await routers('/Login')
  } else {
    await routers('/Admin-index/ArticleTable')
  }
}
