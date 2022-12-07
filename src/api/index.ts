import request from '@/utils/http/axios'
import { articleApi } from './http/articleApi'
import { articleTagApi } from './http/articleTagApi'
import { articleTypeApi } from './http/articleTypeApi'
import { userTalk } from './http/usertalk'
import { setBlog } from './http/setBlog'
import { leave } from './http/leave'
import { navigationApi } from './http/navigation'
import { one } from './http/one'
import { videoApi } from './http/video'
import { userApi } from './http/user'
import { listContent } from './http/listContent'
import { interfacesApi } from './http/interfaces'
import { snippetApi } from './http/snippetApi'
import { snippetTagApi } from './http/snippetTagApi'
import { snippetTypeApi } from './http/snippetTypeApi'
import { snippetLabelApi } from './http/snippetLabelApi'

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
  articleTagApi,
  articleTypeApi,
  userTalk,
  setBlog,
  leave,
  navigationApi,
  one,
  videoApi,
  userApi,
  listContent,
  TOKEN,
  interfacesApi,
  snippetApi,
  snippetTagApi,
  snippetTypeApi,
  snippetLabelApi
}
