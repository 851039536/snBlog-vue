import request from '@/utils/http/axios'
import { articleApi } from './http/article'
import { labelsApi } from './http/labels'
import { sort } from './http/sort'
import { userTalk } from './http/usertalk'
import { setBlog } from './http/setBlog'
import { leave } from './http/leave'
import { navigationApi } from './http/navigation'
import { one } from './http/one'
import { videoApi } from './http/video'
import { userApi } from './http/user'
import { listContent } from './http/listContent'
import { interfacesApi } from './http/interfaces'

/**
 * @description: 空函数查token权限
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
  articleApi,
  labelsApi,
  sort,
  userTalk,
  setBlog,
  leave,
  navigationApi,
  one,
  videoApi,
  userApi,
  listContent,
  TOKEN,
  interfacesApi
}
