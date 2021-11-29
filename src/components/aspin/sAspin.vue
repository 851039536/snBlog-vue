<script lang="ts" setup>
import { h } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue'
import { resData } from './data'

const indicator = h(LoadingOutlined, {
  style: {
    fontSize: '24px'
  },
  spin: true
})
</script>
<template>
  <div class="aspin_main" v-show="resData.show">
    <a-spin :spinning="true" size="large" tip="Load" :indicator="indicator" />
  </div>
</template>

<style lang="scss" scoped>
.aspin_main {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;
  width: 200px;
}
</style>
