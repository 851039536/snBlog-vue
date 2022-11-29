<script setup lang="ts">
withDefaults(
  defineProps<{
    hText?: string //需要高亮文本
    text?: string //原本文本
    color?: string //高亮颜色
  }>(),
  { hText: '', text: '', color: '#409EFF' }
)

function brightenKeyword(hText: string, text: string, color: string) {
  if (text) {
    /**
     * 全局匹配、不区分大小写
     */
    const Reg = new RegExp(eacapeReg(hText), 'gi')
    return text.replace(Reg, function ($1) {
      return `<span style="color: ${color};">${hText === $1 ? hText : $1}</span>`
    })
  }
}

/**
 * 将 \ . ( ) 等等字符前面都加上 \
 * @param val string
 * @returns string
 */
function eacapeReg(val: string): string {
  return val
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\./g, '\\.')
    .replace(/\+/g, '\\+')
    .replace(/\*/g, '\\*')
    .replace(/\$/g, '\\$')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\^/g, '\\^')
    .replace(/\|/g, '\\|')
    .replace(/\-/g, '\\-')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\?/g, '\\?')
    .replace(/\!/g, '\\!')
    .replace(/\,/g, '\\,')
}
</script>

<template>
  <div v-html="brightenKeyword(hText, text, color)"></div>
</template>
