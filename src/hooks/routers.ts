import router from '@/router/index'

/**
 * @description: 路由跳转
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
 * @description: 路由跳转{id}
 * @param {string} path
 * @param {number} id
 */
const routerId = (path: string, id: number | string) => {
  return router.push({
    path,
    query: {
      id,
      t: +new Date()
    }
  })
}

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
function reloads() {
  return window.location.reload()
}

export { routers, routerId, winUrl, go, resolve, reloads }
