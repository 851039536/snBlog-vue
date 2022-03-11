import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { storage } from '@/utils/storage/storage'
import { navigation, TOKEN } from '@/api'
import { navName } from '../../utils/data'
import { formState, stateArray, formNull } from './data'
import { routers } from '@/hooks/routers'

const uid: any = ref(storage.get('userId'))

export async function GetApi() {
  await formNull()
  await TOKEN()
  await navigation.GetSnNavigationTypeSAllAsync(false).then((ress) => {
    stateArray.navResult = ress.data
  })
  navName.name = '内容分享'
  navName.name2 = '新增内容'
}
export const onSubmit = async () => {
  formState.userId = uid.value
  await navigation.AddAsync(formState).then(() => {
    message.info('添加成功')
    routers('/Admin-index/NavTable')
  })
}
