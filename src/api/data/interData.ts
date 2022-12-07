import { IArticle } from './model/artileModel'
import { IVideo } from './model/videoModel'
import { ITag } from './model/tagModel'
import { IArticleTag } from './model/articleTagModel'
import { IOneType } from './model/oneModel'
import { IArticleType } from './model/articleTypeModel'
import { INav } from './model/navModel'
import { IInterface } from './model/intInterfaceModel'

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
export { IArticleTag, INav, IntOne, IOneType, IArticle, IVideo, ITag, IArticleType, IFy, IInterface }
