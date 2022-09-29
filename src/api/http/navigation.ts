import request from '@/utils/http/axios'
import { IntNav } from '@/api/data/interData'

export class navigation {
  /**
   * 查询总数
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type  查询条件
   * @param chche 缓存
   * @returns
   */
  static GetCountAsync(identity: number, type: string, chche: boolean) {
    return request(
      {
        url: `/api/SnNavigation/GetCountAsync?identity=${identity}&type=${type}&cache=${chche}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * 模糊查询
   * @param identity  无条件:0 || 分类:1 || 用户:2
   * @param type 查询条件
   * @param name 查询字段
   * @param chche 缓存
   */
  static GetContains(identity: number, type: string, name: string, chche: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnNavigation/GetContainsAsync?identity=${identity}&type=${type}&name=${name}&cache=${chche}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * 条件查询
   * @param identity 分类:1 || 用户:2
   * @param type 查询条件
   * @param cache 缓存
   */
  static GetTypeAsync(identity: number, type: string, cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnNavigation/GetTypeAsync?identity=${identity}&type=${type}&cache=${cache}`,
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
  static GetByIdAsync(id: any, cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnNavigation/GetByIdAsync?id=${id}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   *
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询条件
   * @param page 当前页码
   * @param pagesize 每页记录条数
   * @param ordering 排序条件[data:时间 按id排序]
   * @param isDesc 是否倒序[true/false]
   * @param cache 缓存
   */
  static GetFyAsync(
    identity: number,
    type: string,
    page: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ) {
    return request(
      {
        url: `/api/SnNavigation/GetFyAsync?identity=${identity}&type=${type}&pageIndex=${page}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 新增数据
   * @param {any} data
   */
  static AddAsync(data: IntNav) {
    return request(
      {
        url: '/api/SnNavigation/AddAsync',
        method: 'post',
        data: data
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 更新数据
   * @param {IntArticle} resultData
   */
  static UpdateAsync(resultData: IntNav) {
    return request(
      {
        url: '/api/SnNavigation/UpdateAsync',
        method: 'put',
        data: resultData
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 删除
   * @param {number} id
   * @return {*}
   */
  static DeleteAsync(id: number) {
    return request(
      {
        url: `/api/SnNavigation/DeleteAsync?id=${id}`,
        method: 'delete'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  // ==================分类===========================

  /**
   * @description: 查询分类内容
   */
  static GetSnNavigationTypeSAllAsync(cache: boolean) {
    return request(
      {
        url: `/api/SnNavigationType/GetAllAsync?cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
