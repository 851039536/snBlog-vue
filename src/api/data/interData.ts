// 引入所需的 model
import { IArticle } from './model/ArtileModel'
import { IVideo } from './model/VideoModel'
import { ITag } from './model/TagModel'
import { IArticleTag } from './model/ArticleTagModel'
import { IOneType } from './model/OneModel'
import { IArticleType } from './model/ArticleTypeModel'
import { INav } from './model/NavModel'
import { IInterface } from './model/IntInterfaceModel'

// 导出所需的接口
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
// 导出所有模块
export { IArticleTag, INav, IntOne, IOneType, IArticle, IVideo, ITag, IArticleType, IFy, IInterface }
