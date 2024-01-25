<script lang="ts" setup>
// import { useThirdPartyApi } from '@hooksHttp/index'
import { useRouter } from '@hooks/useRouter'
import { ReSou } from '@api/model/interfaces'

// const { getZhiHuReSou } = useThirdPartyApi()
const { winUrl } = useRouter()
const reSou = ref([] as ReSou[])
onMounted(async () => {
  // const ret = await getZhiHuReSou()
  // reSou.value = ret.data.list
})
</script>
<template>
  <c-right-sidebar-container>
    <div flex py-3px text-base>
      <div i-typcn-adjust-brightness h-6 w-6></div>
      <span>知乎热搜</span>
    </div>
    <div v-for="(item, index) in reSou" :key="index">
      <div class="zhihuresou" @click="winUrl(item.url)">{{ index }}.{{ item.name }}</div>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.zhihuresou {
  @apply px-2px my-2px;
  @apply w-[99%] cursor-pointer hover:text-blue-400;
}
</style>
