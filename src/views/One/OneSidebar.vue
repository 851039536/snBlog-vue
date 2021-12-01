<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { one } from '@/api/index'

interface State {
  resultOneType: any
  resultOne: any
  modal2Visible: boolean
  text: any
  Count: number
  textNum: number
  readCount: number
  timeCreate: any
}

const state: State = reactive({
  resultOneType: [],
  resultOne: [],
  modal2Visible: false,
  text: [],
  Count: 0,
  textNum: 0,
  readCount: 0,
  timeCreate: ''
})

const GetApi = async () => {
  await one.GetOneTypeAllAsync().then((res: any) => {
    state.resultOneType = res.data
  })
  await one.GetFyAsync(0, '0', 1, 10, 'read', true, true).then((res: any) => {
    state.resultOne = res.data
  })
  await one.GetFyAsync(0, '0', 1, 1, 'id', true, true).then((res: any) => {
    state.timeCreate = res.data[0].timeCreate
  })
  await one.CountAsync(0, '0', true).then((res: any) => {
    state.Count = res.data
  })
  await one.GetSumAsync('text').then((res: any) => {
    state.textNum = res.data
  })
  await one.GetSumAsync('read').then((res: any) => {
    state.readCount = res.data
    console.log('%c [ state.readCount ]', 'font-size:13px; background:pink; color:#bf2c9f;', state.readCount)
  })
}

onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <div class="one-sidebar">
    <div class="one-sidebar-div">
      <!-- 文章描述 -->
      <div class="one-sidebar-describe">
        <div class="one-sidebar-describe-text">
          <p class>内容来源于网络</p>
        </div>
      </div>
      <!-- end文章描述 -->

      <!--内容框-->
      <OneSidetype title="舔狗好评" :result-data="state.resultOne"></OneSidetype>
      <!-- end内容框 -->

      <!-- 内容分类 -->
      <OneCategory :result="state.resultOneType"></OneCategory>
      <!-- end 内容分类 -->

      <!-- 站点统计 -->
      <StationText
        :ArticleCount="state.Count"
        :TextCount="state.textNum"
        :ReadCount="state.readCount"
        :Articledata="state.timeCreate"
      ></StationText>
      <!-- end 站点统计 -->
    </div>

    <!-- 弹出框 -->
    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="state.modal2Visible"
        :title="state.text.oneTitle"
        centered
        cancelText="赞"
        :closable="false"
        okText="不了"
        @ok="state.modal2Visible = false"
      >
        <p class="bg-white">{{ state.text.oneText }}</p>
      </a-modal>
    </div>
    <!-- end 弹出框 -->
  </div>
</template>

<style lang="scss" scoped>
.one-sidebar {
  @apply fixed ml-3;

  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20%, 90%);

  .one-sidebar-div {
    @include w-h(100%, 100%);

    overflow: auto;

    .one-sidebar-describe {
      width: 97%;

      @apply mb-2 m-auto;
      @apply shadow rounded bg-white text-center;

      h4 {
        height: 2rem;
        color: #1b1e21;
        font-size: 15px;
        line-height: 2.5rem;
      }

      .one-sidebar-describe-text {
        p {
          @apply text-sm px-2 py-4 m-1 cursor-pointer;
        }
      }
    }
  }
}

// @screen xp {
//   .one-Sidebar {
//     display: none;
//   }
// }
</style>
