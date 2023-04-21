export interface INav {
  id: number
  title: string
  describe: string
  img: string
  typeId: number
  userId: number
  url: string
  // timeCreate: any
  // timeModified: any
}
export const navForm: INav = reactive({
  id: 0,
  title: '',
  describe: '',
  img: '',
  typeId: 0,
  userId: 0,
  url: ''
})

export const clearNav = () => {
  navForm.id = 0
  navForm.title = ''
  navForm.describe = ''
  navForm.img = ''
  navForm.typeId = 3
  navForm.userId = 0
  navForm.url = ''
}
