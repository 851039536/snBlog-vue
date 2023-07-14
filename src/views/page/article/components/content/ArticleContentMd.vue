<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'

// v-model 不能直接修改
const props = defineProps<{
  result: String
}>()

const ret: any = ref(props.result)
// 在更新之前赋值
onBeforeUpdate(() => {
  ret.value = props.result
})
</script>
<template>
  <MdPreview editor-id="preview-only" :model-value="ret" preview-theme="github" code-theme="gradient" />
</template>
