<script lang="ts" setup>
import { method, state } from '../../index'

defineProps({
  resultData: {
    type: Array as () => any,
    required: true,
    default: () => {
      return []
    }
  }
})
</script>

<template>
  <div class="ocont">
    <div v-for="ret in resultData" :key="ret.id" class="ocont-list">
      <div class="ocont-list-cont">
        <p class="ocont-list-cont-title">
          <span @click="method.setModal1Visible(true, ret.id)">
            {{ ret.name }}
          </span>
        </p>
        <p class="ocont-list-cont-text">{{ ret.text }}</p>
        <div class="ocont-list-cont-text2">
          <div class="i-typcn-user"></div>
          <span class="pr-1">
            {{ ret.user!.nickname }}
          </span>

          <div class="i-typcn-tag"></div>
          <span class="pr-1">{{ ret.type!.name }}</span>
          <div class="i-typcn-adjust-brightness text-xl"></div>
          <span class="pr-1">{{ ret.read }} ℃</span>
          <div class="i-typcn-thumbs-up text-xl"></div>
          <span class="pr-1">{{ ret.give }}</span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <a-modal
      v-model:visible="state.modal2Visible"
      :title="state.text.title"
      centered
      cancel-text="非常赞"
      :closable="false"
      ok-text="呵呵"
      @cancel="method.give(state.text.id)"
      @ok="state.modal2Visible = false">
      <p>{{ state.text.text }}</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped>
.ocont {
  @apply grid grid-cols-3;

  .ocont-list {
    @apply m-auto  mt-1 w-[97%] bg-white;
    @apply rounded cursor-pointer shadow;

    .ocont-list-cont {
      @apply h-full w-full;

      .ocont-list-cont-title {
        @apply h-[20%] m-1 text-lg px-1;
        @apply rounded bg-blue-100 hover:bg-blue-500 hover:text-white;
        @include truncation;
      }

      .ocont-list-cont-text {
        @apply font-thin h-[52%]    px-2;
        @include line-numbers(3);
      }

      .ocont-list-cont-text2 {
        @apply font-thin h-[54%] p-1 flex items-center;

        span {
          @apply hover:text-white hover:text-blue-600;
        }
      }
    }
  }
}
</style>
