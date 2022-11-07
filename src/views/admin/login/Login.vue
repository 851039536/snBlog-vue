<script setup lang="ts">
import { message } from 'ant-design-vue/es/components'
import { useAppStore } from '@/store/pinia'
import { routers } from '@/hooks/routers'
import { user } from '@/api/index'
import { storage } from '@/utils/storage/storage'
import { hUser, isToken, ClearUser } from '@/hooks/commonly'
import { rRouter } from '@/router/data'

const store = useAppStore()
const state = reactive({
  name: '',
  pwd: '',
  res: []
})
function login() {
  user.Login(state.name, state.pwd).then(res => {
    if (['用户或密码错误', '用户密码不能为空'].includes(res.data)) {
      message.error(res.data)
      return
    }
    state.res = res.data.split(',')
    ClearUser()
    storage.set(hUser.ROLE, state.res[0]) // 角色名
    storage.set(hUser.ID, state.res[2]) // 用户主键
    storage.set(hUser.NAME, state.res[3]) // 用户名
    storage.set(hUser.TOKEN, `Bearer ${state.res[1]}`) // token
    store.roles = storage.get(hUser.ROLE)
    message.success('登录成功')
    routers(rRouter.articleTable)
  })
}
onMounted(async () => {
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

  /* absolute居中的一种方法 */
  background-color: #fff;
  border-radius: 25px;

  /* 这样padding就不会影响大小 */
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
