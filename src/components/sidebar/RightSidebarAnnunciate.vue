<script lang="ts" setup>
import { useUserTalkApi } from '@/hooks/http'
import { useUserInfo } from '@/hooks/useUserInfo'

const talk: any = ref([])
const { getUserName } = useUserInfo()
const { getUserTalkPaging } = useUserTalkApi()
onMounted(async () => {
  const name = await getUserTalkPaging(1, getUserName(), 1, 1, 'data', true, false)
  talk.value = name.data.data[0]
})
</script>
<template>
  <c-right-sidebar-container>
    <div flex py-3px text-base>
      <div i-typcn-spiral h-6 w-6></div>
      <span>一言</span>
    </div>
    <div class="desc-cont">{{ talk.text }}</div>
    <div class="">
      <div i-typcn-heart-outline h4 w4></div>
      <div i-typcn-starburst-outline h4 w4></div>
      <div i-typcn-calendar h4 w4></div>
      <span class="mr-1">{{ talk.give }}</span>
      <span class="mr-1">{{ talk.give }}</span>
      <span>{{ talk.timeCreate }}</span>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.desc-cont {
  @apply px-1 pb-4 break-words;
  @apply bg-white text-sm text-cool-gray-600;
}
</style>
