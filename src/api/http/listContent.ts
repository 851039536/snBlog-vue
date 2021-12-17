import request from '@/utils/http/axios'

export class listContent {
  static async Cnblogs(): Promise<any> {
    return request(
      {
        url: '/api/AngleSharp/Cnblogs',
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
