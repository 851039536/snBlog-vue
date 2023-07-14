<script setup lang="ts">
import { DiaryApi, DiaryTypeApi } from '@/api'

defineProps({
  title: {
    type: String,
    default: () => {
      return 'title'
    }
  },
  text: {
    type: String,
    default: () => {
      return 'text'
    }
  },
  read: {
    type: Number,
    default: () => {
      return 0
    }
  }
})

const state: any = reactive({
  diaryType: [],
  resultOne: [],
  modal2Visible: false,
  text: []
})

onMounted(async () => {
  const dataType = await DiaryTypeApi.getPaging(1, 100, true, false)
  state.diaryType = dataType.data.data

  const data = await DiaryApi.getPaging(0, '0', 1, 9, 'read', true, false)
  console.log('[ data ]-16', data)
  state.resultOne = data.data.data
  console.log('[ state.resultOne ]-17', state.resultOne)
})
</script>

<template>
  <div class="otop">
    <div class="otop-img">
      <diary-sidetype title="热热热!" :result-data="state.resultOne"></diary-sidetype>
    </div>
    <div class="otop-cont">
      <div class="otop-cont-title">
        <span class="">{{ title }}</span>
      </div>
      <div class="otop-cont-give">
        <div>{{ text }}</div>
        <div class="otop-cont-give2">
          <span class="bg-yellow-100">1C</span>
          <span class="bg-fuchsia-100">123</span>
          <span class="bg-cyan-100">日记</span>
          <span class="bg-red-100">日记</span>
        </div>
      </div>
      <diary-category :result="state.diaryType"></diary-category>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.otop {
  @apply h-340px w-full flex bg-white mt-1 rounded;

  .otop-img {
    @apply w-[42%] mx-1;

    img {
      @apply h-full w-full rounded;
    }
  }

  .otop-cont {
    @apply h-full w-[55%];

    .otop-cont-title {
      @apply text-2xl m-1 text-center pt-2;
    }

    .otop-cont-give {
      @apply m-1 py-4 px-4;
      @apply font-thin text-base text-center leading-loose tracking-wide shadow-2xl rounded;
      @include line-numbers(5);
    }

    .otop-cont-give2 {
      span {
        @apply m-1 p-1 rounded;
        @apply cursor-pointer;
        @apply hover:text-white hover:bg-blue-400;
      }
    }
  }
}
</style>
