<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { article } from '@/api'
import { RouterId } from '@/hooks/routers'

interface States {
  reverse: boolean
  spinning: boolean
  items: any
}

const state: States = reactive({
  reverse: true,
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
  <div class="timeline animate__animated animate__fadeIn">
    <blog-sidebar></blog-sidebar>
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
@import './TimeLine.scss';
</style>
