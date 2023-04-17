import { get, add, update, del } from '@/utils/http/funApi'
import { ISnippetTag } from '../data/model/snippetTagMode'
// enum Api {
//   FY = '/api/v1/article/fy/',
//   SUM = '/api/v1/article/count/',
//   BYID = '/api/v1/article/by-id/',
//   CONTAINS = '/api/v1/article/contains/',
//   ADD = '/api/v1/article',
//   UPDATE = '/api/v1/article',
//   DELETE = '/api/v1/article/'
// }
class snippetTagApi {
  /**
   * @description: 查询总数
   * @param {boolean} cache 缓存
   */
  static GetSum(cache: boolean) {
    return get(`/snippetTag/sum?cache=${cache}`)
  }

  static GetAll(cache: boolean) {
    return get(`/snippetTag/all?cache=${cache}`)
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static GetById(id: number, cache: boolean) {
    return get(`/snippetTag/byId?id=${id}&cache=${cache}`, false)
  }

  /**
   * @description: 分页查询
   * @param {number} pagesize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  static async GetFy(pageIndex: number, pagesize: number, isDesc: boolean, cache: boolean) {
    const res = await get(
      `/snippetTag/paging?pageIndex=${pageIndex}&pageSize=${pagesize}&isDesc=${isDesc}&cache=${cache}`,
      false
    )
    return res
  }

  /**
   * @description: 新增数据
   * @param {any} entity
   */
  static Add(entity: ISnippetTag) {
    return add('/snippetTag/add', entity)
  }

  /**
   * @description: 更新数据
   * @param {IntArticle} entity
   */
  static Update(entity: ISnippetTag) {
    return update(`/snippetTag/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static Del(id: number) {
    return del(`/snippetTag/del?id=${id}`, false)
  }
}

export { snippetTagApi }