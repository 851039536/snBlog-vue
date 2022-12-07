import { get, add, update, del } from '@/utils/http/funApi'
import { IArticleTag } from '../data/interData'
export class articleTagApi {
  static GetById(id: number, cache = false) {
    return get(`/articleTag/byId?id=${id}&cache=${cache}`, false)
  }

  static GetAll(cache = false) {
    return get(`/articleTag/all?cache=${cache}`, false)
  }

  /**
   * @description: 新增
   * @param {IArticleTag} entity
   */
  static Add(entity: IArticleTag) {
    return add('/articleTag/add', entity)
  }

  /**
   * @description: 更新
   * @param {IArticleTag} entity
   */
  static Update(entity: IArticleTag) {
    return update(`/articleTag/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static Del(id: number) {
    return del(`/articleTag/del?id=${id}`, false)
  }
}
