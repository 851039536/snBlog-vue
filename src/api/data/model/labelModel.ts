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
