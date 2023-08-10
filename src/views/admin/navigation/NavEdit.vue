<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { navName } from '../utils/data'
import { aData } from '../data'
import { rRouter } from '@/router/routerInfo'
import { useRouter } from '@hooks/useRouter'
import { useNavigationApi, useNavigationTypeApi } from '@hooks/http'
import { navigation } from '@hooks/http/model/Navigation'
const { routers, go, winUrl } = useRouter()
const { getById, updates } = useNavigationApi()
const { getAll } = useNavigationTypeApi()

const route = useRoute()
const Rid = reactive({
  id: route.query.id
})
const rType: any = ref([])
const update = async () => {
  await updates(navigation).then(() => {
    message.info(aData.SUCCESS)
    routers(rRouter.navTable)
  })
}

function GetTypeId(id: number) {
  navigation.typeId = id
}
onMounted(async () => {
  navName.name = '内容分享'
  navName.name2 = '编辑内容'
  const ret = await getAll()
  rType.value = ret.data.data

  let id = Rid.id
  await getById(id).then(ret => {
    navigation.id = ret.data.data.id
    navigation.name = ret.data.data.name
    navigation.describe = ret.data.data.describe
    navigation.img = ret.data.data.img
    navigation.typeId = ret.data.data.typeId
    navigation.userId = ret.data.data.userId
    navigation.url = ret.data.data.url
  })
})
</script>

<template>
  <div class="form m-auto">
    <div class="form-div">
      <a-input v-model:value="navigation.name" prefix="标题:" />
    </div>
    <div class="form-div">
      描述:
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
      <a-input v-model:value="navigation.img" prefix="图片链接:" />
    </div>
    <div class="form-div">
      <a-input v-model:value="navigation.url" prefix="地址:" />
    </div>
    <div class="form-div">
      <a @click="winUrl(navigation.url)">前往: {{ navigation.url }}</a>
    </div>
    <div class="p-2">
      <a-button type="primary" @click="update">更新</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply pt-10 h-700px w-[70%];

  .form-div {
    @apply mt-2 p-2 w-full;
  }
}
</style>
@/router/routerInfo
