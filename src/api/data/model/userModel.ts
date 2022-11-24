export interface IUser {
  id: number
  ip: string
  name: string
  email: string
  pwd: string
  photo: string
  timeCreate: any
  timeModified: any
  nickname: string
  brief: string
}

export const userForm: IUser = reactive({
  id: 0,
  ip: '',
  name: '',
  email: '',
  pwd: '',
  photo: '',
  timeCreate: '2022-11-15T06:03:53.588Z',
  timeModified: '2022-11-15T06:03:53.588Z',
  nickname: '',
  brief: ''
})

export const clearUser = () => {
  userForm.id = 0
  userForm.ip = ''
  userForm.name = ''
  userForm.email = ''
  userForm.pwd = ''
  userForm.photo = ''
  userForm.nickname = ''
  userForm.brief = ''
  userForm.timeCreate = '2021-11-13T03:18:19.821Z'
  userForm.timeModified = '2021-11-13T03:18:19.821Z'
}
// const state = reactive(clearArticle)
// const resetState = () => {
//   Object.assign(state, clearArticle())
// }
