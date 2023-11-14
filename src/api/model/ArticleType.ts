export interface ArticleType {
  id?: number
  name?: string
  description?: string
}
export const articleType: ArticleType = reactive({
  id: 0,
  name: '',
  description: ''
})
export const clearArticleType = () => {
  articleType.id = 0
  articleType.name = ''
  articleType.description = ''
}
