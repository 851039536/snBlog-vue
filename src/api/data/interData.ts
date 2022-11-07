import { IArticle } from './model/artileModel'
import { IVideo } from './model/videoModel'
import { ITag } from './model/tagModel'
import { ILabel } from './model/labelModel'
import { IOneType } from './model/oneModel'
import { ISort } from './model/sortModel'
import { INav } from './model/navModel'

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

interface IFy {
  page: number
  pagesize: number
  count: number
  current: number
}
export { ILabel, INav, IntOne, IOneType, IArticle, IVideo, ITag, ISort, IFy }
