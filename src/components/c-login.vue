<script lang="ts" setup>
import { userApi } from '@/api'
import { ClearUser, hUser } from '@/hooks/commonly'
import { hLogin } from '@/hooks/data'
import { useAppStore } from '@/store/pinia'
import { storage } from '@/utils/storage/storage'
import { message } from 'ant-design-vue'
const name = ref('')
const pwd = ref('')
const rData = ref([])
const store = useAppStore()
function login() {
  userApi.Login(name.value, pwd.value).then(res => {
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
onMounted(async () => {
  // await isToken()
})
</script>
<template>
  <a-modal
    v-model:visible="hLogin"
    :footer="null"
    :mask="false"
    title="login"
    :centered="true"
    width="20%"
    wrap-class-name="full-modal"
    :z-index="10"
    :mask-closable="false">
    <form class="login">
      <p>用户登录</p>
      <input v-model="name" type="text" placeholder="用户名" />
      <input v-model="pwd" type="password" placeholder="密码" />
      <span class="btn" @click="login">登 录</span>
    </form>
  </a-modal>
</template>

<style lang="scss" scoped>
.login {
  text-align: center;

  p {
    @apply text-2xl;
  }
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
  @apply text-xl p-2;
  @apply cursor-pointer hover:text-blue-400;
}
</style>
