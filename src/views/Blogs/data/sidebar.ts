import { reactive } from 'vue'

interface ResData {
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
  title: string
}

export const resData: ResData = reactive({
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
  title: ''
})
