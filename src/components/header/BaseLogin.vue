<script lang="ts" setup>
import { loginVisible } from '@/utils/common/visible-data'
import { removeUserStorage, userInfo } from '@/utils/user/user-info'
import { UserApi } from '@/api'
import { storage } from '@/utils/storage/storage'
const userName = ref('')
const userPwd = ref('')

function login() {
  UserApi.login(userName.value, userPwd.value).then(r => {
    const ret = r.data

    removeUserStorage()
    storage.set(userInfo.ROLE, ret.nickname) // 角色名
    storage.set(userInfo.TOKEN, `Bearer ${ret.token}`) // token
    storage.set(userInfo.ID, ret.id) // 用户主键
    storage.set(userInfo.NAME, ret.name) // 用户名

    location.reload()
  })
}
</script>
<template>
  <c-modal-dialog :visible="loginVisible" title="Login" @close-model="loginVisible = false">
    <form class="base-login">
      <p class="form-title">博客登录</p>
      <div class="input-container">
        <input v-model="userName" type="text" placeholder="用户名" />
        <span></span>
      </div>
      <div class="input-container">
        <input v-model="userPwd" type="password" placeholder="密码" />
      </div>
      <div class="submit" @click="login">Sign in</div>

      <p class="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
    </form>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.base-login {
  display: block;
  max-width: 350px;
}

.form-title {
  color: #000;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
}

.input-container {
  position: relative;
}

.input-container input,
.base-login button {
  margin: 7px 0;
  border: 1px solid #e5e7eb;
  outline: none;
}

.input-container input {
  width: 300px;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}

.submit {
  display: block;
  color: #fff;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  background-color: #4f46e5;
  border-radius: 0.5rem;

  @apply text-center p-3 w-full my-1;
}

.signup-link {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}
</style>
