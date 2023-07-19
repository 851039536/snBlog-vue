<template>
  <c-modal-dialog :visible="ui.articleFastVisible" title="快捷发文" @close-model="ui.articleFastVisible = false">
    <div class="post">
      <form @submit.prevent="createPost">
        <label for="title">标题:</label>
        <input id="title" v-model="title" type="text" />
        <label for="content">内容:</label>
        <textarea id="content" v-model="content"></textarea>
        <button type="submit">发布文章</button>
      </form>
    </div>
  </c-modal-dialog>
</template>

<script setup lang="ts">
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
const title = ref('')
const content = ref('')

function createPost() {
  // 这里可以添加请求或提交数据等具体逻辑
  console.log('标题：', title.value)
  console.log('内容：', content.value)

  // 清空表单
  title.value = ''
  content.value = ''
}
</script>

<style lang="scss" scoped>
.post form label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

.post form input[type='text'],
.post form textarea {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.post form button[type='submit'] {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.post form button[type='submit']:hover {
  background-color: #3e8e41;
}
</style>
