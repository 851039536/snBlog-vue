<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '标题',
    required: true
  },
  sum: {
    type: String,
    default: '',
    required: true
  },
  character: {
    type: String,
    default: '',
    required: true
  },
  heat: {
    type: String,
    default: '',
    required: true
  },
  time: {
    type: String,
    default: '',
    required: true
  },
  sumTitle: {
    type: String,
    default: '文章数量',
    required: true
  },
  characterTitle: {
    type: String,
    default: '总字符数',
    required: true
  },
  heatTitle: {
    type: String,
    default: '热度',
    required: true
  },
  timeTitle: {
    type: String,
    default: '最近更新',
    required: true
  }
})
</script>

<template>
  <c-right-sidebar-container>
    <div class="stn-title">
      <div i-typcn-chart-area-outline h-24px w-32px></div>
      <div>{{ title }}</div>
    </div>
    <div class="stn-cont">
      <div class="cont-frame">
        <div class="cont-frame-title">{{ sumTitle }}:</div>
        <div class="cont-frame-text">{{ sum }} 篇</div>
      </div>
      <div class="cont-frame">
        <div class="cont-frame-title">{{ characterTitle }}:</div>
        <div class="cont-frame-text">{{ character }} 字</div>
      </div>
      <div class="cont-frame">
        <div class="cont-frame-title">{{ heatTitle }}:</div>
        <div class="cont-frame-text">{{ heat }} ℃</div>
      </div>
      <div class="cont-frame">
        <div class="cont-frame-title">{{ timeTitle }}:</div>
        <div class="cont-frame-text">{{ time }}</div>
      </div>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.stn-title {
  @apply pt-1 text-base flex;
}

.stn-cont {
  .cont-frame {
    @apply flex mt-1px text-base justify-between;

    .cont-frame-title {
      @apply p-1px;
    }

    .cont-frame-text {
      @apply p-1px;
    }
  }
}

// }
</style>
