import router from '@/router'
//路由跳转
export function useRouter() {
  /**
   * @description: 直接跳转
   * @param {string} path 路径
   */
  function routers(path: string) {
    return router.push({
      path,
      query: {
        t: +new Date()
      }
    })
  }
  /**
   * @description: 根据id跳转到指定的路由
   * @param {string} path
   * @param {number} id
   */
  const routerById = (path: string, id: number | string) => {
    return router.push({
      path,
      query: {
        id,
        t: +new Date()
      }
    })
  }

  /**
   * 结合 window.open 可以新窗口打开
   */
  function resolve(path: string, id: number) {
    return router.resolve({
      path,
      query: {
        id,
        t: +new Date()
      }
    })
  }

  /**
   * @description: 前进后退
   * @param {number} n n可为正数可为负数。正数返回上一个页面
   */
  function go(n: number) {
    return router.go(n)
  }

  /**
   * @description: 跳转新页面
   * @param {string} url
   */
  function winUrl(url: string) {
    return window.open(url)
  }

  /**
   *页面刷新
   */
  function reload() {
    return window.location.reload()
  }

  return {
    routerById,
    routers,
    resolve,
    go,
    winUrl,
    reload
  }
}
