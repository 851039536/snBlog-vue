<script lang="ts" setup>
import { removeUserStorage, userInfo } from '@/utils/user/user-info'
import { storage } from '@/utils/storage/storage'
import { routers } from '@/utils/route'
import { rRouter } from '@/router/route-Info'
import uservg from '@assets/svg/components/user.svg?component'
import { headVisible, loginVisible, sideIndex } from '@/utils/common/visible-data'
import { InterfaceApi } from '@/api'
const rData: any = ref([])
const isVisible = ref(false)

async function skip(path: string) {
  sideIndex.value = -1
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
      loginVisible.value = true
      break
    default:
      break
  }
}

onMounted(async () => {
  const conditions = await InterfaceApi.getCondition(0, storage.get(userInfo.NAME), 'header', false)
  const data = await conditions.data.data
  rData.value = data
})
</script>
<template>
  <nav v-show="headVisible" class="head">
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
            <div>导航</div>
          </div>
          <div>
            <div>圈子</div>
          </div>
          <div>
            <div @click="isVisible = true">code</div>
          </div>
          <div>
            <div class="mt-1" i-flat-color-icons-search h-6 w-6></div>
          </div>
        </div>
      </div>
      <div class="head-cont-r">
        <div class="head-r-div">
          <span v-if="storage.get(userInfo.NAME) === userInfo.NAME" v-once @click="onChange(3)">登录</span>
          <div v-else>
            <a-popover placement="bottomRight">
              <template #content>
                <div class="mb-1 cursor-pointer text-center hover:text-blue-400" @click="onChange(1)">后台管理</div>
                <div class="cursor-pointer text-center hover:text-blue-400" @click="onChange(2)">退出登录</div>
              </template>
              <template #title>
                <div class="flex">
                  <div class="mr-2 mt-11px"><uservg></uservg></div>
                  <div class="m-1">
                    <div>少年</div>
                    <div class="w-30 text-cool-gray-500">西伯利亚平原尽头</div>
                  </div>
                </div>
              </template>
              <uservg></uservg>
            </a-popover>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <base-login></base-login>

  <modal-snippet :visible="isVisible" @close-model="isVisible = false">
    <snippet-content></snippet-content>
  </modal-snippet>
</template>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  padding: 10px 15px;
  border: 1.2px solid #c0c4cc;
  border-radius: 5px;

  &:focus {
    border-color: #f07b00;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(218 150 150 / 7.5%), #f07b00;
  }

  @apply w-full h-full;
}

.head {
  @apply flex h-71px w-full top-0 left-0 z-50 fixed;
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
