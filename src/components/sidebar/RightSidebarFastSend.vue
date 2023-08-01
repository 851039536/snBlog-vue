<script setup lang="ts">
import { useUiSetStore } from '@store/modules/uiSettings'
import { ident } from './data'
import { userTalk } from '@hooksHttp/model/UserTalk'
import { useUserTalkApi } from '@hooksHttp/index'
import { useUserInfo } from '@hooks/useUserInfo'
import { message } from 'ant-design-vue'
const { getUserId } = useUserInfo()
const { addUserTalk } = useUserTalkApi()
const ui = useUiSetStore()
const sendTitle = ref('')
const title = ref('')
const content = ref('')

async function createPost() {
  // 清空表单
  // title.value = ''
  // content.value = ''

  if (ident.value === 1) {
    userTalk.userId = getUserId() as number
    const ret = await addUserTalk(userTalk)
    if (ret.data.data) {
      message.success('发布成功')
      ui.rightSidebarFastSend = false
      location.reload()
    } else message.error('发布失败')
  }
}
//组件更新之前执行的函数。
onBeforeUpdate(() => {
  switch (ident.value) {
    case 1:
      sendTitle.value = '发公告'
      break
    case 2:
      sendTitle.value = '发文章'
      break
    case 3:
      sendTitle.value = '发动态'
      break
    case 4:
      sendTitle.value = '发片段'
      break
    default:
      break
  }
})
</script>

<template>
  <c-modal-dialog :visible="ui.rightSidebarFastSend" :title="sendTitle" @close-model="ui.rightSidebarFastSend = false">
    <div class="post">
      <form v-if="ident === 1" @submit.prevent="createPost">
        <textarea id="content" v-model="userTalk.text" rows="8"></textarea>
        <button type="submit">发布</button>
      </form>
      <form v-if="ident === 2" @submit.prevent="createPost">
        <label for="title">标题:</label>
        <input id="title" v-model="title" type="text" />
        <label for="content">内容:</label>
        <textarea id="content" v-model="content" rows="10"></textarea>
        <button type="submit">发布</button>
      </form>
    </div>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.post {
  width: 500px;
  margin: 0 auto;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
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
