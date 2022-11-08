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
  DEL = '删除成功!',
  FAIL = '错误!'
}

/**
 * 取消操作
 */
export const aCancel = () => {
  message.info('已取消', 6)
}
export const useData = () => {
  const cancel = () => {
    message.info('已取消', 6)
  }

  enum data {
    NULL = 'null',
    ALL = 'ALL',
    所有分类 = '所有分类',
    已通过 = '已通过',
    未审核 = '未审核',
    所有用户 = '所有用户',
    所有标签 = '所有标签',
    无权限 = '无权限,如有需求请联系管理员!',
    SUCCESS = '操作成功!',
    DEL = '删除成功!',
    FAIL = '错误!'
  }
  return { cancel, data }
}
