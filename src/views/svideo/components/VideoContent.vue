<script setup lang="ts">
import { routerId } from '@/hooks/routers'
import { IntVideo } from '@/api/data/interData'
import { state } from '../data/data'
import { method } from '../data/index'

defineProps({
  arrayVideo: {
    type: Array as () => IntVideo[],
    required: true,
    default: () => {
      return []
    }
  }
})
</script>

<template>
  <div class="svideo-main">
    <div class="svideo-main-content">
      <div class="svideo-2-1" v-for="res in arrayVideo" :key="res.id">
        <div class="svideo-2-1-1">
          <img src="@/assets/img/hy.jpg" />
        </div>
        <div class="svideo-2-1-2">
          <a @click="routerId('/VideoPlay', res.id)">{{  res.title  }}</a>
        </div>
        <div class="svideo-2-1-3">
          {{  res.timeCreate.substring(0, 10)  }}
        </div>
      </div>
    </div>
    <div class="svideo-paging">
      <a-pagination size="small" @change="method.currentchange" :total="state.count" :pageSize="state.pagesize"
        show-quick-jumper />
      <!-- end 分页-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.svideo-main {
  @apply h-[99%] mt-[4.5%] ml-[26%] w-[47%] relative;
  @apply rounded shadow;

  .svideo-main-content {
    @apply flex flex-wrap absolute overflow-auto;
    @apply h-[92%] w-full top-2;

    .svideo-2-1 {
      @apply rounded m-auto h-[50%] shadow mt-2 w-[32%];

      .svideo-2-1-1 {
        height: 65%;

        img {
          @apply h-full w-full;
        }
      }

      .svideo-2-1-2 {
        @apply h-[21%] mt-1 text-base p-1 text-gray-600;
        @include line-numbers(2);
      }

      .svideo-2-1-3 {
        @apply text-base p-1;
      }
    }
  }

  .svideo-main-content::-webkit-scrollbar {
    display: none;
  }

  .svideo-paging {
    @include w-h(100%, 20%);
    @apply top-[95%] left-[1%] absolute;
  }
}

@screen <xp {
  .svideo-main {
    @apply mt-[6.3%];
  }
}
</style>
