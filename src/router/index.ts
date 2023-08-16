// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import { useUserInfo } from '@hooks/useUserInfo'
const { isUserLogin } = useUserInfo()
declare module 'vue-router' {
  interface _RouteRecordBase {
    hidden?: boolean | string | number
  }
}

// 用对象字面量来存储懒加载组件的路径和对应的组件函数
const asyncComponents = {
  home: () => {
    return import('@/components/MyHome.vue')
  },
  article: () => {
    return import('@/views/page/article/Index.vue')
  },
  column: () => {
    return import('@/views/page/article/components/column/ArticleColumn.vue')
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      keepAlive: true
    },
    component: asyncComponents.home
  },
  {
    path: '/article',
    name: 'article',
    component: asyncComponents.article,
    children: [
      // 添加子路由
      {
        path: 'column',
        name: 'column',
        meta: {
          keepAlive: true
        },
        component: asyncComponents.column
      },
      {
        path: 'content',
        name: 'content',
        meta: {
          keepAlive: false
        },
        component: () => {
          return import('@/views/page/article/components/content/ArticleContent.vue')
        }
      }
    ]
  },

  {
    path: '/qarticle',
    name: 'qarticle',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/article2/index.vue')
    }
  },
  {
    path: '/Photo',
    name: 'Photo',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/photo/PhotoIndex.vue')
    }
  },

  {
    path: '/BlogCircles',
    name: 'BlogCircles',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/navigation/BlogCircles.vue')
    }
  },
  {
    path: '/favorite',
    name: 'favorite',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/navigation/Favorite.vue')
    }
  },
  {
    path: '/video',
    name: 'video',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/video/index.vue')
    }
  },
  {
    path: '/VideoPlay',
    name: 'VideoPlay',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/video/components/VideoPlay.vue')
    }
  },
  {
    path: '/diary',
    name: 'diary',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/diary/index.vue')
    }
  },
  {
    path: '/book',
    name: 'book',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/book/BookIndex.vue')
    }
  },
  {
    path: '/ListContent',
    name: 'ListContent',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/listContent/ListContent.vue')
    }
  },
  {
    path: '/myMarkdownContent',
    name: 'myMarkdownContent',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/components/the/TheMdContent.vue')
    }
  },
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  {
    path: '/Login',
    name: 'Login',
    meta: {
      keepAlive: true
    },
    component: () => {
      return import('@/views/admin/login/Login.vue')
    }
  },
  {
    path: '/Admin-index',
    name: 'Admin-index',
    component: () => {
      return import('@/views/admin/index.vue')
    },
    children: [
      // 添加子路由
      {
        path: 'ArticleTable',
        name: 'ArticleTable',
        component: () => {
          return import('@/views/admin/article/ArticleTable.vue')
        }
      },
      {
        path: 'ArticleAdd',
        name: 'ArticleAdd',
        meta: {
          keepAlive: false
        },
        component: () => {
          return import('@/views/admin/article/ArticleAdd.vue')
        }
      },
      {
        path: 'ArticleEdit',
        name: 'ArticleEdit',
        meta: {
          keepAlive: false
        },
        component: () => {
          return import('@/views/admin/article/ArticleEdit.vue')
        }
      },
      {
        path: 'ArticleTypeTable',
        name: 'ArticleTypeTable',
        component: () => {
          return import('@/views/admin/article/type/ArticleTypeTable.vue')
        }
      },
      {
        path: 'ArticleTagTable',
        name: 'ArticleTagTable',
        component: () => {
          return import('@/views/admin/article/tag/ArticleTagTable.vue')
        }
      },
      {
        path: 'NavTable',
        name: 'NavTable',
        component: () => {
          return import('@/views/admin/navigation/NavigationTable.vue')
        }
      },
      {
        path: 'NavEdit',
        name: 'NavEdit',
        component: () => {
          return import('@/views/admin/navigation/NavEdit.vue')
        }
      },
      {
        path: 'NavAdd',
        name: 'NavAdd',
        component: () => {
          return import('@/views/admin/navigation/NavAdd.vue')
        }
      },
      {
        path: 'PageSet',
        name: 'PageSet',
        component: () => {
          return import('@/views/admin/set/InterfaceTable.vue')
        }
      },
      {
        path: 'SqlBackups',
        name: 'SqlBackups',
        component: () => {
          return import('@/views/admin/sql/SqlBackups.vue')
        }
      },
      {
        path: 'userTable',
        name: 'userTable',
        meta: {
          keepAlive: false
        },
        component: () => {
          return import('@/views/admin/user/UserTable.vue')
        }
      },
      {
        path: 'snippetTable',
        name: 'snippetTable',
        meta: {
          keepAlive: false
        },
        component: () => {
          return import('@/views/admin/snippet/SnippetTable.vue')
        }
      }
    ]
  }
]

//函数用于创建路由器实例，用于管理应用程序的路由。您可以使用该实例定义路由规则、导航和监听路由变化。
// createWebHashHistory createWebHistory
const router = createRouter({
  history: createWebHistory(), // HTML5模式
  routes
})

// 跳转前触发，可在执行 next 方法前做一些身份登录验证的逻辑。
router.beforeEach((_to, _from, next) => {
  NProgress.start()

  //跳转后台页面判断是否登录
  if (_to.path.includes('/Admin-index')) {
    if (!isUserLogin()) return next({ path: '/Login' })
  }
  //跳转登录页面判断是否登录
  if (_to.path === '/Login') {
    if (isUserLogin()) return next({ path: '/Admin-index/ArticleTable' })
  }
  next()
})
router.afterEach(() => {
  // 进度条
  NProgress.done()
})

export default router
