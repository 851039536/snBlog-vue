<script lang="ts" setup>
import { resData, method } from './index'

onMounted(async () => {
  await method.GetType()
})
</script>
<template>
  <div id="raside">
    <div>
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
#raside {
  @apply rounded-md h-[100%] shadow w-[20%] fixed;
  @include excursion($Text_height, null, 3%, null);
  & > div {
    @apply h-[80%] overflow-auto;

    .raside-img {
      img {
        @apply rounded h-[144px] w-[100%];
      }
    }

    .raside-list {
      @include initialize(40%, 6%, 4px, auto, auto, auto, null);
      @apply cursor-pointer text-center;

      p {
        @apply text-lg py-1 px-4;
        &:hover {
          @apply text-blue-400;
        }
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

@screen <sm {
  #raside {
    display: none;
  }
}
</style>
