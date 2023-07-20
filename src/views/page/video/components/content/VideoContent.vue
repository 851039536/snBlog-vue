<script setup lang="ts">
import { state } from '../../data/data'
import { method } from '../../data/index'
import { useRouter } from '@hooks/useRouter'
const { routerById } = useRouter()

defineProps({
  rData: {
    type: Array as () => any[],
    required: true,
    default: () => {
      return []
    }
  }
})
</script>

<template>
  <div class="videos">
    <div class="vicont-cont">
      <div v-for="r in rData" :key="r.id" class="vicont-cont-list">
        <div class="vicont-2-1-1">
          <img src="@/assets/img/hy.jpg" alt="" />
        </div>
        <div class="vicont-2-1-2">
          <p @click="routerById('/VideoPlay', r.id)">{{ r.name }}</p>
        </div>
        <div class="vicont2-1-3">
          <span>{{ r.user.nickname }}</span>
          <span>{{ r.type.name }}</span>
          <span>{{ r.timeCreate.substring(0, 10) }}</span>
        </div>
      </div>
    </div>
    <div class="vicont-paging">
      <a-pagination
        size="small"
        :total="state.count"
        :page-size="state.pagesize"
        show-quick-jumper
        @change="method.currentchange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.videos {
  @apply bg-white mt-1 rounded;

  .vicont-cont {
    @apply grid grid-cols-4;

    .vicont-cont-list {
      @apply h-[90%] mt-1 w-[90%];
      @apply rounded m-auto shadow bg-white;

      .vicont-2-1-1 {
        height: 68%;

        img {
          @apply h-full w-full;
        }
      }

      .vicont-2-1-2 {
        @apply h-[20%] mt-1 text-base p-1 text-gray-600;
        @apply cursor-pointer hover:text-blue-400;
        @include line-numbers(2);
      }

      .vicont2-1-3 {
        span {
          @apply text-sm mx-2px px-2px rounded;
          @apply bg-red-100 hover:text-blue-400 cursor-pointer;
        }
      }
    }
  }

  .vicont-cont::-webkit-scrollbar {
    display: none;
  }

  .vicont-paging {
    @apply bg-white p-1  mb-1;
  }
}

// @screen <xp {
//   .vcontent {
//     @apply mt-[6.3%];
//   }
// }
</style>
