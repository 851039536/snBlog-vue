<script lang="ts" setup>
import { useUserTalkApi } from '@/hooks/http'
import { useUserInfo } from '@/hooks/useUserInfo'

const talk: any = ref([])
const { getUserName } = useUserInfo()
const userName = getUserName()
const { getPaging } = useUserTalkApi()
onMounted(async () => {
  const name = await getPaging(1, userName, 1, 1, 'data', true, false)
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
    <div class="flex items-center text-cool-gray-600">
      <div i-typcn-heart-outline></div>
      <div class="mr-6px">{{ talk.give }}</div>
      <div i-typcn-starburst-outline></div>
      <div class="mr-6px">{{ talk.read }}</div>
      <div i-typcn-calendar></div>
      <div>{{ talk.timeCreate?.substring(0, 10) }}</div>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.desc-cont {
  @apply px-1 pb-2 break-words mt-1;
  @apply bg-white text-sm text-cool-gray-600;
}
</style>
