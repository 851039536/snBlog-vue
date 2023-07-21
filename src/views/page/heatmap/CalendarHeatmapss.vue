<script lang="ts" setup>
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
</script>
<template>
  <div class="mt-20 w-300 bg-blue-100">
    <CalendarHeatmap
      :values="[
        { date: '2023-1-15', count: 2 },
        { date: '2023-6-16', count: 1 },
        { date: '2023-6-17', count: 3 },
        { date: '2023-6-18', count: 4 },
        { date: '2023-6-19', count: 5 },
        { date: '2023-6-20', count: 6 }
      ]"
      end-date="2023-12-30"></CalendarHeatmap>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
