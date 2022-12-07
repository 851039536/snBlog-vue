/**
 * @description:IArticleType
 */

export interface IArticleType {
  id: number
  name: string
  description: string
}
export const articleTypeForm: IArticleType = reactive({
  id: 0,
  name: '',
  description: ''
})
export const ClearArticleType = () => {
  articleTypeForm.id = 0
  articleTypeForm.name = ''
  articleTypeForm.description = ''
}
