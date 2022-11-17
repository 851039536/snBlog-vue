<script lang="ts" setup>
import { interfacesApi } from '@/api'
import { hUser } from '@/hooks/commonly'
import { sideIndex } from '@/hooks/data'
import { routers } from '@/hooks/routers'
import { storage } from '@/utils/storage/storage'

const rData: any = ref([])

function getTopic(index: number) {
  sideIndex.value = index
}
onMounted(async () => {
  rData.value = await (await interfacesApi.GetType(0, storage.get(hUser.NAME), 'sidebar', true)).data
  getTopic(sideIndex.value)
})
</script>
<template>
  <div class="lside">
    <div
      v-for="(res, index) in rData"
      :key="index"
      class="lside-list"
      :class="sideIndex == index ? 'active' : ''"
      @click="getTopic(index)">
      <div v-if="res.identity" @click="routers(res.path)">
        {{ res.title }}
      </div>
    </div>
    <div v-show="storage.get(hUser.NAME) === hUser.NAME" bg-gray-200 text-lg>
      <div flex m-auto w-17 cursor-pointer hover:text-cool-gray-50>
        <div i-fxemoji-bolt h-5 w-5 mt-5px mr-1></div>
        登录
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.lside {
  --at-apply: h-[92%] top-[9%] left-[12%] w-175px fixed;
  --at-apply: bg-white rounded shadow;

  .lside-list {
    --at-apply: text-cool-gray-600 text-center text-lg;
    --at-apply: cursor-pointer transition duration-500 hover:bg-blue-400 rounded;

    div {
      --at-apply: m-2 py-1 mx-7;
    }
  }

  .lside-list.active {
    --at-apply: text-cool-gray-50 bg-blue-400;
  }
}

@media screen and (max-width: 768px) {
  .lside {
    display: none;
  }
}

@media screen and (min-width: 1366px) {
  .lside {
    --at-apply: top-[10.9%] left-[8%];
  }
}

@media screen and (min-width: 1536px) {
  .lside {
    --at-apply: top-[8.9%] left-[12%];
  }
}
</style>
