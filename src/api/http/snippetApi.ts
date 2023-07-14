import request from '@/api/http/axios'
import { Tool } from '@/utils/common/common-tool'
import { get, add, update, del } from '@/api/http/funApi'
import { ISnippet } from '../data/model/SnippetMode'
// enum Api {
//   FY = '/api/v1/article/fy/',
//   SUM = '/api/v1/article/count/',
//   BID = '/api/v1/article/by-id/',
//   CONTAINS = '/api/v1/article/contains/',
//   ADD = '/api/v1/article',
//   UPDATE = '/api/v1/article',
//   DELETE = '/api/v1/article/'
// }
export class SnippetApi {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  static GetSum(identity: number, type: string, cache: boolean) {
    return get(`/article/sum?identity=${identity}&type=${type}&cache=${cache}`, false)
  }

  /**
   * 模糊查询
   * @param identity   所有:0|分类:1|标签:2|用户名:3|内容:4|标题:5</param>
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  static async getContains(identity: number, type: string, name: string, cache = true, pageIndex = 1, pageSize = 2) {
    const url = `/snippet/contains?identity=${identity}&type=${type}&name=${name}&cache=${cache}&pageIndex=${pageIndex}&pageSize=${pageSize}`
    const res = await request(url, false, false)
    return res
  }
  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache: boolean) {
    return get(`/snippet/byid?id=${id}&cache=${cache}`, false)
  }
  /**
   * 条件查询 GetTypeAsync
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  static getType(identity: number, type: string, cache: boolean) {
    return get(`/article/type?identity=${identity}&type=${type}&cache=${cache}`, false)
  }

  /**
   * 内容统计
   * @param identity 所有:0|分类:1|标签:2|用户账号:3
   * @param name 查询参数
   * @param cache 缓存
   */
  static getStrSum(identity: number, name: string, cache: boolean): Promise<any> {
    return get(`/snippet/strSum?identity=${identity}&name=${name}&cache=${cache}`, false)
  } ///snippet/strSum?identity=1&name=vue&cache=false

  /**
   * @description: 分页查询
   * @param {number} identity 所有:0|分类:1|标签:2|用户:3|子标签:4
   * @param {number} type 查询参数(多条件以','分割)
   * @param {number} pagesize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序规则 data:时间|read:阅读|give:点赞|id:主键
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  static async getPaging(
    identity: number,
    type: string | undefined,
    pageIndex: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ) {
    const res = await get(
      `/snippet/paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
      false
    )
    await Tool.momentTimeList(res)
    return res
  }

  // /**
  //  * @description: 条件更新
  //  * @param {any} entity
  //  * @param {string} type
  //  */
  // static UpdatePortion(entity: any, type: string): Promise<any> {
  //   return update(`/article/upPortion?type=${type}`, entity)
  // }

  /**
   * @description: 新增数据
   * @param {any} entity
   */
  static add(entity: ISnippet) {
    return add('/snippet/add', entity)
  }

  /**
   * @description: 更新数据
   * @param {ISnippet} entity
   */
  static update(entity: ISnippet) {
    return update(`/snippet/edit`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/snippet/del?id=${id}`, false)
  }
}
