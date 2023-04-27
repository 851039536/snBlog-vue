<script lang="ts" setup>
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  title: String,
  // eslint-disable-next-line vue/require-default-prop
  res1: String,
  // eslint-disable-next-line vue/require-default-prop
  res2: String,
  // eslint-disable-next-line vue/require-default-prop
  res3: String,
  // eslint-disable-next-line vue/require-default-prop
  res4: String,
  // eslint-disable-next-line vue/require-default-prop
  title1: String,
  // eslint-disable-next-line vue/require-default-prop
  title2: String,
  // eslint-disable-next-line vue/require-default-prop
  title3: String,
  // eslint-disable-next-line vue/require-default-prop
  title4: String
})
</script>

<template>
  <c-right-sidebar-container>
    <div class="stn-title">
      <div i-fxemoji-smallsmile w-32px h-24px></div>
      <div>{{ title }}</div>
    </div>
    <div class="stn-cont">
      <div class="cont-frame">
        <div class="cont-frame-title">{{ title1 }}:</div>
        <div class="cont-frame-text">{{ res1 }} 篇</div>
      </div>
      <div class="cont-frame">
        <div class="cont-frame-title">{{ title2 }}:</div>
        <div class="cont-frame-text">{{ res2 }} 字</div>
      </div>
      <div class="cont-frame">
        <div class="cont-frame-title">{{ title3 }}:</div>
        <div class="cont-frame-text">{{ res3 }} ℃</div>
      </div>
      <div class="cont-frame">
        <div class="cont-frame-title">{{ title4 }}:</div>
        <div class="cont-frame-text">{{ res4 }}</div>
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
    @apply flex mt-1 text-base justify-between;

    .cont-frame-title {
      @apply p-1;
    }

    .cont-frame-text {
      @apply p-1;
    }
  }
}

// }
</style>
