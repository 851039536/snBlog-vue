<script lang="ts" setup>
import { useUserTalkApi } from '@/hooks/http'
import { useUserInfo } from '@/hooks/useUserInfo'

const text = ref()
const { getUserName } = useUserInfo()
const { getUserTalkPaging } = useUserTalkApi()
onMounted(async () => {
  const name = await getUserTalkPaging(1, getUserName(), 1, 1, 'data', true, false)
  text.value = name.data.data[0].text
})
</script>
<template>
  <c-right-sidebar-container>
    <div flex py-3px text-base>
      <div i-typcn-spiral h-6 w-6></div>
      <span>公告</span>
    </div>
    <div class="desc-cont">{{ text }}</div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.desc-cont {
  @apply px-1 pb-4;
  @apply bg-white text-sm text-cool-gray-600;
}
</style>
