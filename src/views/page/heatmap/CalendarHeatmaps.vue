<script lang="ts" setup>
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
</script>
<template>
  <div>
    <CalendarHeatmap
      :values="[
        { date: '2023-9-22', count: 6 },
        { date: '2023-9-15', count: 6 },
        { date: '2023-9-16', count: 6 },
        { date: '2023-9-17', count: 6 },
        { date: '2023-9-18', count: 6 },
        { date: '2023-9-19', count: 6 },
        { date: '2023-9-20', count: 6 }
      ]"
      :end-date="'2023-12-30'"
      :round="5"></CalendarHeatmap>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
