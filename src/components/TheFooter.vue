<script lang="ts" setup></script>
<template>
  <div class="fixed bottom-[50%] left-0 rounded">
    <div class="test">
      <div i-fxemoji-downpointingredtriangle></div>
      <div class="test-cont">
        <div>博客园</div>
        <div>Gitee</div>
        <div>Github</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test:hover {
  .test-cont {
    display: inline;
  }
}

/* 隐藏焦点状态 */
.test-cont {
  display: none;
}
</style>
