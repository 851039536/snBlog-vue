<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns } from './data'
import { InterfaceApi } from '@/api'
import { navName } from '../utils/data'
import { useData } from '../data'
import { clearInterface, interfaceForm } from '@/api/data/model/IntInterfaceModel'
import { storage } from '@/utils/storage/storage'
import { userInfo } from '@/utils/user/user-info'
import type { SelectProps } from 'ant-design-vue'
const { cancel, data } = useData()
const rData = ref([])
const visible = ref(false)
const addDisabled = ref(true)
const upDisabled = ref(true)
const selectValue = ref('ALL')

const reload: any = inject('reload')

const del = async (entity: any) => {
  await InterfaceApi.del(entity.id).then(() => {
    message.success(data.DEL)
    reload()
  })
}

const uid: any = ref(storage.get(userInfo.ID))

const Add = async () => {
  interfaceForm.userId = uid.value
  await InterfaceApi.add(interfaceForm).then(() => {
    message.info(data.SUCCESS)
    visible.value = false
    reload()
  })
}

const update = async () => {
  interfaceForm.userId = uid.value
  await InterfaceApi.update(interfaceForm).then(() => {
    message.info(data.SUCCESS)
    visible.value = false
    reload()
  })
}
const edit = async (id: number) => {
  clearInterface()
  upDisabled.value = false
  addDisabled.value = true
  visible.value = true

  await InterfaceApi.getById(id).then(r => {
    interfaceForm.id = r.data.id
    interfaceForm.name = r.data.name
    interfaceForm.path = r.data.path
    interfaceForm.typeId = r.data.typeId
    interfaceForm.userId = r.data.userId
    interfaceForm.identity = r.data.identity
  })
}

const handleChange = async () => {
  rData.value = await (
    await InterfaceApi.getPaging(3, `${storage.get(userInfo.NAME)},${selectValue.value}`, 1, 100)
  ).data
}
const options = ref<SelectProps['options']>([
  { value: 'sidebar', label: 'sidebar' },
  { value: 'header', label: 'header' }
])
onMounted(async () => {
  rData.value = await (await InterfaceApi.getPaging(2, storage.get(userInfo.NAME), 1, 100)).data
  navName.name = '页面设置'
  navName.name2 = '参数列表'
})
</script>
<template>
  <div class="table">
    <a-space>
      <a-button @click=";(visible = true), (addDisabled = false), (upDisabled = true), clearInterface()">添加</a-button>
      <a-button @click="reload()">刷新</a-button>
      <a-select
        ref="select"
        v-model:value="selectValue"
        style="width: 120px"
        :options="options"
        @change="handleChange"></a-select>
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
          <span>{{ record.type.name }}</span>
        </template>
        <template v-if="column.dataIndex === 'user'">
          <span>{{ record.user.name }}</span>
        </template>
        <template v-if="column.dataIndex === 'identity'">
          <span v-if="record.identity == 0" class="text-xl text-red-600">x</span>
          <span v-if="record.identity == 1" class="text-xl text-green-600">√</span>
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

  <c-modal-dialog :visible="visible" title="内容编辑" @close-model="visible = false">
    <div class="cont">
      <div class="flex">
        <a-input
          v-model:value="interfaceForm.name"
          size="large"
          prefix="标题 :"
          style="width: 160px"
          :bordered="false" />
        <a-select v-model:value="interfaceForm.name" style="width: 130px">
          <a-select-option value="主页">主页</a-select-option>
          <a-select-option value="首页">首页</a-select-option>
          <a-select-option value="博客">博客页</a-select-option>
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
          <a-select-option value="/article/column">主页</a-select-option>
          <a-select-option value="/article/column">首页</a-select-option>
          <a-select-option value="/qarticle">博客页</a-select-option>
          <a-select-option value="/Login">后台管理</a-select-option>
          <a-select-option value="code">代码块</a-select-option>
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
          <a-select-option :value="true">开启</a-select-option>
          <a-select-option :value="false">关闭</a-select-option>
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
    <div class="absolute bottom-2 right-15"><a-button :disabled="addDisabled" @click="Add">添加</a-button></div>
    <div class="absolute bottom-2 right-32"><a-button :disabled="upDisabled" @click="update">更新</a-button></div>
  </c-modal-dialog>
</template>

<style lang="scss" scoped>
.table {
  @apply mb-2;
}

.cont {
  @apply m-auto w-95 bg-gray-50 mb-10;

  div {
    @apply text-lg m-1 px-2;
  }
}
</style>
