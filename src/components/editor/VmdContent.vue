<script setup lang="ts">
// v-model 不能直接修改
const props = defineProps<{
  result: any
}>()

const result = ref(props.result)
// 在更新之前赋值
onBeforeUpdate(() => {
  result.value = props.result
})
</script>
<template>
  <div>
    <v-md-editor v-model="result" mode="preview"></v-md-editor>
  </div>
</template>

<style lang="scss" scoped>
div {
  @apply bg-white mt-6;
}
</style>
