/**
 * @description: 视频接口
 */
interface IntVideo {
  id: number
  title: string
  img: string
  typeId: number
  userId: number
  timeCreate: any
  timeModified: any
  url: string
}

interface IntLabels {
  id: number
  name: string
  description: string
  snArticles: any
}
interface IntArticle {
  id: number
  title: string
  sketch: string
  text: string
  read: number
  img: string
  commentId: number
  give: number
  labelId: number
  sortId: number
  userId: number
  timeCreate: any
  timeModified: any
}

interface IntNav {
  id: number
  title: string
  describe: string
  img: string
  typeId: number
  userId: number
  url: string
  // timeCreate: any
  // timeModified: any
}

export interface IntSort {
  id: number
  name: string
  description: string
}
export interface IntTag {
  id: number
  name: string
  description: string
}
export interface IntTalk {
  id: number
  title: string
  describe: string
  text: string
  read: number
  give: number
  commentId: number
  userId: number
  typeId: number
  timeCreate: string
  timeModified: string
}
export interface IntInterface {
  id: number
  title: string
  path: string
  typeId: number
  userId: number
  identity: number
}

interface IntOne {
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

interface IntOneType {
  id: number
  title: number
}

export type {
  IntVideo, IntLabels, IntArticle, IntNav, IntOne, IntOneType
}
