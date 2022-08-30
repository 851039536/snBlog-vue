<template>
  <div id="software-content">
    <!-- <fav-sidebar></fav-sidebar> -->
    <div class="software-main">
      <!-- ---------------------------------- -->

      <!-- 内容框 -->
      <div class="software-content">
        <div class="flex software-content-div">
          <div class="software-content-img">
            <img src="../../assets/img/ab.jpg" />
          </div>
          <div class="software-content-frame">
            <p class="software-content-frame-1">
              <a>剧本谈</a>
            </p>
            <p class="software-content-frame-2">
              时隔30个小时，你终于发了信息给我，你说“宝贝，我想你了。”，我很开心，我终于以为我的舔狗日子到了，可没想到信息发出来两秒都没有，你就撤回了，你说发错了，当我说准备要回没关系的时候，我看见了红色的感叹号。
            </p>

            <p class="software-content-frame-3">
              <span>剧本</span>
              <span>测试</span>
              <span>热度</span>
              <span>测试</span>
              <span>测试</span>
            </p>
          </div>
        </div>
      </div>
      <!-- ------ -->
      <div class="software-content-3">
        <div class="software-content-3-content">
          少年 发表于2017-10-23 20:43:47 | 热度：198749℃ | 懒得勤快 最后修改于2021-07-22 09:16:16
        </div>
      </div>
      <div class="software-content-2">
        <div class="software-content-2-content">
          在这里你可以找到更多好玩有趣的极客应用、小众软件、玩机技巧。
          加入我们和玩机大神一起搞机，手机、数码、软件。。。
          软件自带很多实用工具，比如资源搜索模块、短视频下载、小霸王游戏、森林之声白噪音功能等等。
          最强大是内置的视频模块，只要导入视频规则就可以把它当作一款强大的影视软件，非常强大，社区内大神有分享，请自行探索！
          软件过于强大，喜欢搞机的朋友可以自行研究！
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#software-content {
  @apply h-full w-full;

  .software-main {
    @include initialize($w, 90%, $text-height, null, $ml, null, #fafafa);
    @apply rounded-sm shadow-sm overflow-auto;

    .software-content {
      @apply m-2;

      .software-content-div {
        @include initialize(100%, 125px, 10px, null, null, null, #ffffff);
        @apply rounded-sm cursor-pointer shadow mb-1;

        .software-content-img {
          @include w-h(20%, 100%);
          @apply p-2;

          img {
            @include w-h(100%, 100%);
          }
        }

        .software-content-frame {
          @include w-h(80%, 100%);

          .software-content-frame-1 {
            @apply font-semibold m-1 text-base px-1;
            @include line-one;
          }

          .software-content-frame-2 {
            @apply font-thin m-1 text-sm p-1 px-2;

            height: 51%;

            @include line-numbers(3);
          }

          .software-content-frame-3 {
            @apply font-semibold m-1 px-1;

            span {
              @apply p-1;
            }
          }
        }
      }
    }

    .software-content-2 {
      @apply m-2;

      .software-content-2-content {
        @apply bg-white rounded-sm shadow mb-1 p-2;
      }
    }

    .software-content-3 {
      @apply m-2;

      .software-content-3-content {
        @apply bg-white rounded-sm shadow p-2;
      }
    }
  }
}
</style>
