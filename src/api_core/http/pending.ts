import qs from 'qs'

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map()
/**
 * 添加请求
 * @param {Object} res
 */
export const addPending = (res: any) => {
  const url = [res.method, res.url, qs.stringify(res.params), qs.stringify(res.data)].join('&')
  res.cancelToken =
    res.cancelToken ||
    new axios.CancelToken(cancel => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel)
        // console.log('[ 添加请求 ]=>', url)
      }
    })
}
/**
 * 移除请求
 * @param {Object} config
 */
export const removePending = (config: any) => {
  const url = [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join('&')
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url)
    cancel(url)
    pending.delete(url)
    // console.log('[ 移除请求 ]=>', url)
  }
}
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [url, cancel] of pending) {
    cancel(url)
    // console.log('[ 清空请求 ]=>', url)
  }
  pending.clear()
}
