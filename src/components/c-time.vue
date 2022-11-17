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
  <div id="clock">
    <div i-fxemoji-alarmclock mr-1></div>
    <span>{{ state.date }}</span>
    <span>{{ state.time }}</span>
  </div>
</template>

<style lang="scss" scoped>
#clock {
  @apply m-auto h-60px mt-2 text-center mb-2 w-[97%];
  @apply bg-white rounded shadow text-xl;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
