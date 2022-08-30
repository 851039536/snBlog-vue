<template>
  <div id="software">
    <s-header></s-header>
    <fav-sidebar></fav-sidebar>
    <div class="software-main">
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
      <div class="software-content">
        <div class="flex software-content-div">
          <div class="software-content-img">
            <img src="https://media.creatorsdaily.com/QmQPDaRDWY6hJQKPA4T47xE6cXzHrdzWXwjtjWMDBCBNAo-160-160-contain" />
          </div>
          <div class="software-content-frame">
            <p class="software-content-frame-1">
              <a @click="skip(1)"> 1 </a>
            </p>
            <p class="software-content-frame-2">2</p>

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
    </div>
  </div>
</template>

<script lang="ts" setup>
// import FavSidebar from '../navigation/favorite/FavSidebar.vue'

const router = useRouter()
const skip = async (id: number) => {
  await router.push({
    path: '/SoftwareContent',
    query: {
      id
    }
  })
}
</script>

<style lang="scss" scoped>
#software {
  @apply h-full w-full;

  .software-main {
    @include initialize($w, 90%, 3.6%, null, $ml, null, #fafafa);
    @apply rounded-sm shadow-sm overflow-auto;

    .software-content {
      @apply m-2;

      .software-content-div {
        @include initialize(100%, 125px, 10px, null, null, null, #ffffff);
        @apply rounded-sm cursor-pointer shadow mb-6;

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
  }
}
</style>
