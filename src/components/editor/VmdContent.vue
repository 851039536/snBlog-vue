<script setup lang="ts">
import { onBeforeUpdate, reactive } from 'vue'

// v-model 不能直接修改
const props = defineProps<{
  result: any
  loading?: boolean
}>()

const state = reactive({
  result: props.result
})
// 在更新之前赋值
onBeforeUpdate(async () => {
  state.result = props.result
})
</script>
<template>
  <div class="vmdcontent">
    <a-skeleton :loading="loading" :paragraph="{ rows: 15 }" active />
    <v-md-editor v-model="state.result" mode="preview"></v-md-editor>
  </div>
</template>

<style lang="scss" scoped>
.vmdcontent {
  @apply bg-white mt-6;
}
</style>
