<script setup lang="ts">
import { IOneType } from '@/api/data/InterData'

defineProps({
  result: {
    type: Array as () => IOneType[],
    default: () => {
      return []
    }
  }
})
</script>
<template>
  <div class="ocategory">
    <div class="ocategory-title">
      <svg
        t="1665649489766"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9793"
        width="34"
        height="23">
        <path
          d="M273.07008 51.2c122.53184 0 221.85984 99.328 221.85984 221.87008v211.61984a10.24 10.24 0 0 1-10.24 10.24H273.07008C150.528 494.92992 51.2 395.60192 51.2 273.07008 51.2 150.528 150.528 51.2 273.07008 51.2zM273.07008 972.8c122.53184 0 221.85984-99.328 221.85984-221.87008V539.31008a10.24 10.24 0 0 0-10.24-10.24H273.07008C150.528 529.07008 51.2 628.39808 51.2 750.92992 51.2 873.472 150.528 972.8 273.07008 972.8zM750.92992 51.2c-122.53184 0-221.85984 99.328-221.85984 221.87008v211.61984a10.24 10.24 0 0 0 10.24 10.24h211.61984C873.472 494.92992 972.8 395.60192 972.8 273.07008 972.8 150.528 873.472 51.2 750.92992 51.2zM750.92992 972.8c-122.53184 0-221.85984-99.328-221.85984-221.87008V539.31008a10.24 10.24 0 0 1 10.24-10.24h211.61984C873.472 529.07008 972.8 628.39808 972.8 750.92992 972.8 873.472 873.472 972.8 750.92992 972.8z"
          fill="#666666"
          p-id="9794"></path>
      </svg>
      <div>分类</div>
    </div>
    <div v-for="res in result" :key="res.id" class="inline-flex">
      <div class="flex-1 px-1 hover:text-blue-400">
        {{ res.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ocategory {
  width: 97%;

  @apply cursor-pointer;
  @apply bg-white rounded shadow;

  .ocategory-title {
    @apply flex;
    @apply bg-violet-200 m-1 text-base p-1 rounded;
  }
}
</style>
