<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns } from './data'
import { interfacesApi } from '@/api'
import { navName } from '../utils/data'
import { useData } from '../data'
import { clearInterface, interfaceForm } from '@/api/data/model/intInterfaceModel'
import { storage } from '@/utils/storage/storage'
import { hUser } from '@/hooks/commonly'
const { cancel, data } = useData()
const rData = ref([])
const addVisible = ref(false)
const addDisabled = ref(true)
const upDisabled = ref(true)

const reload: any = inject('reload')
const del = async (entity: any) => {
  await interfacesApi.Del(entity.id).then(() => {
    message.success(data.DEL)
    reload()
  })
}

const uid: any = ref(storage.get(hUser.ID))
const Add = async () => {
  interfaceForm.userId = uid.value
  await interfacesApi.AddAsync(interfaceForm).then(() => {
    message.info(data.SUCCESS)
    addVisible.value = false
    reload()
  })
}

const Update = async () => {
  interfaceForm.userId = uid.value
  await interfacesApi.Update(interfaceForm).then(() => {
    message.info(data.SUCCESS)
    addVisible.value = false
    reload()
  })
}
const edit = async (id: number) => {
  clearInterface()
  upDisabled.value = false
  addDisabled.value = true
  addVisible.value = true

  await interfacesApi.GetById(id).then(res => {
    interfaceForm.id = res.data.id
    interfaceForm.title = res.data.title
    interfaceForm.path = res.data.path
    interfaceForm.typeId = res.data.typeId
    interfaceForm.userId = res.data.userId
    interfaceForm.identity = res.data.identity
  })
}
onMounted(async () => {
  rData.value = await (await interfacesApi.GetFy(2, storage.get(hUser.NAME), 1, 100)).data
  navName.name = '页面设置'
  navName.name2 = '参数列表'
})
</script>
<template>
  <div class="tables">
    <a-space>
      <a-button @click=";(addVisible = true), (addDisabled = false), (upDisabled = true), clearInterface()">
        添加
      </a-button>
      <a-button @click="reload()">刷新</a-button>
    </a-space>
  </div>
  <div>
    <a-table
      size="small"
      :bordered="true"
      :columns="columns"
      row-key="id"
      :data-source="rData"
      :pagination="{ pageSize: 12 }"
      :scroll="{ x: 1280, y: 500 }">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'type'">
          <p>{{ record.type.name }}</p>
        </template>
        <template v-if="column.dataIndex === 'user'">
          <p>{{ record.user.name }}</p>
        </template>
        <template v-if="column.dataIndex === 'identity'">
          <p>{{ record.identity }}</p>
        </template>
        <template v-if="column.dataIndex === 'edit'">
          <a @click="edit(record.id)">修改</a>
        </template>
        <template v-if="column.dataIndex === 'del'">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="del(record)" @cancel="cancel()">
            <a>删除</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>

  <a-modal
    v-model:visible="addVisible"
    :footer="null"
    :mask="false"
    title="导航添加"
    :centered="true"
    wrap-class-name="full-modal"
    :z-index="10"
    :mask-closable="false">
    <div class="cont">
      <div class="flex">
        <a-input
          v-model:value="interfaceForm.title"
          size="large"
          prefix="标题 :"
          style="width: 160px"
          :bordered="false" />
        <a-select v-model:value="interfaceForm.title" style="width: 130px">
          <a-select-option value="主页">主页</a-select-option>
          <a-select-option value="首页">首页</a-select-option>
          <a-select-option value="博客">博客</a-select-option>
          <a-select-option value="后台管理">后台管理</a-select-option>
          <a-select-option value="代码块">代码块</a-select-option>
          <a-select-option value="图册">图册</a-select-option>
          <a-select-option value="聚合搜索">聚合搜索</a-select-option>
          <a-select-option value="书单">书单</a-select-option>
          <a-select-option value="网站导航">网站导航</a-select-option>
          <a-select-option value="博客导航">博客导航</a-select-option>
          <a-select-option value="视频">视频</a-select-option>
          <a-select-option value="日记">日记</a-select-option>
        </a-select>
      </div>
      <div>
        <a-input
          v-model:value="interfaceForm.path"
          size="large"
          prefix="路径 :"
          style="width: 160px"
          :bordered="false" />
        <a-select v-model:value="interfaceForm.path" style="width: 130px">
          <a-select-option value="/index/column">主页</a-select-option>
          <a-select-option value="/index/column">首页</a-select-option>
          <a-select-option value="/tag">博客</a-select-option>
          <a-select-option value="/Login">后台管理</a-select-option>
          <a-select-option value="/code">代码块</a-select-option>
          <a-select-option value="/Photo">图册</a-select-option>
          <a-select-option value="/ListContent">聚合搜索</a-select-option>
          <a-select-option value="/book">书单</a-select-option>
          <a-select-option value="/BlogCircles">博客导航</a-select-option>
          <a-select-option value="/favorite">网站导航</a-select-option>
          <a-select-option value="/video">视频</a-select-option>
          <a-select-option value="/one">日记</a-select-option>
        </a-select>
      </div>
      <div>
        <a-input
          v-model:value="interfaceForm.identity"
          size="large"
          prefix="是否显示 :"
          style="width: 160px"
          :bordered="false" />
        <a-select v-model:value="interfaceForm.identity" style="width: 130px">
          <a-select-option :value="1">开启</a-select-option>
          <a-select-option :value="0">关闭</a-select-option>
        </a-select>
      </div>
      <div>
        <a-input
          v-model:value="interfaceForm.typeId"
          size="large"
          prefix="分类 :"
          style="width: 160px"
          :bordered="false" />
        <a-select v-model:value="interfaceForm.typeId" style="width: 130px">
          <a-select-option :value="1">顶部栏</a-select-option>
          <a-select-option :value="2">侧边栏</a-select-option>
        </a-select>
      </div>
    </div>
    <div class="absolute right-25 bottom-2"><a-button :disabled="addDisabled" @click="Add">添加</a-button></div>
    <div class="absolute right-45 bottom-2"><a-button :disabled="upDisabled" @click="Update">更新</a-button></div>
  </a-modal>
</template>

<style lang="scss" scoped>
.tables {
  @apply mb-2;
}

.cont {
  @apply m-auto w-82 bg-gray-50 mb-10;

  div {
    @apply text-lg m-1 px-2;
  }
}
</style>
