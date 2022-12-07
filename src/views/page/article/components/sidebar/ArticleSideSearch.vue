<script lang="ts" setup>
import { articleApi } from '@/api'
import { winUrl } from '@/hooks/routers'
import { rArticle, rSearchName } from '../../data'

//自定义函数，父组件可以触发
async function search() {
  rArticle.value = await (await articleApi.GetContains(0, 'null', rSearchName.value, false)).data
}
</script>
<template>
  <div class="m-1">
    <input
      v-model="rSearchName"
      v-focus
      class="rounded h-10 w-full text-xl outline-none border-0 bg-gray-200"
      placeholder="搜索1..."
      @input="search()" />
  </div>
  <div class="h-full overflow-auto">
    <div
      v-for="res in rArticle"
      :key="res.id"
      class="bg-slate-50 p-2 m-1 rounded hover:bg-blue-400 hover:text-white shadow-sm">
      <div class="text-lg flex items-center">
        <div i-fxemoji-lightbulb h-5 w-6></div>
        <div class="cursor-pointer font-medium" @click="winUrl(`/c-mdContent?id=${res.id}`)">{{ res.name }}</div>
      </div>
      <div class="text-cool-gray-500">{{ res.sketch }}</div>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
