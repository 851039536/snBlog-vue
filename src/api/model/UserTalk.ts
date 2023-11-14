export interface UserTalk {
  id: number
  userId: number
  text: string
  timeCreate: string
  read: number
  give: number
  commentId: number
  user?: User
}

export interface User {
  name: string
  nickname: string
}

export const userTalk: UserTalk = reactive({
  id: 0,
  userId: 0,
  text: '',
  read: 0,
  give: 0,
  commentId: 0,
  timeCreate: '2021-11-13T03:18:19.821Z'
})

export const removeUserTalk = () => {
  userTalk.userId = 0
  userTalk.id = 0
  userTalk.text = ''
  userTalk.read = 0
  userTalk.commentId = 0
  userTalk.give = 0
  userTalk.timeCreate = '2021-11-13T03:18:19.821Z'
}
