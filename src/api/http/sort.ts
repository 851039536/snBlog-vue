import request from '@/utils/http/axios'
// 主键查询

export class sort {
  // 主键查询
  static async GetByIdAsync(id: number): Promise<any> {
    return request(
      {
        url: `/api/SnSort/GetByIdAsync?id=${id}&cache=true`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  static async GetAllAsync(cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnSort/GetAllAsync?cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
