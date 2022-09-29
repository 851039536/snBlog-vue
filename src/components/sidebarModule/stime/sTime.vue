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
    <svg
      t="1664176625654"
      class="icon mt-1"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3668"
      width="32"
      height="23">
      <path
        d="M912.82 342.68A436.48 436.48 0 1 0 947 512a433.41 433.41 0 0 0-34.18-169.32zM752.54 745.77l-3.66 3.89a27.2 27.2 0 0 1-38.28 1.16L560.14 609.21a108.49 108.49 0 1 1-77.89-201.56V253.08A27.11 27.11 0 0 1 509.33 226h5.34a27.11 27.11 0 0 1 27.08 27.08v154.57A108.46 108.46 0 0 1 604.26 569l147.12 138.5a27.11 27.11 0 0 1 1.16 38.27z"
        fill="#F9DB91"
        p-id="3669"></path>
      <path
        d="M541.75 407.65V253.08A27.11 27.11 0 0 0 514.67 226h-5.34a27.11 27.11 0 0 0-27.08 27.08v154.57a109 109 0 0 1 59.5 0zM751.38 707.5L604.26 569a109.27 109.27 0 0 1-44.12 40.18L710.6 750.82a27.2 27.2 0 0 0 38.28-1.16l3.66-3.89a27.11 27.11 0 0 0-1.16-38.27z"
        fill="#EF6A6A"
        p-id="3670"></path>
      <path
        d="M604.26 569a108.48 108.48 0 1 0-44.12 40.18A109.27 109.27 0 0 0 604.26 569z"
        fill="#AEF0FF"
        p-id="3671"></path>
      <path
        d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m298.4 746.4A420.48 420.48 0 0 1 525 933.8V896a13 13 0 0 0-26 0v37.8A421.57 421.57 0 0 1 90.2 525H128a13 13 0 0 0 0-26H90.2A421.57 421.57 0 0 1 499 90.2V128a13 13 0 0 0 26 0V90.2A421.57 421.57 0 0 1 933.8 499H896a13 13 0 0 0 0 26h37.8a420.48 420.48 0 0 1-123.4 285.4z"
        fill="#512C56"
        p-id="3672"></path>
      <path
        d="M760.29 698L620.58 566.54a121.57 121.57 0 0 0-65.83-168.29V253.08A40.2 40.2 0 0 0 514.67 213h-5.34a40.2 40.2 0 0 0-40.08 40.08v145.17a121.52 121.52 0 1 0 88.33 226.4l144.11 135.64a40.2 40.2 0 0 0 56.65-1.72l3.66-3.89a40.19 40.19 0 0 0-1.71-56.68z m-265-444.95A14.27 14.27 0 0 1 509.33 239h5.34a14.27 14.27 0 0 1 14.08 14.08v138.58a122.56 122.56 0 0 0-33.5 0zM416.51 512A95.49 95.49 0 1 1 512 607.49 95.59 95.59 0 0 1 416.51 512z m326.56 224.86l-3.66 3.89a14.21 14.21 0 0 1-19.9 0.61L581.62 611.57a122.35 122.35 0 0 0 24.59-22.85L742.47 717a14.27 14.27 0 0 1 0.6 19.86z"
        fill="#512C56"
        p-id="3673"></path>
    </svg>
    <div>
      <span>{{ state.date }}</span>
      <span>{{ state.time }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#clock {
  @apply m-auto h-92px mt-2 text-center mb-2 w-[97%];
  @apply bg-white rounded shadow text-2xl;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
