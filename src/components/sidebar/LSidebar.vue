<script lang="ts" setup>
import { resData, method } from './index'

onMounted(async () => {
  await method.GetType()
})
</script>
<template>
  <div class="lsidebar">
    <div>
      <div class="raside-img">
        <img src="@/assets/img/si.jpg" />
      </div>
      <div class="raside-list" v-for="(res, index) in resData" :key="index">
        <p @click="method.skip(res.path)" v-if="res.identity">
          {{ res.title }}
        </p>
      </div>

      <div class="raside-website">
        <a href="http://oykperson.xyz">http://www.oykperson.xyz</a>
      </div>
      <div class="raside-described">
        <p>
          SN © 2021.Rights Reserved. 备案 :
          <a href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.lsidebar {
  @apply h-[100%] top-[9%] left-[3%] w-[19.5%]  fixed;
  @apply rounded shadow;
  & > div {
    @apply h-[80%] overflow-auto;

    .raside-img {
      img {
        @apply rounded h-[144px] w-[100%];
      }
    }

    .raside-list {
      @apply m-auto h-[6%] mt-1 w-[40%];
      @apply cursor-pointer text-center text-base;

      p {
        @apply py-1 px-4 hover:text-blue-400;
      }
    }

    .raside-website {
      @apply text-base ml-[25%] bottom-[20%] absolute;
    }

    .raside-described {
      @apply text-center bottom-[10%] absolute;
    }
  }
}

@screen <lg {
  #raside {
    display: none;
  }
}
</style>
