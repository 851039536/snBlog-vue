import request from '@/utils/http/axios'

export class user {
  static async GetByIdAsync(id: number) {
    return request(
      {
        url: `/api/SnUser/GetByIdAsync?id=${id}&cache=true`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  static async Login(users: string, pwd: string) {
    return request(
      {
        url: `/api/SnUser/Login?users=${users}&pwd=${pwd}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
