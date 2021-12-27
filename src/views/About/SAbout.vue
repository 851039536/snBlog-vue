<script lang="ts" setup>
import { Routers } from '@/hooks/routers'
import { user } from '@/api/index'

const resData: any = reactive({
  resultData: []
})

const GetId = async (id: number) => {
  switch (id) {
    case 1:
      await Routers('/index/column')
      break
    case 2:
      await Routers('/Svideo')
      break
    case 3:
      await Routers('/Talk')
      break
    case 4:
      await Routers('/favorite')
      break
    case 5:
      await Routers('/Leave')
      break
    default:
      break
  }
}
onMounted(async () => {
  await user.GetByIdAsync(4).then((res: any) => {
    resData.resultData = res.data
  })
  window.scrollTo(0, 0)
})
</script>

<template>
  <s-header></s-header>
  <div class="about_main">
    <div class="about_content">
      <!-- 背景图+介绍 -->
      <div class="about-bg">
        <div class="about-1">
          <div class="about-1-1">
            <div class="about-1-1-1">
              <img src="@/assets/img/bb.jpg" />
            </div>
          </div>
          <div class="about-1-2">
            <a>{{ resData.resultData.brief }}</a>
          </div>
        </div>

        <div class="flex flex-wrap about-2">
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(1)">文章</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(2)">娱乐</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(3)">日志</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(4)">分享</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <a @click="GetId(5)">留言</a>
          </div>
        </div>
      </div>
      <!-- end 背景图+介绍 -->

      <!-- 关于我：  -->
      <div class="bg-2">
        <div class="bg-2-1">
          <div class="bg-2-1-1">
            <h2>关于我：</h2>
          </div>
          <div class="bg-2-1-2">表面腼腆,内心奔放</div>
        </div>
        <div class="bg-2-2">
          <div class="bg-2-2-1">
            <h2>关于本站：</h2>
          </div>
          <div class="bg-2-2-2">
            blog由本人制作,本站基于TailWindcss,Vue3+ts,Net5Api
            开发搭建，部署于腾讯云，备案于腾讯云，建站初衷是想学习记录生活。
          </div>
        </div>
        <div class="bg-2-3">
          <div class="bg-2-3-1">
            <h2>建站缘由</h2>
          </div>
          <div class="bg-2-3-2">搭建一个属于自己的世界。</div>
        </div>
      </div>
      <!-- end 关于我：  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about_main {
  @apply fixed w-full h-full bg-white;

  @include initialize(94%, 92%, 4.5%, null, 3%, null, null);

  @apply bg-white overflow-auto;

  .about_content {
    @apply absolute shadow;

    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

    .about-bg {
      height: 600px;
      background: no-repeat center/100% url('../../assets/img/ab.jpg');

      @apply shadow;

      .about-1 {
        @include initialize(35%, 60%, auto, auto, auto, auto, null);

        @apply shadow;

        .about-1-1 {
          height: 50%;

          .about-1-1-1 {
            @include initialize(230px, 190px, 3%, auto, auto, auto, null);

            @apply p-3;

            img {
              @include w-h;

              border-radius: 1%;
            }
          }
        }

        .about-1-2 {
          @include initialize(null, 20%, 0, auto, auto, auto, #4d4d4d);

          @apply p-1 pt-4 text-lg text-center;
        }
      }

      .about-2 {
        @include initialize(35%, null, 10px, auto, auto, auto, null);

        @apply text-base cursor-pointer bg-gray-200;
        @apply shadow rounded-sm;

        .about-2-1 {
          @apply pl-5;
        }
      }

      .about-3 {
        width: 35%;

        @apply m-auto mt-4 shadow;
        @apply bg-pink-50;
      }
    }

    .bg-2 {
      margin: 10px auto 0 auto;

      @apply w-full;

      .bg-2-1 {
        @apply m-2;

        .bg-2-1-1 {
          @apply m-2 text-lg;
        }

        .bg-2-1-2 {
          @apply m-2 text-base font-light;
        }
      }

      .bg-2-2 {
        @apply m-2;

        .bg-2-2-1 {
          @apply m-2 text-lg;
        }

        .bg-2-2-2 {
          @apply m-2 text-base font-light;
        }
      }

      .bg-2-3 {
        @apply m-2 text-lg;

        .bg-2-3-1 {
          @apply m-2;
        }

        .bg-2-3-2 {
          @apply m-2 text-base font-light;
        }
      }
    }
  }
}

.about_main::-webkit-scrollbar {
  display: none;
}
</style>
