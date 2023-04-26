import request from '@/api/http/axios'

export class OneApi {
  /**
   * 查询总数
   * @param identity 所有:0 || 分类:1 || 用户2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  static getSun(identity: number, type: string, cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnOne/GetSunAsync?identity=${identity}&type=${type}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  // 统计 text:内容字段数-read:阅读数量-give:点赞数量
  static getSum(type: string): Promise<any> {
    return request(
      {
        url: `/api/SnOne/GetSumAsync?type=${type}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  // 更新部分列[give read]
  static updatePortion(result: any, type: string): Promise<any> {
    return request(
      {
        // 更新
        url: `/api/SnOne/UpdatePortionAsync?type=${type}`,
        method: 'put',
        data: result
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询参数
   * @param page 当前页码
   * @param pagesize 每页记录条数
   * @param ordering 排序条件[data:时间 read:阅读 give:点赞 按id排序]
   * @param isDesc 是否倒序[true/false]
   * @param cache 缓存
   * @returns
   */
  static getPaging(
    identity: number,
    type: string,
    page: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ): Promise<any> {
    return request(
      {
        url: `/api/SnOne/GetPagingAsync?identity=${identity}&type=${type}&pageIndex=${page}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   *  主键查询
   * @param id 主键
   * @param cache 缓存
   */
  static getById(id: number, cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnOne/GetByIdAsync?id=${id}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  // 查询one副表
  // 查询所有
  static getOneTypeAll(): Promise<any> {
    return request(
      {
        url: '/api/SnOneType/GetAllAsync',
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
