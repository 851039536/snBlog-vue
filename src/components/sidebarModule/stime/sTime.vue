<script lang="ts" setup>
import { reactive } from 'vue'

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
  width: 97%;
  color: #fff;
  color: #0d1e24;
  font-family: 'Share Tech Mono', monospace;
  text-align: center;

  @apply p-1 mb-2 mt-1 m-auto cursor-pointer;
  @apply bg-white shadow rounded;

  .time {
    padding: 5px 0;
    font-size: 30px;
    letter-spacing: 0.05em;
  }

  .date {
    font-size: 24px;
    letter-spacing: 0.1em;
  }
}
</style>
