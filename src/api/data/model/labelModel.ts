/**
 * @description:ILabel
 */
export interface ILabel {
  id: number
  name: string
  description: string
  snArticles: any
}
export const labelForm: ILabel = reactive({
  id: 0,
  name: '',
  description: '',
  snArticles: ''
})

export const clearLabel = () => {
  labelForm.id = 0
  labelForm.name = ''
  labelForm.description = ''
  labelForm.snArticles = ''
}
