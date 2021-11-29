/*
 * @Author: your name
 * @Date: 2021-09-29 14:00:23
 * @LastEditTime: 2021-11-15 15:09:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\data.ts
 */
interface one {
  id: number
  title: string
  text: string
  img: string
  typeId: number
  read: number
  give: number
  userId: number
  commentId: number
  timeCreate: any
  timeModified: any
}

interface oneType {
  id: number
  title: number
}

export type { one, oneType }
