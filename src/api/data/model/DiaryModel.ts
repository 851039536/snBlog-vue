export interface IOneType {
  id: number
  name: string
}

export const oneForm: IOneType = reactive({
  id: 0,
  name: ''
})
