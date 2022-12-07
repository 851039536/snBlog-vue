import { get, add, update, del } from '@/utils/http/funApi'
import { IArticleType } from '../data/interData'
export class articleTypeApi {
  static GetById(id: number, cache = false) {
    return get(`/articleType/byId?id=${id}&cache=${cache}`, false)
  }

  static GetAll(cache = false) {
    return get(`/articleType/all?cache=${cache}`, false)
  }

  /**
   * @description: 新增
   * @param {IArticleType} entity
   */
  static Add(entity: IArticleType) {
    return add('/articleType/add', entity)
  }

  /**
   * @description: 更新
   * @param {IArticleType} entity
   */
  static Update(entity: IArticleType) {
    return update(`/articleType/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static Del(id: number) {
    return del(`/articleType/del?id=${id}`, false)
  }
}
