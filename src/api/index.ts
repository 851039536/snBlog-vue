import request from '@/api/http/axios'
import { ArticleApi } from './http/ArticleApi'
import { ArticleTagApi } from './http/ArticleTagApi'
import { ArticleTypeApi } from './http/ArticleTypeApi'
import { UserTalkApi } from './http/UserTalkApi'
import { SetBlogApi } from './http/SetBlogApi'
import { LeaveApi } from './http/LeaveApi'
import { NavigationApi } from './http/NavigationApi'
import { DiaryApi } from './http/DiaryApi'
import { DiaryTypeApi } from './http/DiaryTypeApi'
import { VideoApi } from './http/VideoApi'
import { UserApi } from './http/UserApi'
import { ListContentApi } from './http/ListContentApi'
import { InterfaceApi } from './http/InterfaceApi'
import { SnippetApi } from './http/SnippetApi'
import { SnippetTagApi } from './http/SnippetTagApi'
import { SnippetTypeApi } from './http/SnippetTypeApi'
import { SnippetLabelApi } from './http/SnippetLabelApi'
import { CommonApi } from './http/CommonApi'

/**
 * @description: 空函数查token权限
 */
function TOKEN() {
  return request(
    {
      url: '/angleSharp/TOKEN',
      method: 'get'
    },
    {
      qiXiao_cancel: false
    },
    {
      loading: false
    }
  )
}

export {
  ArticleApi,
  ArticleTagApi,
  ArticleTypeApi,
  UserTalkApi,
  SetBlogApi,
  LeaveApi,
  NavigationApi,
  DiaryApi,
  DiaryTypeApi,
  VideoApi,
  UserApi,
  ListContentApi,
  TOKEN,
  InterfaceApi,
  SnippetApi,
  SnippetTypeApi,
  SnippetTagApi,
  CommonApi,
  SnippetLabelApi
}
