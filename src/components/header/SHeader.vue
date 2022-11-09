<script lang="ts" setup>
import { ClearUser, hUser } from '@/hooks/commonly'
import { storage } from '@/utils/storage/storage'
import { rData, method } from './data/index'
import { routers } from '@/hooks/routers'
import { rRouter } from '@/router/data'
import uservg from '@assets/svg/components/user.svg?component'
const local = ref(true)
const scroll = () => {
  // 滚动条高度
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  // 可视区的高度
  const { clientHeight } = document.documentElement
  if (scrollTop > clientHeight) {
    local.value = false
  } else {
    local.value = true
  }
}

async function onChange(id: number) {
  switch (id) {
    case 1:
      await routers(rRouter.articleTable)
      break
    case 2:
      ClearUser()
      break
    default:
      break
  }
}

onDeactivated(() => {
  // 离开这个界面之后，删除，不然会有问题
  window.removeEventListener('scroll', scroll)
})
onMounted(async () => {
  await method.GetType()
  // 给window添加一个滚动监听事件
  window.addEventListener('scroll', scroll)
})
</script>
<template>
  <nav v-show="local" class="head">
    <div class="h-cont">
      <div class="h-cont-l">
        <div class="">
          <span>SN BLOG</span>
        </div>
        <div class="head-l-text">
          <div v-for="res in rData" :key="res.id">
            <span v-if="res.identity" @click="method.skip(res.path)">{{ res.title }}</span>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="head-cont-r">
        <div class="head-r-div">
          <span v-if="storage.get(hUser.NAME) === hUser.NAME" v-once @click="method.skip(14)">登录</span>
          <div v-else>
            <a-popover placement="bottomRight">
              <template #content>
                <div class="text-center mb-1 cursor-pointer hover:text-blue-400" @click="onChange(1)">后台管理</div>
                <div class="text-center cursor-pointer hover:text-blue-400" @click="onChange(2)">退出登录</div>
              </template>
              <template #title>
                <div class="flex">
                  <div class="mt-11px mr-2"><uservg></uservg></div>
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
</template>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  padding: 10px 15px;
  border: 1.2px solid #c0c4cc;
  border-radius: 5px;
  outline-style: none;

  &:focus {
    border-color: #f07b00;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 7.5%), #f07b00;
  }
}

.head {
  @apply flex h-70px w-full top-0 left-0 z-50 fixed;
  @apply bg-white shadow px-3;

  .h-cont {
    @apply w-full inline-flex;

    .h-cont-l {
      @apply flex h-full w-[50%];

      div {
        @apply flex text-2xl items-center;
      }

      .head-l-text {
        @apply flex m-1 p-1 items-center;

        span {
          @apply cursor-pointer m-1 text-xl p-1 hover: text-blue-400;
        }
      }
    }

    .head-cont-r {
      @apply flex h-full text-xl w-[50%] justify-end;

      .head-r-div {
        @apply flex items-center;

        span {
          @apply cursor-pointer m-1 hover: text-blue-400;
        }
      }
    }
  }
}

@screen <lg {
  .head {
    @apply w-full left-0;

    .h-cont .h-cont-l {
      @apply w-[75%];
    }
  }
}
</style>
