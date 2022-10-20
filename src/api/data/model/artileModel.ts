export interface IArticle {
  id: number
  title: string
  sketch: string
  text: string
  read: number
  img: string
  commentId: number
  give: number
  labelId: number
  sortId: number
  userId: number | string
  timeCreate: any
  timeModified: any
}

export const articleForm: IArticle = reactive({
  id: 0,
  title: '',
  sketch: '',
  text: '',
  read: 0,
  img: '',
  commentId: 0,
  give: 0,
  labelId: 0,
  sortId: 0,
  userId: 0,
  timeCreate: '',
  timeModified: ''
})
