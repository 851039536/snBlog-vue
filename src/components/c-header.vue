<script lang="ts" setup>
import { ClearUser, hUser } from '@/hooks/commonly'
import { storage } from '@/utils/storage/storage'
import { routers } from '@/hooks/routers'
import { rRouter } from '@/router/data'
import uservg from '@assets/svg/components/user.svg?component'
import { hHead, hLogin, sideIndex } from '@/hooks/data'
import { interfacesApi, userApi } from '@/api'
import { message } from 'ant-design-vue'
import { useAppStore } from '@/store/pinia'
const rName = ref('')
const pwd = ref('')
const store = useAppStore()
const rData: any = ref([])
const isVisible = ref(false)

const scroll = () => {
  // 滚动条高度
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  // 可视区的高度
  const { clientHeight } = document.documentElement
  if (scrollTop > clientHeight) {
    hHead.value = false
  } else {
    hHead.value = true
  }
}
async function GetType() {
  await interfacesApi.GetType(0, storage.get(hUser.NAME), 'header', false).then((res: any) => {
    rData.value = res.data
  })
}
async function skip(num: string) {
  sideIndex.value = -1
  switch (num) {
    case 'code':
      isVisible.value = true
      break
    default:
      await routers(num)
      break
  }
}
async function onChange(id: number) {
  switch (id) {
    case 1:
      await routers(rRouter.articleTable)
      break
    case 2:
      ClearUser()
      location.reload()
      break
    case 3:
      hLogin.value = true
      break
    default:
      break
  }
}
function login() {
  userApi.Login(rName.value, pwd.value).then(res => {
    if (['用户或密码错误', '用户密码不能为空'].includes(res.data)) {
      message.error(res.data)
      return
    }
    rData.value = res.data.split(',')
    ClearUser()
    storage.set(hUser.ROLE, rData.value[0]) // 角色名
    storage.set(hUser.ID, rData.value[2]) // 用户主键
    storage.set(hUser.NAME, rData.value[3]) // 用户名
    storage.set(hUser.TOKEN, `Bearer ${rData.value[1]}`) // token
    store.roles = storage.get(hUser.ROLE)
    location.reload()
  })
}

onDeactivated(() => {
  // 离开这个界面之后，删除，不然会有问题
  window.removeEventListener('scroll', scroll)
})
onMounted(async () => {
  await GetType()
  // 给window添加一个滚动监听事件
  window.addEventListener('scroll', scroll)
})
</script>
<template>
  <nav v-show="hHead" class="head">
    <div class="h-cont">
      <div class="h-cont-l">
        <div class="">
          <div i-fxemoji-alien mx-1></div>
          <span>SN BLOG</span>
        </div>
        <div class="head-l-text">
          <div v-for="res in rData" :key="res.id">
            <div v-if="res.identity" @click="skip(res.path)">{{ res.title }}</div>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="head-cont-r">
        <div class="head-r-div">
          <span v-if="storage.get(hUser.NAME) === hUser.NAME" v-once @click="onChange(3)">登录</span>
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

  <c-modal-dialog :visible="hLogin" title="Login" @close-model="hLogin = false">
    <template #loginModel>
      <form class="login">
        <p>用户登录</p>
        <input v-model="rName" class="login-put" type="text" placeholder="用户名" autocomplete="off" />
        <input v-model="pwd" autocomplete="off" class="login-put" type="password" placeholder="密码" />
        <div class="btn" @click="login">登 录</div>
      </form>
    </template>
  </c-modal-dialog>

  <c-modal-snippet :visible="isVisible" @close-model="isVisible = false">
    <template #snippetModel>
      <SnippetContent></SnippetContent>
    </template>
  </c-modal-snippet>
</template>

<style lang="scss" scoped>
.login {
  text-align: center;

  @apply w-400px;

  p {
    @apply text-2xl;
  }
}

.login-put {
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  font-size: 22px;
  background-color: #fff;
  border: none;
  border-bottom: 2px solid rgb(95 90 90);

  // @apply mb-5;

  /* 下面的会覆盖上面的步伐 */
  outline: none;

  @apply cursor-pointer;
}

.btn {
  @apply text-2xl p-2 mt-4 rounded shadow-sm;
  @apply cursor-pointer  hover:bg-slate-500 hover:text-white;
}

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

        div {
          @apply cursor-pointer ml-1 text-2xl hover:text-blue-400;
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

// @screen <lg {
// .head {
//   @apply w-full left-0;

//   .h-cont .h-cont-l {
//     @apply w-[75%];
//   }
// }

// }

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
