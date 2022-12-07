/**
 * @description:ILabel
 */
export interface IArticleTag {
  id: number
  name: string
  description: string
}
export const articleTagForm: IArticleTag = reactive({
  id: 0,
  name: '',
  description: ''
})

export const ClearArticleTag = () => {
  articleTagForm.id = 0
  articleTagForm.name = ''
  articleTagForm.description = ''
}
