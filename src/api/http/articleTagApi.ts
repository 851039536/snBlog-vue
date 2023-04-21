import { get, add, update, del } from '@/utils/http/funApi'
import { IArticleTag } from '../data/InterData'
export class ArticleTagApi {
  /**
   * @description: 根据 ID 获取文章标签
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache = false) {
    const url = `/articleTag/byId?id=${id}&cache=${cache}`
    return get(url, false)
  }

  /**
   * @description: 获取所有文章标签
   * @param {boolean} cache
   */
  static getAll(cache = false) {
    const url = `/articleTag/all?cache=${cache}`
    return get(url, false)
  }

  /**
   * @description: 新增文章标签
   * @param {IArticleTag} entity
   */
  static add(entity: IArticleTag) {
    const url = '/articleTag/add'
    return add(url, entity)
  }

  /**
   * @description: 更新文章标签
   * @param {IArticleTag} entity
   */
  static update(entity: IArticleTag) {
    const url = `/articleTag/update`
    return update(url, entity)
  }

  /**
   * @description: 删除文章标签
   * @param {number} id
   */
  static del(id: number) {
    const url = `/articleTag/del?id=${id}`
    return del(url, false)
  }
}
