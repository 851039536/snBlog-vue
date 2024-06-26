import { useRequest } from '@hooks/http/axios/useRequest'

const { get, add, update, del } = useRequest()
import { SnippetLabel } from '../model/SnippetLabel'

export class SnippetLabelApi {
  /**
   * @description: 查询总数
   * @param {boolean} cache 缓存
   */
  static getSum(cache: boolean) {
    return get(`/snippetTypeSub/sum?cache=${cache}`)
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache: boolean) {
    return get(`/snippetTypeSub/byId?id=${id}&cache=${cache}`, false)
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
      `/snippetTypeSub/paging?pageIndex=${pageIndex}&pageSize=${pagesize}&isDesc=${isDesc}&cache=${cache}`,
      false
    )
    return res
  }

  /**
   * @description: 新增数据
   * @param {any} entity
   */
  static add(entity: SnippetLabel) {
    return add('/snippetTypeSub/add', entity)
  }

  /**
   * @description: 更新数据
   * @param {IntArticle} entity
   */
  static update(entity: SnippetLabel) {
    return update(`/snippetTypeSub/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/snippetTypeSub/del?id=${id}`, false)
  }
}
