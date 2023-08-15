<script lang="ts" setup>
import { useRouter } from '@hooks/useRouter'
import { useUserInfo } from '@hooks/useUserInfo'
import { rRouter } from '@/router/routerInfo'
import userSvg from '@assets/svg/components/user.svg?component'
import { InterfaceApi } from '@/api'
import { useUiSetStore } from '@store/modules/uiSettings'
const { routers } = useRouter()
const { removeUserStorage, getUserName } = useUserInfo()
const ui = useUiSetStore()
const rData: any = ref([])
const isVisible = ref(false)

async function skip(path: string) {
  switch (path) {
    case 'code':
      isVisible.value = true
      break
    case 'home':
      await routers(path)
      break
    case '/Photo':
      await routers(path)
      break
    default:
      await routers('home')
      break
  }
}
async function onChange(id: number) {
  switch (id) {
    case 1:
      await routers(rRouter.articleTable)
      break
    case 2:
      removeUserStorage()
      location.reload()
      break
    case 3:
      ui.loginUi = true
      break
    default:
      break
  }
}
const removeEscKey = (e: any) => {
  //escape
  if (e.key === 'Escape') {
    window.removeEventListener('keyup', removeEscKey)
    isVisible.value = false
  }
}
const addSnippet = () => {
  window.addEventListener('keyup', removeEscKey)
  isVisible.value = true
}

onMounted(async () => {
  const conditions = await InterfaceApi.getCondition(0, getUserName(), 'header', false)
  const data = await conditions.data.data
  rData.value = data
})
</script>
<template>
  <nav v-show="ui.header" class="head">
    <div class="h-cont">
      <div class="h-cont-l">
        <div>
          <div i-fxemoji-alien mx-1></div>
          <span>SN BLOG</span>
        </div>
        <div class="head-l-text">
          <div v-for="r in rData" :key="r.id">
            <div v-if="r.identity" @click="skip(r.path)">{{ r.name }}</div>
          </div>
          <div>
            <div>圈子</div>
          </div>
          <div>
            <div @click="addSnippet()">code</div>
            <div class="mt-1" i-flat-color-icons-search h-6 w-6></div>
          </div>
        </div>
      </div>
      <div class="head-cont-r">
        <div class="head-r-div">
          <span v-if="getUserName() === 'name'" v-once @click="onChange(3)">登录</span>
          <div v-else>
            <a-popover placement="bottomRight">
              <template #content>
                <div class="mb-1 cursor-pointer text-center hover:text-blue-400" @click="onChange(1)">后台管理</div>
                <div class="cursor-pointer text-center hover:text-blue-400" @click="onChange(2)">退出登录</div>
              </template>
              <template #title>
                <div class="flex">
                  <div class="mr-2 mt-11px"><user-svg></user-svg></div>
                  <div class="m-1">
                    <div>少年</div>
                    <div class="w-30 text-cool-gray-500">西伯利亚平原尽头</div>
                  </div>
                </div>
              </template>
              <user-svg></user-svg>
            </a-popover>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <modal-snippet :visible="isVisible" @close-model="isVisible = false">
    <snippet-content></snippet-content>
  </modal-snippet>
</template>

<style lang="scss" scoped>
.head {
  @apply flex h-7vh w-full top-0 left-0 z-50 relative;
  @apply bg-white shadow-sm px-3;

  .h-cont {
    @apply w-full inline-flex;

    .h-cont-l {
      @apply flex h-full w-[50%];

      div {
        @apply flex text-2xl items-center;
      }

      .head-l-text {
        @apply flex m-1 p-1 items-center;

        div {
          @apply cursor-pointer ml-1 text-xl hover:text-blue-400;
        }
      }
    }

    .head-cont-r {
      @apply flex h-full text-xl w-[50%] justify-end;

      .head-r-div {
        @apply flex items-center;

        span {
          @apply cursor-pointer m-1 hover:text-blue-400;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .head {
    @apply w-full left-0;

    .h-cont .h-cont-l {
      @apply w-[75%];

      .head-l-text {
        display: none;
      }
    }
  }
}
</style>
