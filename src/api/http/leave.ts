import request from '@/utils/http/axios'

class leave {
  static GetAllAsync(): Promise<any> {
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
export { leave }
