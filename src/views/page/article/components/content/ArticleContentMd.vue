<script setup lang="ts">
// v-model 不能直接修改
const props = defineProps<{
  result: String
}>()

const result = ref(props.result)
// 在更新之前赋值
onBeforeUpdate(() => {
  result.value = props.result
})
</script>
<template>
  <v-md-editor v-model="result" mode="preview"></v-md-editor>
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line string-quotes */
// @import '../../../../../design/md-sm';

div {
  @apply bg-white;
}
</style>
