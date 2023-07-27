<script setup lang="ts">
import { message } from 'ant-design-vue/es/components'
import { UserApi } from '@/api/index'
// import { storage } from '@/utils/storage/storage'
import { rRouter } from '@/router/routerInfo'
import { useUiSetStore } from '@store/modules/uiSettings'
import { useRouter } from '@hooks/useRouter'
import { useUserInfo } from '@hooks/useUserInfo'
const { isToken, setUserInfo } = useUserInfo()
const { routers } = useRouter()
const ui = useUiSetStore()
const state = reactive({
  name: '',
  pwd: ''
})
function login() {
  UserApi.login(state.name, state.pwd).then(res => {
    const ret = res.data
    setUserInfo(ret.nickname, ret.token, ret.id, ret.name)
    message.success('登录成功')
    routers(rRouter.articleTable)
  })
}
onMounted(async () => {
  ui.uiHeadVisible = false
  ui.uiLeftVisible = false
  await isToken()
})
</script>
<template>
  <div class="login-box">
    <form class="login">
      <p>博客后台</p>
      <input v-model="state.name" type="text" placeholder="用户名" />
      <input v-model="state.pwd" type="password" placeholder="密码" />
      <span class="btn" @click="login">登 录</span>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  padding: 5px 40px;
  text-align: center;
  background-color: #fff;
  border-radius: 25px;
}

p {
  font-weight: 600;
  font-size: 42px;
}

input {
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
  @apply text-xl w-[38%] p-2;
  @apply cursor-pointer shadow rounded;
}

.login-box {
  @apply top-0 left-0 fixed;

  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
}
</style>
@/router/routerInfo
