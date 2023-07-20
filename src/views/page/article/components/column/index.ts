import { IArticle } from '@api/data/InterData'

export const articleData = ref<IArticle[]>([])

export const paging = reactive({
  page: 1,
  pagesize: 6,
  count: 0,
  identity: 0,
  typeStr: 'null',
  current: 1
})
