// import { roleApi } from '@/api/http/role'
// import { hRole, hUser } from '@/hooks/data'
// import { storage } from '@/utils/storage/storage'
// import { message } from 'ant-design-vue'

import { message } from 'ant-design-vue'

/**
 * 常用字段
 */
export enum aData {
  NULL = 'null',
  ALL = 'ALL',
  所有分类 = '所有分类',
  已通过 = '已通过',
  未审核 = '未审核',
  所有用户 = '所有用户',
  所有标签 = '所有标签',
  无权限 = '无权限,如有需求请联系管理员!',
  SUCCESS = '操作成功!',
  FAIL = '错误!'
}

/**
 * 取消操作
 */
export const aCancel = () => {
  message.info('已取消', 6)
}

// /**
//  * 检查用户权限
//  * @param id 1:文档审核 2:删除 3:编辑 4:超级管理 5:添加
//  * @returns bool
//  */
// export async function CheckUserRole(id: number) {
//   let AUDIT = 0
//   let DEL = 0
//   let EDIT = 0
//   let SUPER = 0
//   let ADD = 0
//   switch (id) {
//     case 1:
//       AUDIT = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.audit
//       SUPER = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.super
//       if (Object.is(SUPER, hRole.SUPER)) return true //先判断是否有最高权限
//       if (Object.is(AUDIT, hRole.AUDIT)) {
//         message.warning(aData.无权限)
//         return false
//       }
//       break
//     case 2:
//       DEL = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.del
//       SUPER = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.super
//       if (Object.is(SUPER, hRole.SUPER)) return true //先判断是否有最高权限
//       if (Object.is(DEL, hRole.DEL)) {
//         message.warning(aData.无权限)
//         return false
//       }
//       break
//     case 3:
//       EDIT = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.edit
//       SUPER = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.super
//       if (Object.is(SUPER, hRole.SUPER)) return true //先判断是否有最高权限
//       if (Object.is(EDIT, hRole.EDIT)) {
//         message.warning(aData.无权限)
//         return false
//       }
//       break

//     case 5:
//       ADD = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.add
//       SUPER = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.super
//       if (Object.is(SUPER, hRole.SUPER)) return true //先判断是否有最高权限
//       if (Object.is(ADD, hRole.ADD)) {
//         message.warning(aData.无权限)
//         return false
//       }
//       break

//     case 4:
//       SUPER = await (await roleApi.GetByIdAsync(Number(storage.get(hUser.ID)))).data.data.super
//       if (!Object.is(SUPER, hRole.SUPER)) {
//         message.warning(aData.无权限)
//         return false
//       }
//       break
//     default:
//       return false
//   }
//   return true
// }

// /**
//  * 检测传入的id是否跟当前登录的id相同
//  * @param userid 用户id
//  */
// export function CheckUserId(userid: number | string) {
//   if (storage.get(hUser.ID) !== userid) {
//     message.warning('不允许操作非当前用户的内容')
//     return false
//   }
//   return true
// }
