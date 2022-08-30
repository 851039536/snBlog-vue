<script lang="ts" setup>
const state: any = reactive({
  date: '',
  time: ''
})
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
function zeroPadding(num: any, digit: any) {
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
    <p class="date">{{ state.date }}</p>
    <p class="time">{{ state.time }}</p>
  </div>
</template>

<style lang="scss" scoped>
#clock {
  @apply m-auto h-92px mt-2 text-center mb-2 w-[97%];
  @apply bg-white rounded shadow;

  .time {
    @apply text-xl;
  }

  .date {
    @apply text-2xl;
  }
}
</style>
