import request from '@/utils/http/axios'
// 主键查询

// eslint-disable-next-line import/prefer-default-export
export class sort {
  // 主键查询
  static GetByIdAsync(id: number): Promise<any> {
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

  static GetAllAsync(cache: boolean): Promise<any> {
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
