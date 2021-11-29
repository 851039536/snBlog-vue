<script lang="ts" setup>
import { resData, method } from './index'

method.GetType()
</script>
<template>
  <div id="raside">
    <div class="raside-main">
      <div class="raside-img">
        <img src="@/assets/img/si.jpg" />
      </div>
      <div class="raside-list" v-for="(res, index) in resData.resultData" :key="index">
        <p @click="method.skip(res.path)" v-if="res.identity">
          {{ res.title }}
        </p>
      </div>

      <div class="raside-website">
        <a href="http://oykperson.xyz">http://www.oykperson.xyz</a>
      </div>
      <div class="raside-described">
        <p class="raside-described_text">
          SN © 2021.Rights Reserved. 备案 :
          <a href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/design/methodCss.scss';
@import '@/design/uitl';

#raside {
  @apply fixed shadow rounded-md;
  @include w-h(20%, 100%);
  @include excursion($Text_height, null, 3%, null);
  background-color: $back_sidebar;
  .raside-main {
    @apply h-4/5 overflow-auto;

    .raside-img {
      img {
        @include w-h(100%, 144px);

        @apply rounded-md;
      }
    }

    .raside-list {
      @include initialize(40%, 6%, 4px, auto, auto, auto, null);

      @apply text-center cursor-pointer;

      p {
        @apply py-1 px-4 text-lg;
      }
    }

    .raside-website {
      position: absolute;
      bottom: 18%;
      margin-left: 25%;
    }

    .raside-described {
      position: absolute;
      bottom: 12%;

      @apply text-xs;

      .raside-described_text {
        color: #333336;
        text-align: center;
      }
    }
  }
}

@screen xp {
  #raside {
    display: none;
  }
}
</style>
