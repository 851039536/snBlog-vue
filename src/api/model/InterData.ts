// 引入所需的 model
import { IVideo } from './VideoModel'
import { ITag } from './TagModel'
import { ArticleTag } from './ArticleTag'
import { IOneType } from './DiaryModel'
import { ArticleType } from './ArticleType'
import { IInterface } from './IntInterfaceModel'
interface IPaging {
  page?: number
  pagesize?: number
  count?: number
  current?: number
}
// 导出所有模块
export { ArticleTag, IOneType, IVideo, ITag, ArticleType, IPaging, IInterface }
