<script lang="ts" setup>
onMounted(async () => {
  // const ret = await getZhiHuReSou()
  // reSou.value = ret.data.list
})
</script>
<template>
  <c-right-sidebar-container>
    <!-- <div flex py-3px text-base>
      <div i-typcn-adjust-brightness h-6 w-6></div>
      <span>知乎热搜</span>
    </div>
    <div v-for="(item, index) in reSou" :key="index">
      <div class="zhihuresou" @click="winUrl(item.url)">{{ index }}.{{ item.name }}</div>
    </div> -->

    <div class="section-8">
      <div class="group-3 items-center">
        <span class="">事件</span>
        <!-- <img
          class="image-2 ml-42 shrink-0"
          src="https://ide.code.fun/api/image?token=6656743da16e9e0012505927&name=4ed80c2983b70ac8cf2cc88cb37f8ad4.png" /> -->
      </div>
      <div class="group-6 mt-6 items-center">
        <!-- <img
          class="image-2"
          src="https://ide.code.fun/api/image?token=6656743da16e9e0012505927&name=dd2628a8daecbb6337c25ab06518b8cc.png" /> -->
        <span class="ml-3">10个活动邀请</span>
      </div>
      <div class="group-6 mt-1 items-center">
        <!-- <img
          class="image-10"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6344ba575a7e3f0310c54744/6344baf7fe65f70012e21f7b/c6ab295e100a7af4dd889933c7887341.png" />
        <span class="ml-3">普拉达的生日邀请函</span> -->
      </div>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.zhihuresou {
  @apply px-2px my-2px;
  @apply w-[99%] cursor-pointer hover:text-blue-400;
}

.section-8 {
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 15px;

  .group-3 {
    padding: 13px 20px;
    border-bottom: solid 1px #f1f1f5;
  }

  .group-6 {
    padding: 0 20px;

    .image-10 {
      width: 24px;
      height: 25.5px;
    }
  }

  .image-2 {
    width: 24px;
    height: 24px;
  }
}
</style>
