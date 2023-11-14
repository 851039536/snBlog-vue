export interface Navigation {
  id: number
  name: string
  describe: string
  img: string
  url: string
  typeId: number
  userId: number
  timeCreate: string
  timeModified: string
  type?: Type
  user?: User
}

export interface Type {
  name: string
}

export interface User {
  name: string
  nickname: string
}

export const navigation: Navigation = reactive({
  id: 0,
  name: '',
  describe: '',
  img: '',
  url: '',
  typeId: 0,
  userId: 0,
  timeCreate: '2021-11-13T03:18:19.821Z',
  timeModified: '2021-11-13T03:18:19.821Z'
})

export const removeNavigation = () => {
  navigation.id = 0
  navigation.name = ''
  navigation.describe = ''
  navigation.typeId = 0
  navigation.userId = 0
  navigation.img = ''
  navigation.url = ''
}
