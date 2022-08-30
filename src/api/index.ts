import request from '@/utils/http/axios'
import { article } from './http/article'
import { labels } from './http/labels'
import { sort } from './http/sort'
import { userTalk } from './http/usertalk'
import { setBlog } from './http/setBlog'
import { leave } from './http/leave'
import { navigation } from './http/navigation'
import { one } from './http/one'
import { video } from './http/video'
import { user } from './http/user'
import { listContent } from './http/listContent'
import { interfaces } from './http/interfaces'

/**
 * @description: 空函数查token权限
 * @param {*}
 * @return {*}
 */
function TOKEN() {
  return request(
    {
      url: '/api/AngleSharp/TOKEN',
      method: 'get'
    },
    {
      qiXiao_cancel: false
    }
  )
}

export {
  article, labels, sort, userTalk, setBlog, leave, navigation, one, video, user, listContent, TOKEN, interfaces
}
