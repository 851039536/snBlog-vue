<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, editVisible, addDisabled, upDisabled } from './data'
import { userApi } from '@/api'
import { aCancel, aData } from '../data'
import { navName } from '../utils/data'
import dayjs from 'dayjs'
import { clearUser, userForm } from '@/api/data/model/userModel'

const reload: any = inject('reload')
const del = async (id: number) => {
  await userApi.Del(id).then(res => {
    if (res.data === 1) {
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
  await userApi.Contains(name).then(res => {
    rUser.value = res.data
    for (let index = 0; index < rUser.value.length; index++) {
      rUser.value[index].timeCreate = dayjs(rUser.value[index].timeCreate).format('YYYY-MM-DD')
      rUser.value[index].timeModified = dayjs(rUser.value[index].timeModified).format('YYYY-MM-DD-H:mm')
    }
  })
}
const edit = (id: number) => {
  userApi.GetByIdAsync(id).then(res => {
    userForm.id = res.data.id
    userForm.name = res.data.name
    userForm.email = res.data.email
    userForm.pwd = res.data.pwd
    userForm.ip = res.data.ip
    userForm.photo = res.data.photo
    userForm.nickname = res.data.nickname
    userForm.brief = res.data.brief
  })
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
  await userApi.GetPaging(1, 1000).then(res => {
    rUser.value = res.data.result
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
