<script lang="ts" setup>
const state: any = reactive({
  date: '',
  time: ''
})

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
function zeroPadding(num: number, digit: number) {
  let zero = ''
  for (let i = 0; i < digit; i += 1) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}
function updateTime() {
  const cd = new Date()
  state.time = `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)}`
  state.date = `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(cd.getMonth() + 1, 2)}-${zeroPadding(
    cd.getDate(),
    2
  )} ${week[cd.getDay()]}`
}
setInterval(updateTime, 1000)
updateTime()
</script>
<template>
  <c-right-sidebar-container>
    <div class="time">
      <div i-fxemoji-alarmclock mr-1></div>
      <span>{{ state.date }}</span>
      <span>{{ state.time }}</span>
    </div>
  </c-right-sidebar-container>
</template>

<style lang="scss" scoped>
.time {
  @apply text-lg p-1;
  @apply flex items-center justify-center;
}
</style>
