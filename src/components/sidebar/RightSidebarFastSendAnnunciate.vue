<script lang="ts" setup>
import { useUserTalkApi } from '@/hooks/http'
import { userTalk } from '@api/model/UserTalk'
import { useUserInfo } from '@/hooks/useUserInfo'
import { uiSettings } from '@/store/modules/uiSettings'
import { message } from 'ant-design-vue'
import { ident } from './index'
const { getUserId } = useUserInfo()
const { addUserTalk } = useUserTalkApi()
//
const ui = uiSettings()
async function createPost() {
  if (ident.value === 1) {
    userTalk.userId = getUserId() as number
    const ret = await addUserTalk(userTalk)
    if (ret.data.statusCode === 200) {
      message.success(ret.data.message)
      ui.rightSidebarFastSend = false
      userTalk.text = ''
      location.reload()
    } else message.error(ret.data.message)
  }
}
</script>
<template>
  <div class="post w-500px">
    <div mb="3" p="1" text="base">发点新鲜事</div>
    <form v-if="ident === 1" @submit.prevent="createPost">
      <textarea id="content" v-model="userTalk.text" rows="8"></textarea>
      <button type="submit">发布</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.post {
  margin: 0 auto;
}

.post form label {
  display: block;
  margin-bottom: 2px;
  font-size: 16px;
}

.post form input[type='text'],
.post form textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.post form button[type='submit'] {
  display: block;
  margin: 0 auto;
  padding: 5px 18px;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  background-color: #536cdd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.post form button[type='submit']:hover {
  background-color: #3e95cf;
}
</style>
