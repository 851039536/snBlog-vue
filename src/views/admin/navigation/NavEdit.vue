<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { NavigationApi } from '@/api'
import { navName } from '../utils/data'
import { aData } from '../data'
import { rRouter } from '@/router/route-Info'
import { navForm } from '@/api/data/model/NavModel'
import { useRouter } from '@hooks/useRouter'
const { routers, go, winUrl } = useRouter()

const route = useRoute()
const Rid = reactive({
  id: route.query.id
})
const rType: any = ref([])
const update = async () => {
  await NavigationApi.update(navForm).then(() => {
    message.info(aData.SUCCESS)
    routers(rRouter.navTable)
  })
}

function GetTypeId(id: number) {
  navForm.typeId = id
}
onMounted(async () => {
  navName.name = '内容分享'
  navName.name2 = '编辑内容'
  await NavigationApi.getNavTypeAll().then(res => {
    rType.value = res.data
  })

  await NavigationApi.getByIdAsync(Rid.id).then(res => {
    navForm.id = res.data.id
    navForm.title = res.data.title
    navForm.describe = res.data.describe
    navForm.img = res.data.img
    navForm.typeId = res.data.typeId
    navForm.userId = res.data.userId
    navForm.url = res.data.url
  })
})
</script>

<template>
  <div class="form m-auto">
    <div class="form-div">
      <a-input v-model:value="navForm.title" prefix="标题:" />
    </div>
    <div class="form-div">
      描述:
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
    <div class="form-div">
      <a-input v-model:value="navForm.img" prefix="图片链接:" />
    </div>
    <div class="form-div">
      <a-input v-model:value="navForm.url" prefix="地址:" />
    </div>
    <div class="form-div">
      <a @click="winUrl(navForm.url)">前往: {{ navForm.url }}</a>
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
