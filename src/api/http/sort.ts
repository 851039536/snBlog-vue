import request from '@/utils/http/axios'
// 主键查询

export class sort {
  // 主键查询
  static GetById(id: number) {
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

  static GetAll(cache: boolean) {
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
