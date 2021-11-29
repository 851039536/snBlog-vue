import router from '@/router/index'

/**
 * @description: 路由跳转
 * @param {string} path 路径
 */
async function Routers(path: string) {
  await router.push({
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
const RouterId = async (path: string, id: number | string) => {
  await router.push({
    path,
    query: {
      id,
      t: +new Date()
    }
  })
}

async function resolve(path: string, id: number) {
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
async function go(n: number) {
  router.go(n)
}

/**
 * @description: 跳转新页面
 * @param {string} url
 */
async function winUrl(url: string) {
  window.open(url)
}

/**
 *页面刷新
 */
async function reloads() {
  window.location.reload()
}

export { Routers, RouterId, winUrl, go, resolve, reloads }
