<script setup lang="ts">
import { message } from 'ant-design-vue/es/components'
import { useAppStore } from '@/store/pinia'
import { routers } from '@/hooks/routers'
import { user } from '@/api/index'
import { storage } from '@/utils/storage/storage'
import { isToken, removeStorage } from '@/hooks/commonly'

const store = useAppStore()
const state = reactive({
  name: '',
  pwd: '',
  result: []
})
function login() {
  user.Login(state.name, state.pwd).then((res) => {
    if (['用户或密码错误', '用户密码不能为空'].includes(res.data)) {
      message.error(res.data)
      return
    }
    state.result = res.data.split(',')
    removeStorage()
    storage.set('rolres', state.result[0]) // 角色名
    storage.set('id', state.result[2]) // 用户主键
    storage.set('user', state.result[3]) // 用户名
    storage.set('token', `Bearer ${state.result[1]}`) // token
    store.roles = storage.get('rolres')
    message.success('登录成功')
    routers('/Admin-index/ArticleTable')
  })
}
onMounted(async () => {
  await isToken()
})
</script>
<template>
  <div class="login-box">
    <form class="login">
      <p>Login</p>
      <input type="text" v-model="state.name" placeholder="用户名" />
      <input type="password" v-model="state.pwd" placeholder="密码" />
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

  /* 下面的会覆盖上面的步伐 */
  outline: none;
}

.btn {
  @apply text-xl w-[38%];
}

.btn:hover {
  background-color: #13e269;
}

.login-box {
  @apply top-0 left-0 fixed;

  width: 100%;
  height: 100%;

  // background: url(../../../assets/img/login/wallpaper.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
