<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { aData } from '../data'
import { navName } from '../utils/data'
import { useApi } from '@/api/useApi'

const { CommonApi } = useApi()

const SqlBackups = async () => {
  await CommonApi.SqlBackups().then(r => {
    if (r.status === 200) {
      message.success(aData.SUCCESS)
    }
  })
}

const reload: any = inject('reload')
onMounted(() => {
  navName.name = '设置'
  navName.name2 = 'sql管理'
})
</script>
<template>
  <div mb-2>
    <a-space>
      <a-button @click="reload()">刷新</a-button>
      <a-button @click="SqlBackups()">数据备份</a-button>
    </a-space>
  </div>
</template>
