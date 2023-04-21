import { IInterface } from '../data/InterData'
import { get, add, update, del } from '@/utils/http/funApi'

export class InterfaceApi {
  /**
   * @description: 条件查询
   * @param {number} identity 用户-分类: 0 | 用户: 1 | 分类: 2
   * @param {string} userName 条件:用户
   * @param {string} type 条件:类别
   * @param {boolean} cache 缓存
   */
  static getCondition(identity: number, userName: string, type: string, cache: boolean) {
    return get(`/Interface/condition?identity=${identity}&userName=${userName}&type=${type}&cache=${cache}`, false)
  }

  /**
   * 分页查询
   * @param identity 所有: 0 | 分类: 1 | 用户名: 2 |  用户-分类: 3
   * @param type 类别参数, identity为0时可为空(null) 多条件以','分割
   * @param pageIndex 当前页
   * @param pageSize 每页记录条数
   * @returns
   */
  static getPaging(identity: number, type: string, pageIndex: number, pageSize: number) {
    return get(
      `/Interface/paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=id&isDesc=true&cache=false`,
      false
    )
  }

  /**
   * @description: 新增
   * @param {IInterface} rData
   */
  static add(rData: IInterface) {
    return add('/Interface/add', rData)
  }

  /**
   * @description: 更新
   * @param {IInterface} entity
   */
  static update(entity: IInterface) {
    return update('/Interface/edit', entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/Interface/del?id=${id}`)
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache = false) {
    return get(`/Interface/byid?id=${id}&cache=${cache}`, false)
  }
}
