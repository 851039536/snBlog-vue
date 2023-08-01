<script lang="ts" setup>
import { navName } from './utils/data'
import { useUserInfo } from '@hooks/useUserInfo'
import { rRouter } from '@/router/routerInfo'
import uservg from '@assets/svg/components/user.svg?component'
import { useUiSetStore } from '@store/modules/uiSettings'
import { useRouter } from '@hooks/useRouter'
const { routers, winUrl } = useRouter()
const { removeUserStorage } = useUserInfo()
const uiSettings = useUiSetStore()
function clear() {
  removeUserStorage()
  location.reload()
}
const handleClick = (e: any) => {
  switch (e.key) {
    case '1-1':
      routers(rRouter.articleTable)
      break
    case '1-2':
      routers(rRouter.articleTagTable)
      break
    case '1-3':
      routers(rRouter.articleTypeTable)
      break
    case '2-1':
      routers(rRouter.navTable)
      break
    case '3-1':
      routers(rRouter.pageSet)
      break
    case '3-2':
      routers(rRouter.sqlBackups)
      break
    case '3-3':
      routers(rRouter.userTable)
      break
    case '4-1':
      routers(rRouter.snippetTable)
      break
    default:
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

onMounted(() => {
  uiSettings.loginVisible = false
  uiSettings.uiHeadVisible = false
  uiSettings.uiLeftVisible = false
})
</script>
<template>
  <div class="admin">
    <a-layout>
      <div class="mb-1 h-70px bg-white">
        <div class="float-left h-full flex items-center justify-center">
          <div class="ml-4 text-3xl">控制台</div>
        </div>
        <div class="float-right h-full flex items-center justify-center">
          <div class="mr-4">
            <a-popover placement="bottomRight">
              <template #content>
                <div class="mb-1 cursor-pointer text-center hover:text-blue-400" @click="winUrl('/article/column')">
                  主页
                </div>
                <div class="cursor-pointer text-center hover:text-blue-400" @click="clear()">退出登录</div>
              </template>
              <uservg></uservg>
            </a-popover>
          </div>
        </div>
      </div>
      <a-layout>
        <div class="mt-1">
          <a-layout-sider breakpoint="xl" collapsed-width="0" width="230">
            <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }" @click="handleClick">
              <a-sub-menu key="sub1">
                <template #title>
                  <div flex class="items-center">
                    <div i-fxemoji-bluebook mr-2 h-5 w-5></div>
                    <span>文章展示</span>
                  </div>
                </template>
                <a-menu-item key="1-1">文章管理</a-menu-item>
                <a-menu-item key="1-2">标签管理</a-menu-item>
                <a-menu-item key="1-3">类别管理</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <template #icon>
                  <div i-fxemoji-cookie h-5 w-5></div>
                </template>
                <template #title>
                  <span>内容导航</span>
                </template>
                <a-menu-item key="2-1">导航管理</a-menu-item>
                <a-menu-item key="2-2">标签管理</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <template #icon>
                  <div i-fxemoji-cookedrice h-5 w-5></div>
                </template>
                <template #title>
                  <span>代码片段</span>
                </template>
                <a-menu-item key="4-1">片段管理</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub3">
                <template #icon>
                  <div i-flat-color-icons-settings h-5 w-5></div>
                </template>
                <template #title>
                  <span>设置</span>
                </template>
                <a-menu-item key="3-1">页面设置</a-menu-item>
                <a-menu-item key="3-2">SQL备份</a-menu-item>
                <a-menu-item key="3-3">用户管理</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
        </div>

        <a-layout style="padding: 0 12px 12px">
          <a-breadcrumb style="margin: 14px 0">
            <a-breadcrumb-item>{{ navName.name }}</a-breadcrumb-item>
            <a-breadcrumb-item>{{ navName.name2 }}</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '10px',
              margin: 0,
              minHeight: '98%'
            }">
            <router-view v-if="showRouter"></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  @apply h-full w-full z-10 fixed top-0 left-0;
  @apply bg-gray-100;
}
</style>
