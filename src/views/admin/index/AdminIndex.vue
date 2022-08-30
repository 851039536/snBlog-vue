<script lang="ts" setup>
import { routers } from '@/hooks/routers'
import { navName } from '../utils/data'
import { isToken, removeStorage } from '@/hooks/commonly'
import { storage } from '@/utils/storage/storage'

function zx() {
  removeStorage()
  isToken()
}
const handleClick = (e: any) => {
  switch (e.key) {
    case '1-1':
      routers('/Admin-index/ArticleTable')
      break
    case '1-2':
      routers('/Admin-index/LabelTable')
      break
    case '2-1':
      routers('/Admin-index/NavTable')
      break
    case '3-1':
      routers('/Admin-index/PageSet')
      break
    default:
      routers('/Admin-index/ArticleTable')
      break
  }
}
const showRouter = ref(true)
function reload() {
  showRouter.value = false
  nextTick(() => {
    showRouter.value = true
  })
}
provide('reload', reload)
</script>
<template>
  <div class="admin-index">
    <a-layout>
      <header class="header">
        <a class="logo">控制台</a>
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a href="https://www.cnblogs.com/ouyangkai/">博客园</a></li>
          <li><a @click="routers('/Blogs/BlogsColumn')">主页</a></li>
          <li><a @click="zx()">注销</a></li>
          <li>
            <a>
              <a-avatar>{{ storage.get('user') }}</a-avatar>
            </a>
          </li>
        </ul>
      </header>

      <a-layout>
        <div class="bg-warm-gray-50 shadow mt-1">
          <a-layout-sider breakpoint="lg" collapsed-width="0" width="220">
            <a-menu mode="inline" @click="handleClick" :style="{ height: '100%', borderRight: 0 }">
              <a-sub-menu key="article">
                <template #title>
                  <span> 文章展示 </span>
                </template>
                <a-menu-item key="1-1">文章列表</a-menu-item>
                <a-menu-item key="1-2">标签</a-menu-item>
                <a-menu-item key="1-3">类别</a-menu-item>
                <a-menu-item key="1-4">Login</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <template #title>
                  <span> 内容分享 </span>
                </template>
                <a-menu-item key="2-1">导航列表</a-menu-item>
                <a-menu-item key="2-2">标签</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub3">
                <template #title>
                  <span> 设置 </span>
                </template>
                <a-menu-item key="3-1">页面设置</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
        </div>

        <a-layout style="padding: 0 12px 12px;">
          <a-breadcrumb style="margin: 14px 0;">
            <a-breadcrumb-item>{{ navName.name }}</a-breadcrumb-item>
            <a-breadcrumb-item>{{ navName.name2 }}</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content :style="{
            background: '#fff',
            padding: '10px',
            margin: 0,
            minHeight: '98%'
          }">
            <router-view v-if="showRouter" class=""></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.admin-index {
  @apply h-full w-full z-10 fixed;
  @apply bg-gray-100;

  .header {
    @apply bg-white w-full;

    box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 10%);

    .logo {
      display: block;
      float: left;
      padding: 10px 20px;
      font-size: 2em;
      text-decoration: none;
    }

    .menu-icon {
      position: relative;
      display: inline-block;
      float: right;
      padding: 28px 20px;
      cursor: pointer;
      user-select: none;

      .navicon {
        position: relative;
        display: block;
        width: 18px;
        height: 2px;
        background: #333;
        transition: background 0.2s ease-out;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      list-style: none;
      background-color: #fff;
    }

    li a {
      display: block;
      padding: 20px;
      text-decoration: none;
      border-right: 1px solid #f4f4f4;
    }

    .menu {
      clear: both;
      max-height: 0;
      transition: max-height 0.2s ease-out;

      li {
        @apply text-base;
      }
    }
  }

  .header .menu-icon .navicon::before,
  .header .menu-icon .navicon::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #333;
    transition: all 0.2s ease-out;
    content: "";
  }

  .header .menu-icon .navicon::before {
    top: 5px;
  }

  .header .menu-icon .navicon::after {
    top: -5px;
  }

  /* menu btn */

  /* 48em = 768px */

  @media (min-width: 48em) {
    .header li {
      float: left;
    }

    .header li a {
      padding: 20px 30px;
    }

    .header .menu {
      float: right;
      clear: none;
      max-height: none;
    }

    .header .menu-icon {
      display: none;
    }
  }
}
</style>
