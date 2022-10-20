import request from '@/utils/http/axios'

class interfaces {
  /**
   * @description: 条件查询
   * @param {number} identity 分类和用户:0 || 用户:1 || 分类:2
   * @param {string} users 条件:用户
   * @param {string} type 条件:类别
   * @param {boolean} cache 缓存
   */
  static GetType(identity: number, users: string, type: string, cache: boolean) {
    return request(
      {
        url: `/api/SnInterface/GetTypeAsync?identity=${identity}&users=${users}&type=${type}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  static GetAllAsync(cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnInterface/GetAllAsync?cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
  static GetFy(identity: number, type: string, pageIndex: number, pageSize: number) {
    return request(
      {
        url: `/api/SnInterface/GetFyAsync?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=id&isDesc=true&cache=false`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}

export { interfaces }
