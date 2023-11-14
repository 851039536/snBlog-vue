import { Article } from '@/api/model/Article'

export const articleData = ref<Article[]>([])

export const paging = reactive({
  page: 1,
  pagesize: 6,
  count: 0,
  identity: 0,
  typeStr: 'null',
  current: 1
})
