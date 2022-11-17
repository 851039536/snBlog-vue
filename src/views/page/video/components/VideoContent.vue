<script setup lang="ts">
import { routerId } from '@/hooks/routers'
import { IVideo } from '@/api/data/interData'
import { state } from '../data/data'
import { method } from '../data/index'

defineProps({
  arrayVideo: {
    type: Array as () => IVideo[],
    required: true,
    default: () => {
      return []
    }
  }
})
</script>

<template>
  <div class="vcontent">
    <div class="vcontent-cont">
      <div v-for="res in arrayVideo" :key="res.id" class="vcontent-cont-list">
        <div class="vcontent-2-1-1">
          <img src="@/assets/img/hy.jpg" />
        </div>
        <div class="vcontent-2-1-2">
          <p @click="routerId('/VideoPlay', res.id)">{{ res.name }}</p>
        </div>
        <div class="vcontent-2-1-3">
          <span>少年</span>
          <span>火影</span>
          <span>12C</span>
          <span>{{ res.timeCreate.substring(0, 10) }}</span>
        </div>
      </div>
      <div class="vcontent-paging">
        <a-pagination
          size="small"
          :total="state.count"
          :page-size="state.pagesize"
          show-quick-jumper
          @change="method.currentchange" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vcontent {
  @apply h-[100%] mt-[4.5%] ml-[22%] w-[49.5%];

  // @apply rounded shadow;

  .vcontent-cont {
    @apply grid grid-cols-3;
    @apply w-full;

    .vcontent-cont-list {
      @apply h-[92%] mt-2 w-[98%];
      @apply rounded m-auto shadow bg-white;

      .vcontent-2-1-1 {
        height: 70%;

        img {
          @apply h-full w-full;
        }
      }

      .vcontent-2-1-2 {
        @apply h-[20%] mt-1 text-base p-1 text-gray-600;
        @apply cursor-pointer hover:text-blue-400;
        @include line-numbers(2);
      }

      .vcontent-2-1-3 {
        span {
          @apply mx-1 p-1 rounded;
          @apply bg-red-100 hover:text-blue-400 cursor-pointer;
        }
      }
    }
  }

  .vcontent-cont::-webkit-scrollbar {
    display: none;
  }

  .vcontent-paging {
    // @include w-h(100%, 20%);
    @apply bg-white p-2 w-full mx-2 mt-2 mb-18;

    // @apply top-[95%] left-[1%] absolute;
  }
}

// @screen <xp {
//   .vcontent {
//     @apply mt-[6.3%];
//   }
// }
</style>
