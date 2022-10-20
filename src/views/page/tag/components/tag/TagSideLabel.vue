<script lang="ts" setup>
import { articleApi } from '@/api'
import { ISort } from '@/api/data/interData'
import { rData } from '../../data/data'
defineProps({
  sortData: {
    type: Array as () => ISort[],
    required: true,
    default: () => {
      return []
    }
  },
  tagName: {
    type: String,
    required: true,
    default: () => {
      return ''
    }
  }
})
/**
 * 选中后变色并且效果不消失
 */
const sideIndex = ref(0)

function getTopic(index: number) {
  sideIndex.value = index
}

async function GetTag(name: string) {
  rData.articleData = await (await articleApi.GetType(2, name, true)).data
}
onMounted(async () => {
  getTopic(sideIndex.value)
  await GetTag('Markdown')
})
</script>
<template>
  <div class="taglabel">
    <div class="taglabel-name flex">
      <svg
        t="1665648574208"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3529"
        width="34"
        height="24">
        <path
          d="M805.92 456.48L742.44 520l-22.05 22-219.08 219.09-22.05 22-22.05 22.05-69 69L120.9 607l250.9-250.92 120.42-120.42 46.42-46.42 226.21 41.64 8.57 47.12a292.12 292.12 0 0 1-50.28 22.72A85 85 0 0 0 710.76 285a84.42 84.42 0 0 0-119.57 0q-3 3-5.62 6.19A84.55 84.55 0 0 0 704.8 410q3.09-2.55 6-5.43a85 85 0 0 0 14.9-20.08 83.48 83.48 0 0 0 9.12-28.51A359.18 359.18 0 0 0 784 335.87z"
          fill="#73ACFF"
          p-id="3530"></path>
        <path
          d="M863.28 458.82L835.09 304a302.58 302.58 0 0 1-25.28 17.47 326.595 326.595 0 0 1-25.85 14.4l22 120.61L742.44 520l-22.05 22-219.08 219.09-22.05 22-22.05 22.05 20.2 59 9.12 26.66a32 32 0 0 0 40.64 19.92L835.8 805.15a32 32 0 0 0 19.92-40.64l-71-207.59 69.74-69.74a32 32 0 0 0 8.82-28.36zM795 759.94L531.74 850l-10.24-29.9L740.58 601z"
          fill="#1F61C1"
          p-id="3531"></path>
        <path
          d="M824.42 245.4a27.76 27.76 0 0 0-13.9 6.42c-3.83 3.29-7.74 6.42-11.69 9.38a246.49 246.49 0 0 1-25.41 16.8l-8.57-47.07-226.21-41.69-46.42 46.42L371.8 356.08 120.9 607l267.26 267.24 69-69 20.2 59-66.62 66.62a32 32 0 0 1-45.26 0L64.34 629.62a32 32 0 0 1 0-45.26L508 140.73a32 32 0 0 1 28.42-8.85l254.91 46.93A32 32 0 0 1 817 204.55z"
          fill="#1F61C1"
          p-id="3532"></path>
        <path
          d="M677.61 369.76c-0.26 0.28-0.53 0.56-0.8 0.83a36.56 36.56 0 0 1-59.62-39.83c0.19-0.47 0.4-0.93 0.61-1.39a36.62 36.62 0 0 1 28.94-20.91 34.82 34.82 0 0 1 4.23-0.25 36.31 36.31 0 0 1 19.87 5.85l-2.7 0.45c-11.08 1.77-17.86 2.2-18.18 2.22a28 28 0 0 0 1.48 56h1.47c0.71 0 4-0.22 9.26-0.79 4.02-0.52 9.24-1.18 15.44-2.18z"
          fill="#73ACFF"
          p-id="3533"></path>
        <path
          d="M734.78 355.94a83.48 83.48 0 0 1-9.12 28.51 85 85 0 0 1-14.9 20.08q-2.87 2.88-6 5.43a84.55 84.55 0 0 1-138.37-65.21 83.95 83.95 0 0 1 19.14-53.59q2.64-3.21 5.62-6.19a84.61 84.61 0 0 1 131.95 15.7c-8.31 2.88-16.28 5.24-23.69 7.19-11 2.89-20.72 4.87-28.61 6.2a36.31 36.31 0 0 0-19.8-5.85 34.82 34.82 0 0 0-4.23 0.25 36.62 36.62 0 0 0-28.94 20.91c-0.21 0.46-0.42 0.92-0.61 1.39a36.55 36.55 0 0 0 59.62 39.83c0.27-0.27 0.54-0.55 0.8-0.83 3.86-0.61 8.09-1.35 12.65-2.25 8.18-1.61 17.41-3.71 27.39-6.44 5.48-1.51 11.2-3.22 17.1-5.13z"
          fill="#1F61C1"
          p-id="3534"></path>
        <path
          d="M891.83 217a28 28 0 0 1-25.48-39.57 240.78 240.78 0 0 0 13.56-38.53 28 28 0 1 1 54.18 14.12 295.34 295.34 0 0 1-16.75 47.55A28 28 0 0 1 891.83 217zM847 294.29q-5.89 5.07-11.93 9.71a302.58 302.58 0 0 1-25.28 17.47 326.595 326.595 0 0 1-25.85 14.4 359.18 359.18 0 0 1-49.18 20.07c-5.9 1.91-11.62 3.62-17.12 5.13-10 2.73-19.21 4.83-27.39 6.44-4.56 0.9-8.79 1.64-12.65 2.25-6.2 1-11.42 1.66-15.45 2.1-5.3 0.57-8.55 0.76-9.26 0.79h-1.47a28 28 0 0 1-1.48-56c0.32 0 7.1-0.45 18.18-2.22l2.7-0.45c7.89-1.33 17.65-3.31 28.61-6.2 7.41-1.95 15.38-4.31 23.69-7.19a292.12 292.12 0 0 0 50.3-22.59 246.49 246.49 0 0 0 25.41-16.75c3.95-3 7.86-6.09 11.69-9.38A28 28 0 1 1 847 294.29z"
          fill="#FFB640"
          p-id="3535"></path>
      </svg>
      <div>{{ tagName }}</div>
    </div>
    <div v-for="res in sortData" :key="res.id" class="inline-flex" @click="getTopic(res.id)">
      <div class="taglabel-cont" :class="sideIndex == res.id ? 'active' : ''" @click="GetTag(res.name)">
        {{ res.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.taglabel {
  @apply m-auto mb-2 p-1 w-[97%];
  @apply bg-white rounded shadow;

  .taglabel-name {
    @apply m-1 text-base p-1;
    @apply rounded bg-light-blue-300;
  }

  .taglabel-cont {
    @apply flex-1 m-1 text-sm text-center p-1;
    @apply rounded bg-gray-100 shadow-2xl cursor-pointer;
    @apply hover:bg-blue-400 hover:text-white;
  }

  .taglabel-cont.active {
    color: #fff;
    background-color: #0ea5e9;
  }
}
</style>
