export interface IInterface {
  id: number
  name: string
  path: string
  typeId: number
  userId: number
  identity: number
}
export const interfaceForm: IInterface = reactive({
  id: 0,
  name: '',
  path: '',
  typeId: 0,
  userId: 0,
  identity: 0
})

export const clearInterface = () => {
  interfaceForm.id = 0
  interfaceForm.name = ''
  interfaceForm.path = ''
  interfaceForm.typeId = 1
  interfaceForm.userId = 0
  interfaceForm.identity = 0
}
