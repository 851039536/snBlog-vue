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
  @include initialize($w, 99%, 4.5%, null, $ml, null, #fcfcfc);

  @apply relative shadow rounded-sm;

  .svideo_main_content {
    @apply flex flex-wrap;

    @include w-h(100%, 92%);

    @apply overflow-auto absolute top-2;

    .svideo-2-1 {
      @include w-h(32%, 50%);
      @apply shadow m-auto mt-2;
      .svideo-2-1-1 {
        height: 65%;
        img {
          @include w-h(100%, 100%);
        }
      }
      .svideo-2-1-2 {
        height: 21%;
        @apply text-base mt-1 p-1 bg-gray-50;
        @include line-numbers(2);
      }

      .svideo-2-1-3 {
        @apply p-1  text-base;
      }
    }
  }
  .svideo_main_content::-webkit-scrollbar {
    display: none;
  }

  .svideo_Paging {
    @include w-h(100%, 20%);
    @apply absolute;
    top: 95%;
    left: 1%;
  }
}
</style>
