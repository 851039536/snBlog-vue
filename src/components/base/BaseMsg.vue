<!-- 封装消息提示插件 -->
<template>
  <Transition
    enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__bounceOutRight">
    <div v-if="isShow" class="message">{{ tipText }}</div>
  </Transition>
</template>

<script setup lang="ts">
let isShow = ref<boolean>(false)
let tipText = ref<string | number>('默认提示内容')
const show = (str: string | number, time = 3000) => {
  tipText.value = str
  isShow.value = true
  // 2 秒后自动关闭
  setTimeout(() => {
    isShow.value = false
  }, time)
}
const hide = () => {
  return (isShow.value = false)
}
// 将组件内部的方法导出，方便外部访问
defineExpose({
  show,
  hide
})
</script>

<style lang="less" scoped>
.message {
  position: fixed;
  top: 1px;
  right: 1px;
  z-index: 9999;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  background-color: rgb(200 217 217 / 90%);
  border-radius: 5px;
}
</style>
