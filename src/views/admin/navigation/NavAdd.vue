<script lang="ts" setup>
import { NavigationApi } from '@/api'
import { message } from 'ant-design-vue'
import { aData } from '../data'
import { routers, go, reload } from '@/utils/route'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'
import { userInfo } from '@/utils/user/user-info'
import { clearNav, navForm } from '@/api/data/model/NavModel'
import { rRouter } from '@/router/route-Info'
import useRandom from '@/hooks/useRandom'
const { random } = useRandom()
function GetTypeId(id: number) {
  navForm.typeId = id
}

const rType: any = ref([])
const uid: any = ref(storage.get(userInfo.ID))
const add = async () => {
  navForm.userId = uid.value
  navForm.img = `${random(1, 30, 3)}.jpg`
  await NavigationApi.add(navForm).then(() => {
    message.info(aData.SUCCESS)
    routers(rRouter.navTable)
  })
}
onMounted(async () => {
  clearNav()
  rType.value = await (await NavigationApi.getNavTypeAll(false)).data
  navName.name = '内容分享'
  navName.name2 = '新增内容'
})
</script>

<template>
  <div class="navform m-auto">
    <div class="form-div">
      <a-input v-model:value="navForm.title" prefix="标题:" />
    </div>
    <div class="form-div">
      <div>描述:</div>
      <a-textarea v-model:value="navForm.describe" show-count :maxlength="100" />
    </div>

    <div class="flex p-2">
      <div>
        <a-select v-model:value="navForm.typeId" style="width: 120px">
          <a-select-option v-for="item in rType" :key="item.id" :label="item.id" :value="item.id">
            {{ item.title }}
          </a-select-option>
        </a-select>
      </div>

      <div class="ml-2 w-600px flex flex-wrap cursor-pointer rounded bg-yellow-50">
        <template v-for="item in rType" :key="item.id">
          <div class="m-1 hover:text-blue-400" @click="GetTypeId(item.id)">
            {{ item.title }}
          </div>
        </template>
      </div>
    </div>
    <!-- <div class="form-div">
      <a-input v-model:value="navForm.img" prefix="图片链接:" />
    </div> -->
    <div class="form-div">
      <a-input v-model:value="navForm.url" prefix="地址:" />
    </div>
    <div class="p-2">
      <a-button type="primary" @click="add">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reload">刷新</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navform {
  @apply pt-10 h-700px w-[70%];

  .form-div {
    @apply mt-2 p-2 w-full;
  }
}
</style>
