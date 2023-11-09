<script setup lang="ts">
import { useUiSetStore } from '@store/modules/uiSettings'

import QrcodeVue from 'qrcode.vue'
const ui = useUiSetStore()
const payUrl = ref('')
</script>

<template>
  <footer-modal :visible="ui.fToolsQR">
    <div>
      <div class="mb-1">
        <input v-model="payUrl" type="text" class="w-150" placeholder="输入要生成的数据" />
      </div>
      <div class="m-auto my-2 w-14"></div>
      <div class="m-auto my-2 w-14">二维码</div>
      <div v-if="payUrl === ''" class="m-a h-50 w-50 rounded bg-blue-50"></div>
      <div v-else class="m-a h-50 w-50 rounded"><qrcode-vue :value="payUrl" :size="200" level="H" /></div>
    </div>
  </footer-modal>
</template>
