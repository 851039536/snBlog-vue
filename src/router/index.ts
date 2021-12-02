import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import BlogHome from '@/components/home/SHome.vue'
import { clearPending } from '@/utils/http/pending'

const routes = [
  {
    path: '/',
    // 重定向，当前路径'/'没有对应的组件，需要重定向到其他路由页面
    redirect: '/BlogHome',
    name: 'Home',
    component: BlogHome
  },
  {
    path: '/BlogHome',
    name: 'BlogHome',
    component: () => import('@/components/home/SHome.vue')
  },
  {
    path: '/SAbout',
    name: 'SAbout',
    component: () => import('@/views/About/SAbout.vue')
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Blogs/BlogsIndex.vue'),
    children: [
      {
        path: 'BlogsColumn',
        name: 'BlogsColumn',
        component: () => import('@/views/Blogs/components/BlogsColumn.vue')
      },
      {
        path: 'BlogsContent',
        name: 'BlogsContent',
        component: () => import('@/views/Blogs/components/BlogsContent.vue')
      }
    ]
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/index/Index.vue'),
    children: [
      // 添加子路由
      {
        path: 'content',
        name: 'content',
        component: () => import('@/views/index/components/IndexContent.vue')
      },
      {
        path: 'column',
        name: 'column',
        component: () => import('@/views/index/components/IndexColumn.vue')
      }
    ]
  },
  {
    path: '/IndexSidebar',
    name: 'IndexSidebar',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/index/components/IndexSidebar.vue')
  },

  {
    path: '/TimeLine',
    name: 'TimeLine',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/TimeLine/TimeLine.vue')
  },
  {
    path: '/Tag',
    name: 'Tag',
    component: () => import('@/views/Tag/TagIndex.vue')
  },
  {
    path: '/Photo',
    name: 'Photo',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Photo/PhotoIndex.vue')
  },
  {
    path: '/Navigation',
    name: 'Navigation',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/navigation/website/Navigation.vue')
  },
  {
    path: '/BlogCircles',
    name: 'BlogCircles',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/navigation/blogCrcles/BlogCircles.vue')
  },
  {
    path: '/Favorite',
    name: 'Favorite',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/navigation/favorite/Favorite.vue')
  },
  {
    path: '/Svideo',
    name: 'Svideo',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Svideo/Svideo.vue')
  },
  {
    path: '/VideoPlay',
    name: 'VideoPlay',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Svideo/components/VideoPlay.vue')
  },
  {
    path: '/Leave',
    name: 'Leave',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/leave/Leave.vue')
  },
  {
    path: '/One',
    name: 'One',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/one/One.vue')
  },
  {
    path: '/Book',
    name: 'Book',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Book/BookIndex.vue')
  },
  {
    path: '/ListContent',
    name: 'ListContent',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/listContent/ListContent.vue')
  },
  {
    path: '/Software',
    name: 'Software',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Software/SSoftware.vue')
  },
  {
    path: '/SoftwareContent',
    name: 'SoftwareContent',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Software/SoftwareContent.vue')
  },

  {
    path: '/VmdHtml',
    name: 'VmdHtml',
    meta: {
      keepAlive: false
    },
    component: () => import('@/components/editor/VmdHtml.vue')
  },
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/admin/login/Login.vue')
  },
  {
    path: '/Admin-index',
    name: 'Admin-index',
    component: () => import('@/views/admin/index/AdminIndex.vue'),
    children: [
      // 添加子路由
      {
        path: 'ArticleTable',
        name: 'ArticleTable',
        component: () => import('@/views/admin/article/ArticleTable.vue')
      },
      {
        path: 'ArticleAdd',
        name: 'ArticleAdd',
        component: () => import('@/views/admin/article/ArticleAdd.vue')
      },
      {
        path: 'ArticleEdit',
        name: 'ArticleEdit',
        component: () => import('@/views/admin/article/ArticleEdit.vue')
      },
      {
        path: 'NavTable',
        name: 'NavTable',
        component: () => import('@/views/admin/navigation/SNavTable.vue')
      },
      {
        path: 'NavEdit',
        name: 'NavEdit',
        component: () => import('@/views/admin/navigation/NavEdit.vue')
      },
      {
        path: 'NavAdd',
        name: 'NavAdd',
        component: () => import('@/views/admin/navigation/NavAdd.vue')
      },
      {
        path: 'PageSet',
        name: 'PageSet',
        component: () => import('@/views/admin/set/PageSet.vue')
      },
      {
        path: 'LabelTable',
        name: 'LabelTable',
        component: () => import('@/views/admin/label/LabelTable.vue')
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
  console.log('%c [ _to ]-259', 'font-size:13px; background:pink; color:#bf2c9f;', _to)
  NProgress.start()
  if (_to.name !== 'Login') {
    clearPending()
  }
  next()
})
router.afterEach(() => {
  // 进度条
  NProgress.done()
})

export default router
