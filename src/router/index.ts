// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createRouter, createWebHistory, RouteRecordRaw, _RouteRecordBase } from 'vue-router'
import NProgress from 'nprogress'
// import Home from '@/components/general/SHome.vue'

declare module 'vue-router' {
  // eslint-disable-next-line no-shadow
  interface _RouteRecordBase {
    hidden?: boolean | string | number
  }
}
const routes: RouteRecordRaw[] = [
  {
    // path: '/',
    // redirect: '/Home',
    // name: 'Homes',
    // component: Home

    path: '/',
    name: 'homes',
    meta: {
      keepAlive: true
    },
    component: () => {
      return import('@/components/MyHome.vue')
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      keepAlive: true
    },
    component: () => {
      return import('@/components/MyHome.vue')
    }
  },
  {
    path: '/article',
    name: 'article',
    component: () => {
      return import('@/views/page/article/Index.vue')
    },
    children: [
      // 添加子路由
      {
        path: 'column',
        name: 'column',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/page/article/components/column/ArticleColumn.vue')
        }
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
      return import('@/components/MyMarkdownContent.vue')
    }
  },
  // ------------------------------------------------------------------------------admin---------------------------------------------------
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
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/article/ArticleTable.vue')
        }
      },
      {
        path: 'ArticleAdd',
        name: 'ArticleAdd',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/article/ArticleAdd.vue')
        }
      },
      {
        path: 'ArticleEdit',
        name: 'ArticleEdit',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/article/ArticleEdit.vue')
        }
      },
      {
        path: 'ArticleTypeTable',
        name: 'ArticleTypeTable',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/article/type/ArticleTypeTable.vue')
        }
      },
      {
        path: 'ArticleTagTable',
        name: 'ArticleTagTable',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/article/tag/ArticleTagTable.vue')
        }
      },
      {
        path: 'NavTable',
        name: 'NavTable',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/navigation/NavigationTable.vue')
        }
      },
      {
        path: 'NavEdit',
        name: 'NavEdit',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/navigation/NavEdit.vue')
        }
      },
      {
        path: 'NavAdd',
        name: 'NavAdd',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/navigation/NavAdd.vue')
        }
      },
      {
        path: 'PageSet',
        name: 'PageSet',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/set/InterfaceTable.vue')
        }
      },
      {
        path: 'SqlBackups',
        name: 'SqlBackups',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/sql/SqlBackups.vue')
        }
      },
      {
        path: 'userTable',
        name: 'userTable',
        meta: {
          keepAlive: true
        },
        component: () => {
          return import('@/views/admin/user/UserTable.vue')
        }
      },
      {
        path: 'snippetTable',
        name: 'snippetTable',
        meta: {
          keepAlive: true
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
// 页面切换之前取消上一个路由中未完成的请求
router.beforeEach((_to, _from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  // 进度条
  NProgress.done()
})

export default router
