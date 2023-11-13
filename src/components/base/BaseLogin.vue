<script lang="ts" setup>
import { useUserInfo } from '@hooks/useUserInfo'
import { uiSettings } from '@store/modules/uiSettings'
import { useApi } from '@/api/useApi'

const { UserApi } = useApi()
const { setUserInfo } = useUserInfo()
const ui = uiSettings()
const userName = ref('')
const userPwd = ref('')

function login() {
  UserApi.login(userName.value, userPwd.value).then(r => {
    const ret = r.data
    setUserInfo(ret.nickname, ret.token, ret.id, ret.name)
    ui.loginUi = false
    location.reload()
  })
}
</script>
<template>
  <c-modal-dialog :visible="ui.loginUi" title="" @close-model="ui.loginUi = false">
    <form class="base-login">
      <p class="form-title">snBlog</p>
      <div class="input-container">
        <input v-model="userName" type="text" placeholder="用户名" />
        <span></span>
      </div>
      <div class="input-container">
        <input v-model="userPwd" type="password" placeholder="密码" />
      </div>
      <div class="submit cursor-pointer" @click="login">Sign in</div>

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
  font-size: 1.65rem;
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
  padding: 1rem 3rem 1rem 1rem;
  font-size: 1.1rem;
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
