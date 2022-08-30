<script lang="ts" setup>
import { resData, method } from './index'

onMounted(async () => {
  await method.GetType()
})
</script>
<template>
  <div class="lsidebar">
    <div>
      <div class="lsidebar-list" v-for="(res, index) in resData" :key="index">
        <div class="m-2 p-2" @click="method.skip(res.path)" v-if="res.identity">
          {{ res.title }}
        </div>
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
  @apply h-[100%] top-[9%] left-[8%] w-[17%] fixed;
  @apply bg-white rounded shadow;

  & > div {
    @apply h-[80%];

    .lsidebar-list {
      @apply rounded-lg shadow my-3 mx-8;
      @apply cursor-pointer text-center text-lg p-1;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .raside-website {
      @apply text-base ml-[25%] bottom-[17%] absolute;

      a {
        @apply text-gray-600;
      }
    }

    .raside-described {
      @apply m-1 text-center bottom-[10%] absolute;
    }
  }
}

@screen <xp {
  .lsidebar {
    @apply top-[11%];

    & > div {
      .raside-website {
        @apply text-base ml-7;
      }

      .raside-list {
        @apply h-[35px] w-[60%];
      }

      .raside-img {
        img {
          @apply h-[140px];
        }
      }
    }
  }
}
</style>
