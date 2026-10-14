<!-- 封装消息提示插件 -->
<template>
  <Transition name="msg-slide">
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

<style lang="scss" scoped>
/* 原使用的 animate.css（animate__bounceInRight/OutRight）并未安装，
   导致进出场动画失效，此处改用自带过渡实现同等效果 */
.msg-slide-enter-active,
.msg-slide-leave-active {
  transition: all 0.3s ease-out;
}

.msg-slide-enter-from,
.msg-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

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
