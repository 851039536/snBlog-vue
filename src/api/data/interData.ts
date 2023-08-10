// 引入所需的 model
import { IVideo } from './model/VideoModel'
import { ITag } from './model/TagModel'
import { IArticleTag } from './model/ArticleTagModel'
import { IOneType } from './model/DiaryModel'
import { IArticleType } from './model/ArticleTypeModel'
import { IInterface } from './model/IntInterfaceModel'

interface IntOne {
  id: number
  name: string
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

interface IPaging {
  page?: number
  pagesize?: number
  count?: number
  current?: number
}
// 导出所有模块
export { IArticleTag, IntOne, IOneType, IVideo, ITag, IArticleType, IPaging, IInterface }
