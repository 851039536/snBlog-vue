import request from '@/utils/http/axios'

export class listContent {
  static Cnblogs() {
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
