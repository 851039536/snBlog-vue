<script lang="ts" setup>
import { article } from '@/api'
import { RouterId } from '@/hooks/routers'

interface ResData {
  spinning: boolean
  items: any
}

const state: ResData = reactive({
  spinning: true,
  items: []
})

onMounted(async () => {
  article.GetFyAsync(0, 'null', 1, 10, 'id', true, true).then((res: any) => {
    state.items = res.data
    state.spinning = false
  })
})
</script>

<template>
  <div class="timeline">
    <IndexSidebar></IndexSidebar>
    <div class="timeline_img">
      <h4>Archive</h4>
      <p>最后更新于2020年11月26日</p>
    </div>
    <div class="timeline-time">
      <div class="block">
        <!-- 骨架 -->
        <a-skeleton :loading="state.spinning" :paragraph="{ rows: 15 }" active />
        <a-timeline v-for="activity in state.items" :key="activity.article_id">
          <div class="block-1">
            <a-timeline-item>
              <h4>
                <a @click="RouterId('/IndexText', activity.articleId)">{{ activity.title }}</a>
              </h4>
            </a-timeline-item>
            <a-timeline-item color="green">
              <p>提交于 {{ activity.timeCreate }}</p>
            </a-timeline-item>
          </div>
        </a-timeline>
      </div>
      <!-- 回到顶部 -->
      <a-back-top />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timeline {
  @include initialize($w, null, 3.4%, null, $ml, null, #ffffff);

  @apply text-base;
  @apply shadow rounded;

  .timeline_img {
    @apply relative rounded;

    @include w-h(100%, 140px);

    h4 {
      position: absolute;

      @include excursion(16%, null, 45%, null);

      color: white;
      font-weight: 300;
    }

    p {
      position: absolute;

      @include excursion(53%, null, 39%, null);

      color: #7f828f;
      font-weight: 300;
      font-size: 15px;
    }
  }

  .timeline-type {
    @apply shadow mt-1 rounded;

    .timeline-type-name {
      ul li {
        display: inline-block;

        @apply p-4 text-lg font-semibold;
      }
    }
  }

  .timeline-time {
    @apply relative mt-4;

    .block {
      @apply mx-4 mt-2;

      .block-1 {
        @apply m-2;

        h4 {
          @apply text-lg;
        }
      }
    }
  }
}
</style>
