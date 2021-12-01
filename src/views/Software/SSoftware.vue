<template>
  <div id="software">
    <s-header></s-header>
    <fav-sidebar></fav-sidebar>
    <div class="software_main animate__animated animate__fadeIn">
      <div class="software_content">
        <div class="flex software_content_div">
          <div class="software_content_img">
            <img src="../../assets/img/ab.jpg" />
          </div>
          <div class="software_content__frame">
            <p class="software_content__frame-1">
              <a>剧本谈</a>
            </p>
            <p class="software_content__frame-2">
              时隔30个小时，你终于发了信息给我，你说“宝贝，我想你了。”，我很开心，我终于以为我的舔狗日子到了，可没想到信息发出来两秒都没有，你就撤回了，你说发错了，当我说准备要回没关系的时候，我看见了红色的感叹号。
            </p>

            <p class="software_content__frame-3">
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
      <div class="software_content">
        <div class="flex software_content_div">
          <div class="software_content_img">
            <img src="https://media.creatorsdaily.com/QmQPDaRDWY6hJQKPA4T47xE6cXzHrdzWXwjtjWMDBCBNAo-160-160-contain" />
          </div>
          <div class="software_content__frame">
            <p class="software_content__frame-1">
              <a @click="skip(1)"> 1 </a>
            </p>
            <p class="software_content__frame-2">2</p>

            <p class="software_content__frame-3">
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
import { useRouter } from 'vue-router'
import FavSidebar from '../navigation/favorite/FavSidebar.vue'

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
  @apply w-full h-full;

  .software_main {
    @include initialize($w, 90%, 3.6%, null, $ml, null, #fafafa);

    @apply shadow-sm rounded-sm overflow-auto;

    .software_content {
      @apply m-2;

      .software_content_div {
        @include initialize(100%, 125px, 10px, null, null, null, #ffffff);

        @apply mb-6 shadow rounded-sm cursor-pointer;

        .software_content_img {
          @include w-h(20%, 100%);

          @apply p-2;

          img {
            @include w-h(100%, 100%);
          }
        }

        .software_content__frame {
          @include w-h(80%, 100%);

          .software_content__frame-1 {
            @apply m-1 px-1 text-base font-semibold;

            @include line-one;
          }

          .software_content__frame-2 {
            @apply px-2 m-1 p-1 text-sm font-thin;

            height: 51%;

            @include line-numbers(3);
          }

          .software_content__frame-3 {
            @apply m-1 px-1 font-semibold;

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
