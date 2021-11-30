import request from '@/utils/http/axios'

export class userTalk {
  static async GetUserTalkFirst() {
    return request({
      url: '/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true',
      method: 'get'
    })
  }
}
