<script lang="ts" setup>
import { one } from '../data'
import { method } from '../index'

defineProps({
  resultData: {
    type: Array as () => Array<one>,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="onecontent">
    <div class="onecontent-div" v-for="res in resultData" :key="res.id">
      <div class="onecontent-div-frame">
        <p class="onecontent_div_frame_title">
          <a @click="method.setModal1Visible(true, res.id)">
            {{ res.title }}
          </a>
        </p>
        <p class="onecontent-div-frame-text">{{ res.text }}</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onecontent {
  @apply flex flex-wrap;

  .onecontent-div {
    width: 31%;
    height: 150px;

    @apply mt-1 m-auto;
    @apply relative shadow rounded-sm cursor-pointer;

    .onecontent-div-frame {
      @apply w-full h-full;

      .onecontent_div_frame_title {
        height: 23%;

        @apply m-1 px-1 text-base font-semibold bg-gray-100;

        @include line-one;
      }

      .onecontent-div-frame-text {
        @apply px-2 m-1 p-1 text-sm font-thin;

        height: 55%;

        @include line-numbers(4);
      }
    }
  }
}
</style>
