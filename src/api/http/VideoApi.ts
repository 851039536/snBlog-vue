import request from '@/api/http/axios'
import { get } from '@/api/http/funApi'

export class VideoApi {
  /**
   * 查询总数
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询参数
   * @param cache 缓存
   */
  static getSum(identity: number, type: string, cache = false) {
    return get(`/video/sum?identity=${identity}&type=${type}&cache=${cache}`)
  }

  /**
   * 条件查询
   * @param identity 分类:1 || 用户:2
   * @param type 查询参数
   * @param cache 缓存
   */
  static getType(identity: number, type: string, cache: boolean) {
    return get(`/video/type?identity=${identity}&type=${type}&cache=${cache}`)
  }

  static gestTest() {
    return request(
      {
        url: '/api/SnVideoType/AsyGestTest',
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * 主键查询
   * @param id 主键
   * @param cache 缓存
   */
  static getById(id: any, cache: boolean) {
    return get(`/video/byid?id=${id}&cache=${cache}`)
  }

  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询参数
   * @param page 当前页码
   * @param pagesize 每页记录条数
   * @param isDesc 是否倒序[true/false]
   * @param cache 缓存
   */
  static getPaging(identity: number, type: string, page: number, pagesize: number, isDesc: boolean, cache: boolean) {
    return get(
      `/video/paging?identity=${identity}&type=${type}&pageIndex=${page}&pageSize=${pagesize}&isDesc=${isDesc}&cache=${cache}`
    )
  }
}
