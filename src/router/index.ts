import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createRouter, createWebHistory, RouteRecordRaw, _RouteRecordBase
} from 'vue-router'
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
    name: 'Homes',
    component: () => {
      return import('@/components/general/SHome.vue')
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => {
      return import('@/components/general/SHome.vue')
    }
  },

  {
    path: '/Blogs',
    name: 'Blogs',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Blogs/BlogsIndex.vue')
    },
    children: [
      {
        path: 'BlogsColumn',
        name: 'BlogsColumn',
        component: () => {
          return import('@/views/Blogs/components/BlogsColumn.vue')
        }
      },
      {
        path: 'BlogsContent',
        name: 'BlogsContent',
        component: () => {
          return import('@/views/Blogs/components/BlogsContent.vue')
        }
      }
    ]
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      keepAlive: true
    },
    component: () => {
      return import('@/views/index/Index.vue')
    },
    children: [
      // 添加子路由
      {
        path: 'content',
        name: 'content',
        component: () => {
          return import('@/views/index/components/IndexContent.vue')
        }
      },
      {
        path: 'column',
        name: 'column',
        component: () => {
          return import('@/views/index/components/IndexColumn.vue')
        }
      }
    ]
  },
  {
    path: '/IndexSidebar',
    name: 'IndexSidebar',
    meta: {
      keepAlive: true
    },
    component: () => {
      return import('@/views/index/components/IndexSidebar.vue')
    }
  },
  {
    path: '/Tag',
    name: 'Tag',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Tag/TagIndex.vue')
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
    path: '/Navigation',
    name: 'Navigation',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Navigation/website/Navigation.vue')
    }
  },
  {
    path: '/BlogCircles',
    name: 'BlogCircles',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Navigation/blogCrcles/BlogCircles.vue')
    }
  },
  {
    path: '/Favorite',
    name: 'Favorite',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Navigation/favorite/Favorite.vue')
    }
  },
  {
    path: '/Svideo',
    name: 'Svideo',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Svideo/Svideo.vue')
    }
  },
  {
    path: '/VideoPlay',
    name: 'VideoPlay',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Svideo/components/VideoPlay.vue')
    }
  },
  {
    path: '/Leave',
    name: 'Leave',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/page/leave/Leave.vue')
    }
  },
  {
    path: '/One',
    name: 'One',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/One/One.vue')
    }
  },
  {
    path: '/Book',
    name: 'Book',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Book/BookIndex.vue')
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
    path: '/Software',
    name: 'Software',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Software/SSoftware.vue')
    }
  },
  {
    path: '/SoftwareContent',
    name: 'SoftwareContent',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/views/Software/SoftwareContent.vue')
    }
  },

  {
    path: '/VmdHtml',
    name: 'VmdHtml',
    meta: {
      keepAlive: false
    },
    component: () => {
      return import('@/components/editor/vmdhtml.vue')
    }
  },
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  {
    path: '/Login',
    name: 'Login',
    component: () => {
      return import('@/views/admin/login/Login.vue')
    }
  },
  {
    path: '/Admin-index',
    name: 'Admin-index',
    component: () => {
      return import('@/views/admin/index/AdminIndex.vue')
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
        component: () => {
          return import('@/views/admin/article/ArticleAdd.vue')
        }
      },
      {
        path: 'ArticleEdit',
        name: 'ArticleEdit',
        component: () => {
          return import('@/views/admin/article/ArticleEdit.vue')
        }
      },
      {
        path: 'NavTable',
        name: 'NavTable',
        component: () => {
          return import('@/views/admin/navigation/SNavTable.vue')
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
          return import('@/views/admin/set/PageSet.vue')
        }
      },
      {
        path: 'LabelTable',
        name: 'LabelTable',
        component: () => {
          return import('@/views/admin/label/LabelTable.vue')
        }
      }
    ]
  }
]

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
