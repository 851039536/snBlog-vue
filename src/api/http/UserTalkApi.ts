import request from '@/api/http/axios'

export class UserTalkApi {
  static getUserTalkFirst() {
    return request(
      {
        url: '/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true',
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
