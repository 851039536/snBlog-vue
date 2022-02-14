<script setup lang="ts">
import { RouterId } from '@/hooks/routers'
import { IntVideo } from '@/api/data/interData'
import { state } from '../data/data'
import { method } from '../data/index'

defineProps({
  arrayVideo: {
    type: Array as () => Array<IntVideo>,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="svideo_main">
    <div class="svideo_main_content">
      <div class="svideo-2-1" v-for="res in arrayVideo" :key="res.id">
        <div class="svideo-2-1-1">
          <img src="@/assets/img/hy.jpg" />
        </div>
        <div class="svideo-2-1-2">
          <a @click="RouterId('/VideoPlay', res.id)">{{ res.title }}</a>
        </div>
        <div class="svideo-2-1-3">
          {{ res.timeCreate.substring(0, 10) }}
        </div>
      </div>
    </div>
    <div class="svideo_Paging">
      <a-pagination
        size="small"
        @change="method.currentchange"
        :total="state.count"
        :pageSize="state.pagesize"
        show-quick-jumper
      />
      <!-- end 分页-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.svideo_main {
  @apply h-[99%] mt-[4.5%] ml-[25%] w-[50%] relative;
  @apply rounded shadow;

  .svideo_main_content {
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
  .svideo_main_content::-webkit-scrollbar {
    display: none;
  }

  .svideo_Paging {
    @include w-h(100%, 20%);
    @apply top-[95%] left-[1%] absolute;
  }
}
</style>
