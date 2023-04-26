import request from '@/api/http/axios'

export class LeaveApi {
  static getAll(): Promise<any> {
    return request(
      {
        url: '/api/Snleave/GetAllAsync',
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
