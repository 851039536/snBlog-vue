<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { leave } from '@/api/index'

const state: any = reactive({
  result: []
})

const GetApi = async () => {
  state.result = await (await leave.GetAllAsync()).data
}
onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <div class="leave">
    <div class="leave_main" data-title="气泡背景墙">
      <ul class="bubble_bgwall">
        <li v-for="result1 in state.result" :key="result1.id">
          {{ result1.title }}
        </li>
      </ul>
      <div class="bruce-2 animate__animated animate__fadeInUpBig">
        <form class="w-full max-w-sm">
          <div class="md:flex md:items-center">
            <div class="md:w-2/3">
              <input
                class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="666666666666！"
              />
            </div>
            <button
              class="px-3 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
              type="button"
            >
              Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
