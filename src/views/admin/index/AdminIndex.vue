<script lang="ts" setup>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
import { nextTick, provide, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
import { Routers } from '@/hooks/routers'
import { storage } from '@/utils/storage/storage'
import { navName } from '../utils/data'

const store = useStore()
function zx() {
  storage.remove('token')
  if (storage.get('token') === 'token') {
    // message.info('注销成功')

    console.log('%c [ 注销成功 ]', 'font-size:13px; background:pink; color:#bf2c9f;')
    Routers('/Login')
  }
}
const handleClick = (e: any) => {
  message.info(e.key)
  switch (e.key) {
    case '1-1':
      Routers('/Admin-index/ArticleTable')
      break
    case '1-2':
      Routers('/Admin-index/LabelTable')
      break
    case '2-1':
      Routers('/Admin-index/NavTable')
      break
    case '3-1':
      Routers('/Admin-index/PageSet')
      break
    default:
      Routers('/Admin-index/ArticleTable')
      break
  }
}

const state = reactive({
  showRouter: true
})
function reload() {
  state.showRouter = false
  nextTick(() => {
    state.showRouter = true
  })
}
provide('reload', reload)
</script>
<template>
  <div class="admin_index animate__animated animate__fadeIn">
    <a-layout>
      <header class="header">
        <a href="" class="logo">控制台</a>
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a href="https://www.cnblogs.com/ouyangkai/">博客园</a></li>

          <li><a href="#careers" @click="Routers('/Blogs/BlogsColumn')">主页</a></li>
          <li><a href="#about" @click="zx()">注销</a></li>
          <li>
            <a href="#contact"
              ><a-avatar>{{ store.state.Roles }}</a-avatar></a
            >
          </li>
        </ul>
      </header>

      <a-layout>
        <a-layout-sider breakpoint="lg" collapsed-width="0" width="200" style="background: #fff">
          <a-menu mode="inline" @click="handleClick" :style="{ height: '100%', borderRight: 0 }">
            <a-sub-menu key="article">
              <template #title>
                <span>
                  <user-outlined />
                  文章展示
                </span>
              </template>
              <a-menu-item key="1-1">文章列表</a-menu-item>
              <a-menu-item key="1-2">标签</a-menu-item>
              <a-menu-item key="1-3">类别</a-menu-item>
              <a-menu-item key="1-4">Login</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  内容分享
                </span>
              </template>
              <a-menu-item key="2-1">导航列表</a-menu-item>
              <a-menu-item key="2-2">标签</a-menu-item>
              <a-menu-item key="2-3">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                  设置
                </span>
              </template>
              <a-menu-item key="3-1">页面设置</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>

        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>{{ navName.name }}</a-breadcrumb-item>
            <a-breadcrumb-item>{{ navName.name2 }}</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '24px',
              margin: 0,
              minHeight: '95%'
            }"
          >
            <!-- 子路由 -->
            <router-view v-if="state.showRouter" class="animate__animated animate__fadeIn"></router-view>
            <!-- end 子路由 -->
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.admin_index {
  @apply fixed w-full h-full;

  z-index: 10;

  @apply bg-gray-100;

  /* header */

  .header {
    // position: fixed;
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .header ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    background-color: #fff;
  }

  .header li a {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
    border-right: 1px solid #f4f4f4;
  }

  .header .logo {
    display: block;
    float: left;
    padding: 10px 20px;
    font-size: 2em;
    text-decoration: none;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .header .menu-icon {
    position: relative;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    cursor: pointer;
    user-select: none;
  }

  .header .menu-icon .navicon {
    position: relative;
    display: block;
    width: 18px;
    height: 2px;
    background: #333;
    transition: background 0.2s ease-out;
  }

  .header .menu-icon .navicon::before,
  .header .menu-icon .navicon::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #333;
    transition: all 0.2s ease-out;
    content: '';
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
