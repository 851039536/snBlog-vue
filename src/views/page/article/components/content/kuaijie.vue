<template>
  <div class="post">
    <h1>发布文章</h1>
    <form @submit.prevent="createPost">
      <label for="title">标题:</label>
      <input id="title" v-model="title" type="text" />
      <label for="content">内容:</label>
      <textarea id="content" v-model="content"></textarea>
      <button type="submit">发布文章</button>
    </form>
  </div>
</template>

<script setup lang="ts">
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

createPost
</script>

<style scoped>
.post {
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

.post h1 {
  font-weight: bold;
  font-size: 28px;
  text-align: center;
}

.post form label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

/* stylelint-disable-next-line string-quotes */
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

/* stylelint-disable-next-line string-quotes */
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

/* stylelint-disable-next-line string-quotes */
.post form button[type='submit']:hover {
  background-color: #3e8e41;
}
</style>
