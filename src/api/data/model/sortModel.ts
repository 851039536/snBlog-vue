/**
 * @description:ISort
 */

export interface ISort {
  id: number
  name: string
  description: string
}
export const sortForm: ISort = reactive({
  id: 0,
  name: '',
  description: ''
})
