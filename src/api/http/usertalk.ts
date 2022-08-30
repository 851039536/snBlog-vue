import request from '@/utils/http/axios'

export class userTalk {
  static GetUserTalkFirst() {
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
