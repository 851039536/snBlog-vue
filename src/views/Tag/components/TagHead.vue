<!--
 * @Author: your name
 * @Date: 2021-10-12 16:13:39
 * @LastEditTime: 2021-11-16 14:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\tag\components\TagHead.vue
-->
<script lang="ts" setup>
import { IntLabels } from '@/api/data/interData'
import { article } from '@/api'
import { state } from '../data'

defineProps({
  resultData: {
    type: Array as () => Array<IntLabels>,
    required: true,
    default: () => []
  }
})

async function GetTag(name: string) {
  state.newinfo = await (await article.GetTypeAsync(2, name, true)).data
}
</script>

<template>
  <div class="tag_head">
    <div class="tag_head_content" v-for="res in resultData" :key="res.id">
      <a @click="GetTag(res.name)" variant="light">{{ res.name }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';
//头部
.tag_head {
  @apply flex flex-wrap mt-1;
  @apply rounded-sm  shadow bg-white;

  @include initialize(94%, null, null, null, 3%, null, null);
  .tag_head_content {
    height: 32px;

    @apply m-1 p-1;
    @apply bg-gray-100 text-base rounded-sm;

    a {
      @apply p-1;
    }
  }
}
</style>
