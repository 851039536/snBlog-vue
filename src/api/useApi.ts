//集中API

import { ArticleApi } from './article/ArticleApi'
import { ArticleTagApi } from './article/ArticleTagApi'
import { ArticleTypeApi } from './article/ArticleTypeApi'
import { CommonApi } from './http/CommonApi'
import { DiaryApi } from './diary/DiaryApi'
import { DiaryTypeApi } from './diary/DiaryTypeApi'
import { InterfaceApi } from './http/InterfaceApi'
import { SetBlogApi } from './http/SetBlogApi'
import { SnippetAPI } from './snippet/SnippetAPI'
import { SnippetVersionAPI } from './snippet/SnippetVersionAPI'
import { SnippetLabelApi } from './http/SnippetLabelApi'
import { SnippetTagAPI } from './snippet/SnippetTagAPI'
import { SnippetTypeAPI } from './snippet/SnippetTypeAPI'
import { SnippetTypeSubAPI } from './snippet/SnippetTypeSubAPI'
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
    SnippetAPI,
    SnippetVersionAPI,
    SnippetLabelApi,
    SnippetTagAPI,
    SnippetTypeAPI,
    SnippetTypeSubAPI,
    UserApi,
    VideoApi,
    ListContentApi
  }
}
