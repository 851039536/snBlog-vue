import request from '@/utils/http/axios'

export class ListContentApi {
  static cnblogs() {
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
