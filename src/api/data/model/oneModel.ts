/**
 * @description:Labels
 */
export interface IOneType {
  id: number
  title: string
}

export const oneForm: IOneType = reactive({
  id: 0,
  title: ''
})
