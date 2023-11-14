import { useRequest } from '@hooks/http/axios/useRequest'

const { get, add, update, del } = useRequest()
import { ArticleType } from '../model/InterData'
export class ArticleTypeApi {
  static getById(id: number, cache = false) {
    return get(`/articleType/byId?id=${id}&cache=${cache}`, false)
  }

  static getAll(cache = false) {
    return get(`/articleType/all?cache=${cache}`, false)
  }

  /**
   * @description: 新增
   * @param {IArticleType} entity
   */
  static add(entity: ArticleType) {
    return add('/articleType/add', entity)
  }

  /**
   * @description: 更新
   * @param {IArticleType} entity
   */
  static update(entity: ArticleType) {
    return update(`/articleType/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/articleType/del?id=${id}`, false)
  }
}
