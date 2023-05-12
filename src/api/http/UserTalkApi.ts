import { get } from './funApi'

export class UserTalkApi {
  static getUserTalkFirst() {
    return get('/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true', false, true)
  }
}
