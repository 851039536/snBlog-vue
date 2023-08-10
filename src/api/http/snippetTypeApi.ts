import { get, add, update, del } from '@/api/http/funApi'
// enum Api {
//   FY = '/api/v1/article/fy/',
//   SUM = '/api/v1/article/count/',
//   BYID = '/api/v1/article/by-id/',
//   CONTAINS = '/api/v1/article/contains/',
//   ADD = '/api/v1/article',
//   UPDATE = '/api/v1/article',
//   DELETE = '/api/v1/article/'
// }
export class SnippetTypeApi {
  /**
   * @description: 查询总数
   * @param {boolean} cache 缓存
   */
  static getSum(cache: boolean) {
    return get(`/snippetType/sum?cache=${cache}`)
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache: boolean) {
    return get(`/snippetType/byId?id=${id}&cache=${cache}`, false)
  }

  /**
   * @description: 分页查询
   * @param {number} pagesize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  static async getPaging(pageIndex: number, pagesize: number, isDesc: boolean, cache: boolean) {
    const res = await get(
      `/snippetType/paging?pageIndex=${pageIndex}&pageSize=${pagesize}&isDesc=${isDesc}&cache=${cache}`,
      false
    )
    return res
  }

  /**
   * @description: 新增数据
   * @param {any} entity
   */
  static add(entity: any) {
    return add('/snippetType/add', entity)
  }

  /**
   * @description: 更新数据
   * @param {IntArticle} entity
   */
  static update(entity: any) {
    return update(`/snippetType/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/snippetType/del?id=${id}`, false)
  }
}
