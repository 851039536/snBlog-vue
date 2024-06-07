<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, editVisible, addDisabled, upDisabled } from './data'
import { aCancel, aData } from '../data'
import { navName } from '../utils/data'
import dayjs from 'dayjs'
import { clearUser, userForm } from '@api/model/UserModel'
import { useApi } from '@/api/useApi'

const { UserApi } = useApi()
const reload: any = inject('reload')
const del = async (id: number) => {
  await UserApi.del(id).then(ret => {
    if (ret.data.data) {
      reload()
      message.success(aData.SUCCESS)
      return
    }
    reload()
    message.error(aData.FAIL)
  })
}
const rUser: any = ref([])

async function search(name: string) {
  if (name === '') return
  await UserApi.contains(name).then(res => {
    rUser.value = res.data
    for (let index = 0; index < rUser.value.length; index++) {
      rUser.value[index].timeCreate = dayjs(rUser.value[index].timeCreate).format('YYYY-MM-DD')
      rUser.value[index].timeModified = dayjs(rUser.value[index].timeModified).format('YYYY-MM-DD-H:mm')
    }
  })
}
const edit = async (id: number) => {
  const ret = await (await UserApi.getById(id, false)).data
  userForm.id = ret.data.id
  userForm.name = ret.data.name
  userForm.email = ret.data.email
  userForm.pwd = ret.data.pwd
  userForm.ip = ret.data.ip
  userForm.photo = ret.data.photo
  userForm.nickname = ret.data.nickname
  userForm.brief = ret.data.brief
  editVisible.value = true
  upDisabled.value = false
  addDisabled.value = true
}
const Add = () => {
  editVisible.value = true
  addDisabled.value = false
  upDisabled.value = true
  clearUser()
}

onMounted(async () => {
  navName.name = '用户管理'
  navName.name2 = '用户列表'
  await UserApi.getPaging(1, 1000, true, false).then(res => {
    rUser.value = res.data.data
    for (let index = 0; index < rUser.value.length; index++) {
      rUser.value[index].timeCreate = dayjs(rUser.value[index].timeCreate).format('YYYY-MM-DD')
      rUser.value[index].timeModified = dayjs(rUser.value[index].timeModified).format('YYYY-MM-DD-H:mm')
    }
  })
})
</script>
<template>
  <div mb-2>
    <a-space>
      <a-button @click="Add()">添加</a-button>
      <a-button @click="reload()">刷新</a-button>
      <a-select
        show-search
        placeholder="标题搜索"
        style="width: 200px"
        :default-active-first-option="false"
        :show-arrow="false"
        :not-found-content="null"
        @search="search"></a-select>
    </a-space>
  </div>
  <a-table
    size="small"
    :bordered="true"
    :columns="columns"
    row-key="id"
    :data-source="rUser"
    :pagination="{ pageSize: 15 }"
    :scroll="{ x: 1280, y: 500 }">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'edit'">
        <a @click="edit(record.id)">修改</a>
      </template>
      <template v-if="column.dataIndex === 'del'">
        <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="del(record.id)" @cancel="aCancel()">
          <a>删除</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
  <user-edit-modal></user-edit-modal>
</template>
@/api/model/UserModel
