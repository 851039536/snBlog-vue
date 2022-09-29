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
  <div class="vcontent">
    <div class="vcontent-cont">
      <div v-for="res in arrayVideo" :key="res.id" class="vcontent-cont-list">
        <div class="vcontent-2-1-1">
          <img src="@/assets/img/hy.jpg" />
        </div>
        <div class="vcontent-2-1-2">
          <a @click="routerId('/VideoPlay', res.id)">{{ res.title }}</a>
        </div>
        <div class="vcontent-2-1-3">
          {{ res.timeCreate.substring(0, 10) }}
        </div>
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
</template>

<style lang="scss" scoped>
.vcontent {
  @apply h-[99%] mt-[4.5%] ml-[22%] w-[47%] relative;
  @apply rounded shadow;

  .vcontent-cont {
    @apply flex flex-wrap absolute overflow-auto;
    @apply h-[92%] w-full top-2;

    .vcontent-cont-list {
      @apply rounded m-auto h-[50%] shadow mt-2 w-[32%];

      .vcontent-2-1-1 {
        height: 65%;

        img {
          @apply h-full w-full;
        }
      }

      .vcontent-2-1-2 {
        @apply h-[21%] mt-1 text-base p-1 text-gray-600;
        @include line-numbers(2);
      }

      .vcontent-2-1-3 {
        @apply text-base p-1;
      }
    }
  }

  .vcontent-cont::-webkit-scrollbar {
    display: none;
  }

  .vcontent-paging {
    @include w-h(100%, 20%);
    @apply top-[95%] left-[1%] absolute;
  }
}

@screen <xp {
  .vcontent {
    @apply mt-[6.3%];
  }
}
</style>
