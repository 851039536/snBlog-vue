<script lang="ts" setup>
import { userForm } from '@api/model/UserModel'
import { message } from 'ant-design-vue'
import { aData } from '../data'
import { editVisible, addDisabled, upDisabled } from './data'
import { useApi } from '@/api/useApi'

const { UserApi } = useApi()
const reload: any = inject('reload')
const Update = async () => {
  console.log('[ userForm ]-12', userForm)
  await UserApi.update(userForm).then(ret => {
    console.log('[ ret ]-12', ret.data)
    if (ret.data.data) {
      reload()
      editVisible.value = false
      message.success(aData.SUCCESS)
      return
    }
    message.error(aData.FAIL)
  })
}

const Add = async () => {
  await UserApi.add(userForm).then(ret => {
    if (ret.data.data === 1) {
      reload()
      editVisible.value = false
      message.success(aData.SUCCESS)
      return
    }
    message.error(aData.FAIL)
  })
}
</script>
<template>
  <a-modal
    v-model:visible="editVisible"
    :footer="null"
    :mask="false"
    title="编辑"
    :centered="true"
    wrap-class-name="full-modal"
    :z-index="10"
    :mask-closable="false">
    <div class="cont">
      <div>
        <a-input v-model:value="userForm.id" :disabled="true" prefix="主键:" size="large" />
      </div>
      <div><a-input v-model:value="userForm.ip" prefix="IP:" size="large" /></div>
      <div><a-input v-model:value="userForm.name" prefix="用户:" size="large" /></div>
      <div><a-input v-model:value="userForm.pwd" prefix="密码:" size="large" /></div>
      <div><a-input v-model:value="userForm.email" prefix="邮箱:" size="large" /></div>
      <div><a-input v-model:value="userForm.photo" prefix="photo:" size="large" /></div>
      <div><a-input v-model:value="userForm.nickname" prefix="昵称:" size="large" /></div>
      <div><a-input v-model:value="userForm.brief" prefix="brief:" size="large" /></div>
    </div>
    <div class="mt-5">
      <a-button :disabled="addDisabled" size="large" @click="Add">注册</a-button>
      <a-button :disabled="upDisabled" size="large" @click="Update">更新</a-button>
    </div>
  </a-modal>
</template>

<style lang="scss" scoped>
.cont {
  @apply;

  div {
    @apply m-1;
  }
}
</style>
@/api/model/UserModel
