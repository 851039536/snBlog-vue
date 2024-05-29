//集中API

import { ArticleApi } from './article/ArticleApi'
import { ArticleTagApi } from './article/ArticleTagApi'
import { ArticleTypeApi } from './article/ArticleTypeApi'
import { CommonApi } from './http/CommonApi'
import { DiaryApi } from './diary/DiaryApi'
import { DiaryTypeApi } from './diary/DiaryTypeApi'
import { InterfaceApi } from './http/InterfaceApi'
import { SetBlogApi } from './http/SetBlogApi'
import { SnippetApi } from './http/SnippetApi'
import { SnippetLabelApi } from './http/SnippetLabelApi'
import { SnippetTagApi } from './http/SnippetTagApi'
import { SnippetTypeApi } from './http/SnippetTypeApi'
import { UserApi } from './http/UserApi'
import { VideoApi } from './http/VideoApi'
import { ListContentApi } from './http/ListContentApi'
export function useApi() {
  return {
    ArticleApi,
    ArticleTagApi,
    ArticleTypeApi,
    CommonApi,
    DiaryApi,
    DiaryTypeApi,
    InterfaceApi,
    SetBlogApi,
    SnippetApi,
    SnippetLabelApi,
    SnippetTagApi,
    SnippetTypeApi,
    UserApi,
    VideoApi,
    ListContentApi
  }
}
