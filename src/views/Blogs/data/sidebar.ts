import { reactive } from 'vue'

interface BlogsSiList {
  article: any
  searchData: any
  talk: string
  User: any
  ArticleCount: string
  SortCount: string
  LabelsCount: string
  textCount: string
  readCount: string
  articledata: string
  sntitle: string
}

export const blogsSiList: BlogsSiList = reactive({
  article: [],
  searchData: [],
  talk: '',
  User: [],
  ArticleCount: '0',
  SortCount: '0',
  LabelsCount: '0',
  textCount: '0',
  readCount: '0',
  articledata: '',
  sntitle: ''
})
