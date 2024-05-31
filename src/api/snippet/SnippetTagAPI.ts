import { useRequest } from '@hooks/http/axios/useRequest'

const { get, add, del, update } = useRequest()

export class SnippetTagAPI {
  static getAll(cache: boolean) {
    return get(`/snippetTag/all?cache=${cache}`)
  }
  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache = false) {
    return get(`/snippetTag/byId?id=${id}&cache=${cache}`, false)
  }

  static getByTitle(name: string, cache = false) {
    return get(`/snippetTag/byTitle?name=${name}&cache=${cache}`, false)
  }

  /**
   * @description: 查询总数
   * @param {boolean} cache 缓存
   */
  static getSum(cache: boolean) {
    return get(`/snippetTag/sum?cache=${cache}`)
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
      `/snippetTag/paging?pageIndex=${pageIndex}&pageSize=${pagesize}&isDesc=${isDesc}&cache=${cache}`,
      false
    )
    return res
  }

  /**
   * @description: 新增数据
   * @param {any} entity
   */
  static add(entity: any) {
    return add('/snippetTag/add', entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static delete(id: number) {
    return del(`/snippetTag/del?id=${id}`, false)
  }

  /**
   * @description: 更新
   * @param  entity
   */
  static update(entity: any) {
    return update(`/snippetTag/update`, entity)
  }
}
