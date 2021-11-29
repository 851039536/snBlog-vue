<!--
 * @Author: your name
 * @Date: 2021-10-12 16:35:14
 * @LastEditTime: 2021-11-16 15:24:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\tag\components\TagContent.vue
-->
<script lang="ts" setup>
import { article } from '@/api'
import { state } from '../data'

async function GetApi(id: number) {
  state.blog = await (await article.GetByIdAsync(id, true)).data[0].text
}
</script>
<template>
  <div class="tag_content">
    <div class="text-sidebar">
      <div class="text-sidebar-forms" v-for="result in state.newinfo" :key="result.id">
        <div class="forms-1" @click="GetApi(result.id)">
          <a>{{ result.title }}</a>
        </div>
        <div class="forms-2">{{ result.timeCreate.substring(0, 10) }}</div>
      </div>
    </div>

    <div class="text-blog">
      <v-md-preview :text="state.blog" model="preview" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../index.scss';
</style>
