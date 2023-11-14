<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { aData } from '../data'
import { navName } from '../utils/data'
import { removeNavigation, navigation } from '@api/model/Navigation'
import { useNavigationTypeApi, useNavigationApi } from '@hooksHttp/index'
import { rRouter } from '@/router/routerInfo'
import useRandom from '@/hooks/useRandom'
import { useRouter } from '@hooks/useRouter'
import { useUserInfo } from '@hooks/useUserInfo'
const { getUserId } = useUserInfo()
const { getAll } = useNavigationTypeApi()
const { adds } = useNavigationApi()
const { routers, go, reload } = useRouter()
const { random } = useRandom()
function GetTypeId(id: number) {
  navigation.typeId = id
}

const rType: any = ref([])
const uid: any = ref(getUserId())
const add = async () => {
  navigation.userId = uid.value
  navigation.img = `${random(1, 30, 3)}.jpg`
  await adds(navigation).then(() => {
    message.info(aData.SUCCESS)
    routers(rRouter.navTable)
  })
}
onMounted(async () => {
  removeNavigation()
  const ret = await getAll(false)
  rType.value = ret.data.data
  navName.name = '内容分享'
  navName.name2 = '新增内容'
})
</script>

<template>
  <div class="navigation m-auto">
    <div class="form-div">
      <a-input v-model:value="navigation.name" prefix="标题:" />
    </div>
    <div class="form-div">
      <div>描述:</div>
      <a-textarea v-model:value="navigation.describe" show-count :maxlength="100" />
    </div>

    <div class="flex p-2">
      <div>
        <a-select v-model:value="navigation.typeId" style="width: 120px">
          <a-select-option v-for="item in rType" :key="item.id" :label="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </div>

      <div class="ml-2 w-600px flex flex-wrap cursor-pointer rounded bg-yellow-50">
        <template v-for="item in rType" :key="item.id">
          <div class="m-1 hover:text-blue-400" @click="GetTypeId(item.id)">
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>
    <div class="form-div">
      <a-input v-model:value="navigation.url" prefix="地址:" />
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
