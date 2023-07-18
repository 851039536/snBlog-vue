<script lang="ts" setup>
import { ArticleApi } from '@/api'
import { articleData, paging } from '.'

const clickType = async (name: string) => {
  paging.typeStr = name
  const data = await ArticleApi.getPaging(
    paging.identity,
    paging.typeStr,
    paging.current,
    paging.pagesize,
    paging.typeStr
  )
  articleData.value = data.data.data
}
</script>
<template>
  <div class="my-dict">
    <div>
      <label>
        <input type="radio" name="radio" @click="clickType('read')" />
        <span>热门</span>
      </label>
      <label>
        <input type="radio" name="radio" @click="clickType('id')" />
        <span>最新</span>
      </label>
      <label>
        <input type="radio" name="radio" @click="clickType('give')" />
        <span>点赞</span>
      </label>
    </div>
  </div>
</template>
<style lang="scss" scoped>
:focus {
  border-color: #2260ff;
  outline: 0;
  box-shadow: 0 0 0 4px #b5c9fc;
}

.my-dict div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @apply bg-white py-2 rounded-lg;
}

.my-dict input[type='radio'] {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}

.my-dict input[type='radio']:checked + span {
  z-index: 1;
  color: #0043ed;
  background-color: #dee7ff;
  box-shadow: 0 0 0 0.0625em #0043ed;
}

label span {
  position: relative;
  display: block;
  margin-left: 0.0625em;
  padding: 0.375em 00.75em;
  color: #3e4963;
  letter-spacing: 0.05em;
  text-align: center;
  box-shadow: 0 0 0 0.0625em #b5bfd9;
  cursor: pointer;
  transition: background-color 00.5s ease;
}

label:first-child span {
  border-radius: 0.37em 0 0 0.37em;
}

label:last-child span {
  border-radius: 0 0.37em;
}
</style>
